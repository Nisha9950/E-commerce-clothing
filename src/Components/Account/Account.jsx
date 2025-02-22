import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Account.css";
import { FaUserCircle } from "react-icons/fa"; // User icon
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Profile from "../../Pages/Profile";


const Account = () => {

  const [user, setUser] = useState(() => {
    return JSON.parse(localStorage.getItem("user")) || null;
  })
  const [userData, setUserData] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  const navigate = useNavigate();

  // Load user data from local storage
  useEffect(() => {
    const savedData = JSON.parse(localStorage.getItem("checkoutForm"));
    if (savedData) {
      setUserData(savedData);
    }
  }, []);

  // Toggle dropdown menu
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  // const handleLogout = () => {

  //   const confirmLogout = window.confirm("Are you sure you want to log out?");
  //   if (confirmLogout) {
  //     localStorage.clear();
  //     setUser(null);
  //     alert("Logged out successfully");
  //     navigate("/login")
  //   }

  const handleLogout = () => {
    const confirmLogout = window.confirm("Are you sure you want to log out?");
    if (confirmLogout) {
      localStorage.clear();
      setUser(null);
      toast.success("Logged out successfully!", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      navigate("/login");
    }
  };

  return (
    <div className="profile-container">
      <div className="profile-icon" onClick={toggleDropdown}>
        <FaUserCircle size={50} className="user-icon" />
      </div>

      {isOpen && (
        <div className="dropdown-menu">
          <ul>
            <li  onClick={() => setIsProfileOpen(true)}>Profile</li>
            <Profile isOpen={isProfileOpen} onClose={() => setIsProfileOpen(false)} />
            <li onClick={() => navigate("/history")}>History</li>
            {user ? (
              <li onClick={handleLogout} className="logout">Logout</li>
            ) : (
              <li onClick={() => navigate("/login")} className="login">Login</li>
            )}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Account;



