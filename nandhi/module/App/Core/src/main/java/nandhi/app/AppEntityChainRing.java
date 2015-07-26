package nandhi.app;


public abstract class AppEntityChainRing<E, I> {

    protected E mEntity;

    public AppEntityChainRing(E entity) {
        mEntity = entity;
    }
    
    public E getEntity() {
        return mEntity;
    }
    
    public abstract boolean fallsInRange(I input);
    
    public abstract boolean matches(I input);
    
}
