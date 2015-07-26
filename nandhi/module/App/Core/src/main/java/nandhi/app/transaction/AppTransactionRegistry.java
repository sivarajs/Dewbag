package nandhi.app.transaction;

import java.util.ArrayList;
import java.util.List;

import javax.transaction.HeuristicMixedException;
import javax.transaction.HeuristicRollbackException;
import javax.transaction.NotSupportedException;
import javax.transaction.RollbackException;
import javax.transaction.Status;
import javax.transaction.SystemException;

public class AppTransactionRegistry implements AppTransaction {

    private List<AppTransaction> appTransactions = new ArrayList<AppTransaction>(1);
    private int state = Status.STATUS_NO_TRANSACTION;

    public void addAppTransaction(AppTransaction appTransaction) {
        appTransactions.add(appTransaction);
    }

    @Override
    public void begin() throws NotSupportedException,
                       SystemException {
        state = Status.STATUS_ACTIVE;
    }

    @Override
    public void commit() throws RollbackException,
                        HeuristicMixedException,
                        HeuristicRollbackException,
                        SecurityException,
                        IllegalStateException,
                        SystemException {
        
        state = Status.STATUS_COMMITTING;
        for (AppTransaction appTransaction : appTransactions) {
            appTransaction.commit();
        }

        state = Status.STATUS_COMMITTED;
    }

    @Override
    public int getStatus() throws SystemException {
        return state;
    }

    @Override
    public void rollback() throws IllegalStateException,
                          SecurityException,
                          SystemException {
        state = Status.STATUS_ROLLING_BACK;
        for (AppTransaction appTransaction : appTransactions) {
            appTransaction.rollback();
        }
        
        state = Status.STATUS_ROLLEDBACK;

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
        for (AppTransaction appTransaction : appTransactions) {
            appTransaction.closeSession();
        }
        
        state = Status.STATUS_NO_TRANSACTION;
    }

}
