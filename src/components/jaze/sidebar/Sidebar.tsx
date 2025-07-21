import React from "react";
import { faCog, faMailBulk, faHammer, faHeadphones, faPlayCircle, faImage, faHome } from "@fortawesome/free-solid-svg-icons";
import styles from "./Sidebar.module.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SidebarButton = ({ label, path, icon }) => {
  return (
    <Link
        to={path}
        className={styles.sidebarButton}
        draggable= {false} >
      <FontAwesomeIcon icon={icon} className="tableIcon" />
      <span className="styles.sideButtonText">{label}</span>
    </Link>
  );
};

const Sidebar = () => {
  const buttons = [
    {
      path: "/Main",
      label: "Main",
      icon: faHome,
    },

    {
      path: "https://tv.jklmnopea.com/",
      label: "Media",
      icon: faPlayCircle,
    },
    {
      path: "https://img.jklmnopea.com/",
      label: "Images",
      icon: faImage,
      },
    {
      path: "https://icloud.com/",
      label: "Mail",
      icon: faMailBulk,
      },
    {
      path: "/form",
      label: "Form",
      icon: faHammer,
    },
    {
      path: "/settings",
      label: "Settings",
      icon: faCog,
    },

  ];



  return (
    <aside className={styles.sidebarContainer}>
      {buttons.map((button, index) => (
        <SidebarButton
          key={index}
          path={button.path}
          icon={button.icon}
          label={button.label}
        />
      ))}
    </aside>
  );
};

export default Sidebar;
