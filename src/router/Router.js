// ** Router imports
import { lazy } from 'react'

// ** Router imports
import { useRoutes} from 'react-router-dom'


// ** Hooks Imports
import { useLayout } from '@hooks/useLayout'


// ** GetRoutes
import { getRoutes } from './routes/index'



const Router = () => {
  // ** Hooks
  const { layout } = useLayout()

  const allRoutes = getRoutes(layout)


  const routes = useRoutes([
  
    ...allRoutes
  ])

  return routes
}

export default Router
