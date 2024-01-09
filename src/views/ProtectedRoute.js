import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../utility/context/AuthContext';
import DataProvider from '../utility/context/DataContext';


function ProtectedRoute() {
    const { isLoggedIn } = useAuth();
    return isLoggedIn ? (
        <DataProvider>
            <Outlet />
        </DataProvider>
    )
        : <Navigate to='/login' />
}

export default ProtectedRoute;