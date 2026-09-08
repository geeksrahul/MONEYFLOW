import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
function ProtectedRoute() {
    const isAuthenticated = useSelector(state => state.auth.authStatus);
    if(!isAuthenticated) return <Navigate to="/login" />
    return <Outlet />
}

export default ProtectedRoute