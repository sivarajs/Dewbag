package nandhi.app.security;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import app.core.bo.security.ResourcePermission;
import app.core.bo.security.User;

public class AppSecurity {

  private Map<String, Long> mPermissionMap;

  public AppSecurity(List<ResourcePermission> permissions) {

    mPermissionMap = new HashMap<String, Long>(4);
    if (permissions != null) {
//      for (ResourcePermission permission : permissions) {
//        mPermissionMap.put(permission.getSrc(),
//                           permission.getRoleId());
//      }
    }
  }

  public boolean isPageAllowed(String pageUrl,
                               User user) {

    int index = pageUrl.indexOf('/',
                                1);
    if (index != -1) {
      pageUrl = pageUrl.substring(0,
                                  index);
    }

    if (!pageUrl.endsWith("/")) {
      pageUrl += "/";
    }

    Long roleId = mPermissionMap.get(pageUrl);
    if (roleId == null) {
      return true;
    }

    if (user == null) {
      return false;
    }

    if (roleId == user.getPrimaryRole()
                      .getId()) {
      return true;
    }

    return false;
  }

}
