// ** React Imports
import { Outlet } from 'react-router-dom'

// ** Core Layout Import
// !Do not remove the Layout import
import Layout from '@layouts/VerticalLayout'

// ** Menu Items Array
import navigation from '@src/navigation/vertical'
import { useAuth } from '../utility/context/AuthContext';
import { ROLES } from '../utility/constants';

const navAccessMap = {
  dashboard: Object.values(ROLES),
  directories: Object.values(ROLES),
  settings: [ROLES.ADMIN],
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

const VerticalLayout = props => {
  // const [menuData, setMenuData] = useState([])

  // ** For ServerSide navigation
  // useEffect(() => {
  //   axios.get(URL).then(response => setMenuData(response.data))
  // }, [])

  const { getUserRole } = useAuth();
  const userRole = getUserRole()
  let accessNavigation = navigation.filter((item) => {
    return navAccessMap[item.id] && navAccessMap[item.id].includes(userRole)
  });

  accessNavigation = accessNavigation.map((item) => {
    if (item.children) {
      const modifiedItem = {
        ...item, children: item.children.filter((childItem) => {
          return navAccessMap[childItem.id] && navAccessMap[childItem.id].includes(userRole)
        })
      }
      if (modifiedItem.id === 'directories') {
        modifiedItem.badgeText = modifiedItem.children.length || 0
      }
      return modifiedItem
    }
    return item;
  })

  return (
    <Layout menuData={accessNavigation} {...props}>
      <Outlet />
    </Layout>
  )
}

export default VerticalLayout
