package nandhi.app.transaction;

import javax.transaction.HeuristicMixedException;
import javax.transaction.HeuristicRollbackException;
import javax.transaction.NotSupportedException;
import javax.transaction.RollbackException;
import javax.transaction.SystemException;

public class AppTransactionManager implements AppTransaction {

    private ThreadLocal<AppTransactionRegistry> appTransactionRegistry = new ThreadLocal<AppTransactionRegistry>();

    private static AppTransactionManager INSTANCE = new AppTransactionManager();

    public static AppTransactionManager getInstance() {
        return INSTANCE;
    }

    private AppTransactionRegistry getAppTranasctionRegistry() {

        AppTransactionRegistry registry = appTransactionRegistry.get();
        if (registry == null) {
            registry = new AppTransactionRegistry();
            appTransactionRegistry.set(registry);
        }

        return registry;
    }

    public void enlistTransaction(AppTransaction appTransaction) {
        getAppTranasctionRegistry().addAppTransaction(appTransaction);
    }

    @Override
    public void begin() throws NotSupportedException,
                       SystemException {
        getAppTranasctionRegistry().begin();
    }

    @Override
    public void commit() throws RollbackException,
                        HeuristicMixedException,
                        HeuristicRollbackException,
                        SecurityException,
                        IllegalStateException,
                        SystemException {
        try {
            getAppTranasctionRegistry().commit();
        } finally {
            closeSession();
        }
    }

    @Override
    public int getStatus() throws SystemException {
        return getAppTranasctionRegistry().getStatus();
    }

    @Override
    public void rollback() throws IllegalStateException,
                          SecurityException,
                          SystemException {
        try {
            getAppTranasctionRegistry().rollback();
        } catch (Exception e) {
            e.printStackTrace();
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
        AppTransactionRegistry registry = appTransactionRegistry.get();
        if (registry != null) {
            try {
                registry.closeSession();
            } finally {
                appTransactionRegistry.remove();
            }
        }
    }

}
