import React from "react";
import '../index.css';
import '../Profile.css'
import { useAuth0 } from "@auth0/auth0-react";

export const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    isAuthenticated && (
      <div className="profile-image">
        <img className="img" src={user.picture} alt={user.name} />
      </div>
    )
  );
};

export default Profile;