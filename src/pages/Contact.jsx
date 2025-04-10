import { useNavigate } from "react-router-dom";
import "./Contact.css";

function Contact() {
  const navigate = useNavigate();

  return (
    <div className="page-container">
      <h2>Contact Page</h2>
      <button onClick={() => navigate("/")}>Go to Home</button>
    </div>
  );
}

export default Contact;
