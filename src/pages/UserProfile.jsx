import { useParams } from "react-router-dom";
import "./UserProfile.css";

function UserProfile() {
  const { id } = useParams();

  return (
    <div className="page-container">
      <h2>User Profile</h2>
      <div className="profile-box">
        <p>User ID: {id}</p>
      </div>
    </div>
  );
}

export default UserProfile;
