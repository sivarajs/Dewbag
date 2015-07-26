package nandhi.app;

import java.util.ArrayList;
import java.util.List;

public class AppEntityChain<E, I, T extends AppEntityChainRing<E, I>> {

    private List<T> mEntityList;

    public AppEntityChain() {
        mEntityList = new ArrayList<T>(1);
    }

    public void addEntity(T ring) {
        mEntityList.add(ring);
    }

    public E getMatchingEntity(I input) {

        T matchedEntity = null;
        for (T entity : mEntityList) {
            if (entity.matches(input)) {
                matchedEntity = entity;
            }
        }
        
        if (matchedEntity == null) {
            return null;
        }

        return matchedEntity.getEntity();
    }
    
    public E getMatchingRangeEntity(I input) {

        for (T entity : mEntityList) {
            if (entity.fallsInRange(input)) {
                return entity.getEntity();
            }
        }

        return null;
    }

}
