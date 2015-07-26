package nandhi.app.security.account;

import javax.persistence.PersistenceException;

import nandhi.app.engine.AppEngine;
import nandhi.app.exception.AppException;
import nandhi.app.security.AuthToken;
import nandhi.app.security.Password;
import nandhi.app.security.UserType;
import nandhi.app.transaction.AppTransactionManager;
import nandhi.lang.JavaString;
import nandhi.persistence.filter.AttributeFilter;
import nandhi.persistence.filter.ResourceFilter;
import nandhi.sys.SystemDate;
import nandhi.util.uid.UIDGenerator;
import nandhi.util.uid.key.RandomAlphaNumericKeyGenerator;
import nandhi.util.uid.key.RandomIntegerKeyGenerator;
import nandhi.util.uid.key.RandomKeyGenerator;
import app.core.bo.security.NewUser;
import app.core.bo.security.Role;
import app.core.bo.security.User;

public class AccountStore {

    private AppEngine mApplicationEngine;
    private UIDGenerator mUIDGenerator;
    private RandomKeyGenerator mRandomKeyGenerator;
    private RandomIntegerKeyGenerator mRandomIntegerKeyGenerator;

    public AccountStore(AppEngine applicationEngine,
                        UIDGenerator uidGenerator) {
        mApplicationEngine = applicationEngine;
        mUIDGenerator = uidGenerator;

        mRandomKeyGenerator = new RandomAlphaNumericKeyGenerator();
        mRandomIntegerKeyGenerator = new RandomIntegerKeyGenerator((byte) 4);
    }

    public NewUser createTempNewUser(String userName,
                                     String password,
                                     long roleId) {

        if (JavaString.isNullOrEmpty(userName)
                        || JavaString.isNullOrEmpty(password)) {

            throw new RuntimeException("Invalid UserName or Password");
        }

        if (userExists(userName)) {
            throw new RuntimeException("The user [" + userName
                            + "] already exists");
        }

        Role role = mApplicationEngine.getResource(Role.class,
                                                   roleId);
        if (role == null) {
            throw new RuntimeException("Unknown Role id : " + roleId);
        }

        if (password != null) {
            password = Password.encryptPassword(password);
        }

        NewUser user = new NewUser();

        user.setPassword(password);
        user.setPrimaryRole(role);

        UserType userType = UserType.getUserType(userName);
        if (userType == UserType.EMAIL) {
            user.setAccessToken(mUIDGenerator.getUId());
        }
        else if (userType == UserType.MOBILE) {
            if (userName.length() == 10) {
                userName = "91" + userName;
            }

            user.setAccessToken(mRandomIntegerKeyGenerator.getKey());
        }
        else {
            throw new IllegalArgumentException("Invalid User : " + userName);
        }

        user.setName(userName);
        user.setCreatedOn(SystemDate.getUTCCalendar());
        user.setState(AccountState.New.getCode());
        try {

            mApplicationEngine.saveResource(user);

        } catch (PersistenceException e) {

            Throwable throwable = e.getCause();
            if ("ConstraintViolationException".equalsIgnoreCase(throwable.getClass()
                                                                         .getSimpleName())) {

                throw new RuntimeException("The user [" + userName
                                + "] already exists");

            }

            throw e;

        }

        return user;
    }

    public User createUser(NewUser newUser) {
        mApplicationEngine.removeResource(NewUser.class,
                                          newUser.getId());

        return createUser(newUser.getName(),
                          newUser.getPassword(),
                          null,
                          newUser.getPrimaryRole()
                                 .getId(),
                          false);

    }

    public User createUser(String userName,
                           String password,
                           String accessToken,
                           long roleId) {
        return createUser(userName,
                          password,
                          accessToken,
                          roleId,
                          true);
    }

    public User createUser(String userName,
                           String password,
                           String accessToken,
                           long roleId,
                           boolean encryptPassword) {

        if (JavaString.isNullOrEmpty(userName)
                        || (JavaString.isNullOrEmpty(password) && JavaString.isNullOrEmpty(accessToken))) {
            throw new RuntimeException("Invalid UserName or Password");
        }

        if (userExists(userName)) {
            throw new AppException("0000",
                                   "You have already confirmed your registration.");
        }

        Role role = mApplicationEngine.getResource(Role.class,
                                                   roleId);
        if (role == null) {
            throw new RuntimeException("Unknown Role id : " + roleId);
        }

        if (encryptPassword && password != null) {
            password = Password.encryptPassword(password);
        }

        UserType userType = UserType.getUserType(userName);

        User user = new User();
        if (UserType.isEmail(userName)) {
            user.setEmail(userName);
        }
        else if (userType == UserType.MOBILE) {
            user.setMobile(userName);
        }
        else {
            throw new IllegalArgumentException("Invalid User : " + userName);
        }
        user.setName(userName);
        user.setPassword(password);
        user.setAccessToken(accessToken);
        user.setPrimaryRole(role);
        user.setState(AccountState.Active.getCode());

        try {

            AppTransactionManager.getInstance()
                                 .begin();
            mApplicationEngine.saveResource(user);
            AppTransactionManager.getInstance()
                                 .commit();

        } catch (PersistenceException e) {

            try {
                AppTransactionManager.getInstance()
                                     .rollback();
            } catch (Exception ex) {
                ex.printStackTrace();
            }

            Throwable throwable = e.getCause();
            if ("ConstraintViolationException".equalsIgnoreCase(throwable.getClass()
                                                                         .getSimpleName())) {

                throw new RuntimeException("The user [" + userName
                                                           + "] already exists",
                                           e);

            }

            throw e;

        } catch (Exception e) {

            try {
                AppTransactionManager.getInstance()
                                     .rollback();
            } catch (Exception ex) {
                ex.printStackTrace();
            }

            throw new RuntimeException(e);

        } finally {

        }
        return user;
    }

    public String resetPassword(String userName) {

        if (JavaString.isNullOrEmpty(userName)) {
            throw new RuntimeException("Invalid UserName");
        }

        String password = null;
        User user = getUser(userName);
        password = mRandomKeyGenerator.getKey();
        user.setPassword(Password.encryptPassword(password));
        mApplicationEngine.saveResource(user);

        return password;
    }

    public void changePassword(String userName,
                               String oldPassword,
                               String newPassword) {

        if (JavaString.isNullOrEmpty(newPassword)) {

            throw new RuntimeException("Invalid UserName or Password");

        }
        User user = null;
        if (oldPassword == null || oldPassword.equals("")) {
            user = getUser(userName);
        }
        else {
            user = validateUser(userName,
                                oldPassword);
        }

        newPassword = Password.encryptPassword(newPassword);

        try {

            AppTransactionManager.getInstance()
                                 .begin();
            user.setPassword(newPassword);
            mApplicationEngine.saveResource(user);
            AppTransactionManager.getInstance()
                                 .commit();

        } catch (Exception e) {

            try {
                AppTransactionManager.getInstance()
                                     .rollback();
            } catch (Exception ex) {
                ex.printStackTrace();
            }

            if (e instanceof RuntimeException) {
                throw (RuntimeException) e;
            }
        }

    }

    public AuthToken authenticate(String userName,
                                  String password) {

        User user = validateUser(userName,
                                 password);
        return new AuthToken(mUIDGenerator.getUId(),
                             user);
    }

    public AuthToken authenticateSocial(String userName,
                                        String accessToken) {

        ResourceFilter<User> entityFilter = new ResourceFilter<User>(User.class,
                                                                     new AttributeFilter("email",
                                                                                         userName));
        User user = (User) mApplicationEngine.getFirstResource(entityFilter);
        if (user == null) {

            user = createUser(userName,
                              null,
                              accessToken,
                              4);
        }

        return new AuthToken(mUIDGenerator.getUId(),
                             user);

    }

    private User validateUser(String userName,
                              String password) {
        if (JavaString.isNullOrEmpty(userName)
                        || JavaString.isNullOrEmpty(password)) {
            throw new RuntimeException("Invalid User Name or Password");
        }

        UserType userType = UserType.getUserType(userName);
        if (userType == UserType.MOBILE) {
            userName = "91" + userName;
        }

        User user = getUser(userName);
        password = Password.encryptPassword(password);

        if (!password.equals(user.getPassword())) {
            throw new RuntimeException("Invalid User Name or Password");
        }

        return user;
    }

    private User getUserNoThrow(String userName) {

        UserType userType = UserType.getUserType(userName);

        ResourceFilter<User> entityFilter = new ResourceFilter<User>(User.class,
                                                                     new AttributeFilter(userType.getAttrName(),
                                                                                         userName));
        return (User) mApplicationEngine.getFirstResource(entityFilter);

    }

    private User getUser(String userName) {

        User user = getUserNoThrow(userName);

        if (user == null) {
            throw new RuntimeException("The user with '" + userName
                            + "' does not exist");
        }

        return user;
    }

    public boolean userExists(String userName) {

        return getUserNoThrow(userName) != null;
    }

}