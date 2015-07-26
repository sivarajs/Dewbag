package nandhi.app.domain.designer;

public interface EntityBuilder<XMLTYPE, O>
{
  public O build(XMLTYPE xmlTYPE);
}