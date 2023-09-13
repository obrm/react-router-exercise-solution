import { useNavigate } from 'react-router-dom';

const ProtectedRoute = ({ children, user }) => {
  const navigate = useNavigate();

  // Check if user is authenticated
  if (!user) {
    // Redirect to an appropriate page if not authenticated
    // Here, I'm assuming a '/login' route. Adjust accordingly.
    navigate('/');
    return null;
  }

  // If the user is authenticated, render the children components
  return <>{children}</>;
};

export default ProtectedRoute;
