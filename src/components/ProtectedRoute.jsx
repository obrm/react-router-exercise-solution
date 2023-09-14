import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const ProtectedRoute = ({ children, user }) => {
  const navigate = useNavigate();

  useEffect(() => {
    // Check if user is authenticated
    if (!user) {
    // Redirect to an appropriate page if not authenticated
      navigate("/");
    }    
  }, [navigate, user]);

  // If the user is authenticated, render the children components
  return children;
};

export default ProtectedRoute;
