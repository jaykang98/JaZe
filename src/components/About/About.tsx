// FileName: About.tsx (This belongs in your React application's /src/components/ directory)

import React from "react";
import styles from "./About.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faPenNib,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { ViewProps } from "types";

const About: React.FC<ViewProps> = ({ userID, error, onViewChange }) => {
  React.useEffect(() => {
    onViewChange("About");
  }, [onViewChange]);

  const renderUserInfo = () => {
    if (error) return <span>{error.message}</span>;
    return <span>{userID}</span>;
  };

  return (
    <section
      className={styles.aboutSection}
      aria-labelledby="about-heading"
      aria-describedby="about-description"
    >
      <h2 id="about-heading">About</h2>
      <p id="about-description">
        This application generates visual representations of Last.FM data.
        Developed by J Kang and open for public use. For more information, feel
        free to contact at kangjacob1@gmail.com.
      </p>
      <table className={styles.iconTable} aria-label="About information">
        <tbody>
          <tr>
            <td>
              <FontAwesomeIcon icon={faUser} aria-hidden="true" />
            </td>
            <td>Logged In User:</td>
            <td>{renderUserInfo()}</td>
          </tr>
          <tr>
            <td>
              <FontAwesomeIcon icon={faPenNib} aria-hidden="true" />
            </td>
            <td>Author:</td>
            <td>J Kang</td>
          </tr>
          <tr>
            <td>
              <FontAwesomeIcon icon={faEnvelope} aria-hidden="true" />
            </td>
            <td>Contact:</td>
            <td>kangjacob1@gmail.com</td>
          </tr>
        </tbody>
      </table>
    </section>
  );
};

export default About;
