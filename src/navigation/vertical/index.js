import { Mail, Home, Database , Circle, Settings } from "react-feather";

export default [
  {
    id: "dashboard",
    title: "Dashboard",
    icon: <Home size={20} />,
    navLink: "/dashboard",
  },
  {
    id: 'directories',
    title: 'Directories',
    icon: <Database size={20} />,
    badge: 'light-warning',
    badgeText: '5',
    children: [
      {
        id: "employeedirectory",
        title: "Employee Directory",
        icon: <Circle size={20} />,
        navLink: "/employee-directory",
      },
      // {
      //   id: "immigrationdirectory",
      //   title: "Immigration Directory",
      //   icon: <Circle size={20} />,
      //   navLink: "/immigration-directory",
      // },
      
      {
        id: "vendordirectory",
        title: "Vendor Directory",
        icon: <Circle size={20} />,
        navLink: "/vendor-directory",
      },
      // {
      //   id: "clientdirectory",
      //   title: "Client Directory",
      //   icon: <Circle size={20} />,
      //   navLink: "/client-directory",
      // },
  
      // {
      //   id: "workingdirectory",
      //   title: "Working Directory",
      //   icon: <Circle size={20} />,
      //   navLink: "/working-directory",
      // },
   
    ]
  },
  {
    id: 'settings',
    title: 'Settings',
    icon: <Settings size={20} />,

    children: [
    
      // {
      //   id: "userslist",
      //   title: "Users List",
      //   icon: <Circle size={20} />,
      //   navLink: "/users-list",
      // },

      {
        id: "register",
        title: "Register",
        icon: <Circle size={20} />,
        navLink: "/register",
      },
      // {
      //   id: "roles",
      //   title: "Roles & Responsibilities",
      //   icon: <Circle size={20} />,
      //   navLink: "/roles-responsibilites",
      // },
   
    ]
  },
];
