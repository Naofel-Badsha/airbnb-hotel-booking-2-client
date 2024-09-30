import PropTypes from 'prop-types'
import { Navigate, useLocation } from "react-router-dom";

import LoadingSpinner from "../Components/LoadingSpinner/LoadingSpinner";
import useAuth from "../Hooks/useAuth";

const PrivateRoute = ({children }) => {
    const { user, loading } = useAuth();
    const location = useLocation();
    if (loading) {
        return <LoadingSpinner></LoadingSpinner>
    }

    if (user) {
        return children;
    }

    return <Navigate to="/" state={{from: location}} replace></Navigate>;
};
PrivateRoute.propTypes = {
    children: PropTypes.element,
  }
export default PrivateRoute;