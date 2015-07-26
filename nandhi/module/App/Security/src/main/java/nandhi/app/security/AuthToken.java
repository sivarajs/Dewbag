package nandhi.app.security;

import app.core.bo.security.User;

public class AuthToken {

    private String mAKey;
    private User mUser;

    public AuthToken(String aKey,
                     User user) {
      mAKey = aKey;
      mUser = user;
    }

    public String getAKey() {
      return mAKey;
    }

    public User getUser() {
      return mUser;
    }
    
    public String toString() {
      return mAKey;
    }

  }
