package nandhi.mq;

public enum MessageState {

  NEW("N"),
  DELIVERED("D");

  private String state;

  private MessageState(String state) {
    this.state = state;
  }

  public String getState() {
    return state;
  }

}
