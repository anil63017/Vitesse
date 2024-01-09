// ** React Imports
import { Link } from "react-router-dom";

// ** Custom Components
import Avatar from "@components/avatar";

// ** Third Party Components
import {
  User,
  Mail,
  CheckSquare,
  MessageSquare,
  Settings,
  CreditCard,
  HelpCircle,
  Power,
} from "react-feather";

// ** Reactstrap Imports
import {
  UncontrolledDropdown,
  DropdownMenu,
  DropdownToggle,
  DropdownItem,
} from "reactstrap";

import Profile from "../../../../views/pages/others/Profile";

// ** Default Avatar Image
import defaultAvatar from "../../../avatar.jpg";
import { useAuth } from "../../../../utility/context/AuthContext";

const UserDropdown = () => {
  const { logout, currentUser } = useAuth()





  return (
    <UncontrolledDropdown tag="li" className="dropdown-user nav-item">
      <DropdownToggle
        href="/"
        tag="a"
        className="nav-link dropdown-user-link"
        onClick={(e) => e.preventDefault()}
      >
        <div className="user-nav d-sm-flex d-none">
          <span className="user-name fw-bold">{currentUser?.username}</span>
          <span className="user-status">{currentUser?.access}</span>
        </div>
        <Avatar
          img={defaultAvatar}
          imgHeight="40"
          imgWidth="40"
          status="online"
        />
      </DropdownToggle>
      <DropdownMenu end>
        {/* <DropdownItem  tag={Link} to="/profile" >
          <User size={14} className="me-75" />
          <span className="align-middle">Profile</span>
        </DropdownItem> */}
        {/* <DropdownItem divider /> */}
        <DropdownItem onClick={logout}>
          <Power size={14} className="me-75" />
          <span className="align-middle">Logout</span>
        </DropdownItem>
      </DropdownMenu>
    </UncontrolledDropdown>
  );
};

export default UserDropdown;
