import React, { useState } from "react";
import styles from "./LoginCard.module.css";
import { fetchUserData } from "../../../hooks/dataManagement/fetchUserData";
import { useAuthenticator } from "../../../hooks/security/useAuthenticator";

interface LoginCardProps {
  userID?: string;
}

const LoginCard: React.FC<LoginCardProps> = ({ userID }) => {
  const { userData, loading } = fetchUserData(userID);
  const { logOut } = useAuthenticator();
  const userImage = userData?.user?.image?.[0]["#text"];
  const [isHovered, setIsHovered] = useState(false);

  const handleClick = () => {
    logOut();
  };

  if (loading) {
    return <div className={styles.userInfo}>Loading...</div>;
  }

  return (
    <div
      className={styles.LoginCardContainer}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={styles.LoginCardOverlay}></div>
      {userID ? (
        <>
          <div className={styles.LoginCard}>
            {userImage && (
              <img src={userImage} alt="User" className={styles.userImage} />
            )}
            <div className={styles.userInfo}>
              <span>{userData?.user?.realname}</span>
              <br />
              <span className={styles.userHeader}>{userID}</span>
              <br />
              <span className={styles.subText}>Logged In!</span>
            </div>
          </div>
          {isHovered && (
            <div className={styles.logoutButton} onClick={handleClick}>
              Log Out
            </div>
          )}
        </>
      ) : (
        <div className={styles.LoginCard}>
          <span>Nobody Logged in!</span>
        </div>
      )}
    </div>
  );
};

export default LoginCard;
