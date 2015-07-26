package nandhi.app.scheduler;

import java.util.Date;

import nandhi.app.AppService;
import nandhi.app.engine.AppEngine;
import nandhi.app.transaction.AppTransactionManager;
import nandhi.scheduler.Job;
import nandhi.scheduler.provider.thread.ThreadScheduler;
import nandhi.scheduler.provider.thread.ThreadTrigger;

public abstract class AppScheduler {

    private ThreadScheduler mThreadScheduler;

    protected final AppTransactionManager mAppTransactionManager;
    
    public AppScheduler() {
        mThreadScheduler = new ThreadScheduler("DewBag Email Scheduler");
        mAppTransactionManager = AppTransactionManager.getInstance();
    }

    public void schedule(AppService appService,
                         AppEngine applicationEngine) {

        Job job = getJob(appService,
                         applicationEngine);
        mThreadScheduler.submitJob(job,
                                   new ThreadTrigger(new Date(),
                                                     3000));
    }

    public abstract Job getJob(final AppService appService,
                               final AppEngine applicationEngine);

}
