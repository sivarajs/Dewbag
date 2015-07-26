package nandhi.app.transaction;

import javax.transaction.UserTransaction;

public interface AppTransaction extends UserTransaction {

    public void closeSession();
}
