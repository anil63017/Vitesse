// ** React Imports
import { NavLink } from "react-router-dom";

// ** Third Party Components
import classnames from "classnames";
import { useTranslation } from "react-i18next";

// ** Reactstrap Imports
import { Badge } from "reactstrap";
import { useAuth } from "../../../../../utility/context/AuthContext";
import { ROLES } from "../../../../../utility/constants";

const NAV_MAP = {
  employeedirectory: [ROLES.ADMIN, ROLES.HR,],
  immigrationdirectory: [ROLES.ADMIN, ROLES.IMMIGRATION],
  workingdirectory: [ROLES.ADMIN],
  employeedesign: [ROLES.ADMIN],
  vendordirectory: [ROLES.ADMIN],
  register: [ROLES.ADMIN],
  userslist: [ROLES.ADMIN],
  roles: [ROLES.ADMIN],
  clientdirectory: [ROLES.ACCOUNTS, ROLES.ADMIN]
}

const VerticalNavMenuLink = ({ item, activeItem }) => {
  // ** Conditional Link Tag, if item has newTab or externalLink props use <a> tag else use NavLink
  const LinkTag = item.externalLink ? "a" : NavLink;

  const { getUserRole } = useAuth();
  // ** Hooks
  const { t } = useTranslation();
  if (NAV_MAP[item.id] && !NAV_MAP[item.id].includes(getUserRole())) {
    return <></>
  }
  return (
    <li
      className={classnames({
        "nav-item": !item.children,
        disabled: item.disabled,
        active: item.navLink === activeItem,
      })}
    >
      <LinkTag
        className="d-flex align-items-center"
        target={item.newTab ? "_blank" : undefined}
        /*eslint-disable */
        {...(item.externalLink === true
          ? {
            href: item.navLink || "/",
          }
          : {
            to: item.navLink || "/",
            className: ({ isActive }) => {
              if (isActive && !item.disabled) {
                return "d-flex align-items-center active";
              }
            },
          })}
        onClick={(e) => {
          if (
            item.navLink.length === 0 ||
            item.navLink === "#" ||
            item.disabled === true
          ) {
            e.preventDefault();
          }
        }}
      >
        {item.icon}
        <span className="menu-item text-truncate">{t(item.title)}</span>

        {item.badge && item.badgeText ? (
          <Badge className="ms-auto me-1" color={item.badge} pill>
            {item.badgeText}
          </Badge>
        ) : null}
      </LinkTag>
    </li>
  );
};

export default VerticalNavMenuLink;
