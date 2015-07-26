package nandhi.persistence.store;

import java.math.BigInteger;
import java.util.Iterator;
import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.EntityNotFoundException;
import javax.persistence.Persistence;
import javax.persistence.Query;
import javax.transaction.HeuristicMixedException;
import javax.transaction.HeuristicRollbackException;
import javax.transaction.NotSupportedException;
import javax.transaction.RollbackException;
import javax.transaction.Status;
import javax.transaction.SystemException;

import nandhi.app.transaction.AppTransaction;
import nandhi.app.transaction.AppTransactionManager;
import nandhi.persistence.PersistentStore;
import nandhi.persistence.filter.AttributeFilter;
import nandhi.persistence.filter.ResourceFilter;

public class JPADatabaseStore implements PersistentStore, AppTransaction {

    private static EntityManagerFactory mEntityManagerFactory;

    private ThreadLocal<EntityManager> mEntityManagerTL = new ThreadLocal<EntityManager>();

    public JPADatabaseStore(String persistentUnit) {

        mEntityManagerFactory = Persistence.createEntityManagerFactory(persistentUnit);
    }

    private EntityManager getEntityManager() {

        EntityManager entityManager = mEntityManagerTL.get();

        if (entityManager == null) {

            entityManager = mEntityManagerFactory.createEntityManager();
            this.mEntityManagerTL.set(entityManager);
        }

        try {
            if (!entityManager.getTransaction()
                              .isActive()
                            && AppTransactionManager.getInstance()
                                                    .getStatus() == Status.STATUS_ACTIVE) {

                AppTransactionManager.getInstance()
                                     .enlistTransaction(this);
                entityManager.getTransaction()
                             .begin();
            }
        } catch (Exception e) {
            throw new RuntimeException(e);
        }

        return entityManager;
    }

    public final void assignSequenceNumber(Object entity) {

    }

    public void create(Object object) {

        getEntityManager().persist(object);
    }

    public <T> T update(T object) {

        object = merge(object);
        getEntityManager().persist(object);
        return object;
    }

    public <T> T delete(Class<T> entityClass,
                        Object id) {

        T entity = get(entityClass,
                       id);
        getEntityManager().remove(entity);

        return entity;
    }

    public <T> void delete(T entity) {

        getEntityManager().remove(entity);

    }

    public <T> T merge(T object) {

        return getEntityManager().merge(object);
    }

    public <T> int count(ResourceFilter<T> ResourceFilter) {

        String queryStr = ResourceFilter.toCountSQL();

        Query query = getEntityManager().createQuery(queryStr);
        setParameters(query,
                      ResourceFilter);

        Number count = (Number) query.getResultList();

        return count.intValue();
    }

    public <T> T getFirstMatchingResource(ResourceFilter<T> ResourceFilter) {

        List<T> entityList = get(ResourceFilter);
        return ((entityList == null) || (entityList.isEmpty())) ? null
                        : entityList.get(0);
    }

    public <T> List<T> get(ResourceFilter<T> ResourceFilter) {

        String queryStr = ResourceFilter.toSQL();

        Query query = getEntityManager().createQuery(queryStr);
        setParameters(query,
                      ResourceFilter);

        @SuppressWarnings("unchecked")
        List<T> entityList = (List<T>) query.getResultList();

        return entityList;
    }

    public <T> boolean exists(ResourceFilter<T> ResourceFilter) {

        return getFirstMatchingResource(ResourceFilter) != null;
    }

    @Override
    public <T> T get(Class<T> classObj,
                     Object key) {

        T entity = getEntityManager().find(classObj,
                                           key);
        if (entity == null) {
            throw new EntityNotFoundException("The entity '"
                            + classObj.getSimpleName() + "' with id '" + key
                            + "' is not found");
        }

        return entity;
    }

    @Override
    public long nextSequenceNumber(String sequenceName) {

        EntityManager entityManager = getEntityManager();
        Query query = entityManager.createNativeQuery("select value from core_app_entity_sequence where name='"
                        + sequenceName + "' for update");

        BigInteger value = (BigInteger) query.getSingleResult();
        long lValue = value.longValue();
        Query updateQuery = entityManager.createNativeQuery("update core_app_entity_sequence set value = "
                        + (lValue + 1) + " where name ='" + sequenceName + "'");
        if (updateQuery.executeUpdate() == 0) {
            // Handle Error
        }
        return lValue;
    }

    private <T> void setParameters(Query query,
                                   ResourceFilter<T> ResourceFilter) {

        Iterator<AttributeFilter> attrFilterIter = ResourceFilter.getQueryParameters();

        while (attrFilterIter.hasNext()) {
            AttributeFilter attrFilter = (AttributeFilter) attrFilterIter.next();
            if (attrFilter.isDynamic()) {
                query.setParameter(attrFilter.getNormalizedAttributeName(),
                                   attrFilter.getValue());
            }
        }

        int pageSize = ResourceFilter.getPageSize();
        if (pageSize > 0) {
            query.setMaxResults(pageSize);
        }

        int pageNo = ResourceFilter.getPageNumber();
        if (pageNo > 0) {
            query.setFirstResult(pageNo * pageSize);
        }

    }

    @Override
    public void begin() throws NotSupportedException,
                       SystemException {

        // getEntityManager().getTransaction()
        // .begin();
        getEntityManager();
    }

    @Override
    public void commit() throws RollbackException,
                        HeuristicMixedException,
                        HeuristicRollbackException,
                        SecurityException,
                        IllegalStateException,
                        SystemException {

        EntityManager entityManager = this.mEntityManagerTL.get();
        if (entityManager == null) {
            return;
        }
        try {

            entityManager.getTransaction()
                         .commit();
        } catch (RuntimeException ex) {
            try {
                entityManager.getTransaction()
                             .rollback();
            } catch (Exception e) {
            }
            throw ex;
        } catch (Exception ex) {
            try {
                entityManager.getTransaction()
                             .rollback();
            } catch (Exception e) {
            }

            throw new RuntimeException(ex);
        } finally {
            closeSession();

        }
    }

    @Override
    public int getStatus() throws SystemException {
        return 0;
    }

    @Override
    public void rollback() throws IllegalStateException,
                          SecurityException,
                          SystemException {
        EntityManager entityManager = this.mEntityManagerTL.get();
        if (entityManager == null) {
            return;
        }
        try {
            entityManager.getTransaction()
                         .rollback();
        } catch (IllegalStateException e) {
            //
        } finally {
            closeSession();
        }
    }

    @Override
    public void setRollbackOnly() throws IllegalStateException,
                                 SystemException {

    }

    @Override
    public void setTransactionTimeout(int arg0) throws SystemException {
    }

    @Override
    public void closeSession() {
        EntityManager entityManager = mEntityManagerTL.get();

        if (entityManager != null) {

            mEntityManagerTL.remove();
            entityManager.clear();
            entityManager.close();
        }
    }

}