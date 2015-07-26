package nandhi.app.domain.model;

public interface EntityObserver {

  void observe(EntityInterest paramEntityInterest,
               Entity paramEntity);
}