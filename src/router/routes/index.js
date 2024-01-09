// ** React Imports
import { Fragment, lazy } from "react";
import { Navigate } from "react-router-dom";
// ** Layouts
import BlankLayout from "@layouts/BlankLayout";
import VerticalLayout from "@src/layouts/VerticalLayout";
import HorizontalLayout from "@src/layouts/HorizontalLayout";
import LayoutWrapper from "@src/@core/layouts/components/layout-wrapper";

// ** Route Components
import PublicRoute from "@components/routes/PublicRoute";

// ** Utils
import { isObjEmpty } from "@utils";
import ProtectedRoute from "../../views/ProtectedRoute";
import Clientdirectory from "../../views/pages/directories/ClientDirectory/Clientdirectory";
import Employeedirectory from "../../views/pages/directories/EmployeeDirectory/Employeedirectory";
import Immigrationdirectory from "../../views/pages/directories/ImmigrationDirectory/Immigrationdirectory";
// import Workassignmentsdirectory from "../../views/pages/directories/WorkAssignments/WorkAssignmentsdirectory";
import Vendordirectory from "../../views/pages/directories/VendorDirectory/Vendordirectory";



const getLayout = {
  blank: <BlankLayout />,
  vertical: <VerticalLayout />,
  horizontal: <HorizontalLayout />,
};

// ** Document title
const TemplateTitle = "%s - Vitesse ";

// ** Default Route
const DefaultRoute = "/login";

const Dashboard = lazy(() => import("../../views/Dashboard"));

const Login = lazy(() => import("../../views/Login"));
const Register = lazy(() => import("../../views/Register"));
// const ForgotPassword = lazy(() => import("../../views/ForgotPassword"));
const Error = lazy(() => import("../../views/Error"));

const Profile = lazy(() => import("../../views/pages/others/Profile"));
const Userlist = lazy(() => import("../../views/pages/others/Userlist"));
// const Rolesresponsibilites = lazy(() => import("../../views/pages/others/Rolesresponsibilites"));
// ** Merge Routes
const Routes = [
  {
    path: "/",
    index: true,
    element: <Navigate replace to={DefaultRoute} />,
  },
  {
    element: <ProtectedRoute />,
    children: [{
      path: "/dashboard",
      element: <Dashboard />,
    },
    {
      path: "/employee-directory",
      element: <Employeedirectory />,
    },
    {
      path: "/immigration-directory",
      element: <Immigrationdirectory />,
    },
    // {
    //   path: "/working-directory",
    //   element: <Workassignmentsdirectory />,
    // },
    {
      path: "/client-directory",
      element: <Clientdirectory />,
    },
    {
      path: "/vendor-directory",
      element: <Vendordirectory />,
    },

    {
      path: "/profile",
      element: <Profile />,
    },
    {
      path: "/users-list",
      element: <Userlist />,
    },

    // {
    //   path: "/roles-responsibilites",
    //   element: <Rolesresponsibilites />,
    // }
  ]
  },
  
  {
    path: "/login",
    element: <Login />,
    meta: {
      layout: "blank",
    },
  },
  {
    path: "/register",
    element: <Register />,
    meta: {
      layout: "blank",
    },
  },
  // {
  //   path: "/forgot-password",
  //   element: <ForgotPassword />,
  //   meta: {
  //     layout: "blank",
  //   },
  // },
  {
    path: "/error",
    element: <Error />,
    meta: {
      layout: "blank",
    },
  },
];

const getRouteMeta = (route) => {
  if (isObjEmpty(route.element.props)) {
    if (route.meta) {
      return { routeMeta: route.meta };
    } else {
      return {};
    }
  }
};

// ** Return Filtered Array of Routes & Paths
const MergeLayoutRoutes = (layout, defaultLayout) => {
  const LayoutRoutes = [];

  if (Routes) {
    Routes.filter((route) => {
      let isBlank = false;
      // ** Checks if Route layout or Default layout matches current layout
      if (
        (route.meta && route.meta.layout && route.meta.layout === layout) ||
        ((route.meta === undefined || route.meta.layout === undefined) &&
          defaultLayout === layout)
      ) {
        const RouteTag = PublicRoute;

        // ** Check for public or private route
        if (route.meta) {
          route.meta.layout === "blank" ? (isBlank = true) : (isBlank = false);
        }
        if (route.element) {
          const Wrapper =
            // eslint-disable-next-line multiline-ternary
            isObjEmpty(route.element.props) && isBlank === false
              ? // eslint-disable-next-line multiline-ternary
              LayoutWrapper
              : Fragment;
          route.element = (
            <Wrapper {...(isBlank === false ? getRouteMeta(route) : {})}>
              <RouteTag route={route}>{route.element}</RouteTag>
            </Wrapper>
          );
        }

        // Push route to LayoutRoutes
        LayoutRoutes.push(route);
      }
      return LayoutRoutes;
    });
  }
  return LayoutRoutes;
};

const getRoutes = (layout) => {
  const defaultLayout = layout || "vertical";
  const layouts = ["vertical", "horizontal", "blank"];

  const AllRoutes = [];

  layouts.forEach((layoutItem) => {
    const LayoutRoutes = MergeLayoutRoutes(layoutItem, defaultLayout);

    AllRoutes.push({
      path: "/",
      element: getLayout[layoutItem] || getLayout[defaultLayout],
      children: LayoutRoutes,
    });
  });
  return AllRoutes;
};

export { DefaultRoute, TemplateTitle, Routes, getRoutes };
