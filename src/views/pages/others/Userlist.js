// ** React Imports
import { useContext } from 'react'

// ** Icons Imports
import { List } from 'react-feather'

// ** Custom Components
import Avatar from '@components/avatar'

import AvatarGroup from '@components/avatar-group'

// ** Utils
import { kFormatter } from '@utils'

// ** Context
import { ThemeColors } from '@src/utility/context/ThemeColors'

// ** Reactstrap Imports
import { Row, Col, Card, CardHeader, CardTitle, CardBody } from 'reactstrap'

// ** Styles
import '@styles/react/libs/charts/apex-charts.scss'
const Dashboard = () => {
  // ** Context
  const { colors } = useContext(ThemeColors)


  return  (
    <div id='dashboard-analytics'>
   <Card>
        <CardHeader>
          <CardTitle>Dashboard 🚀</CardTitle>
        </CardHeader>
      </Card>
      <Card>

      </Card>
   
    </div>
  )
}

export default Dashboard
