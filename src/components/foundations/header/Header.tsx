import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {IconDefinition} from "@fortawesome/free-solid-svg-icons";

interface HeaderProps {
    header: string;
    icon?: IconDefinition;
}
const Header: React.FC<HeaderProps> = ({header,icon}) => {
  return (
    <header>
      <h1>
        <FontAwesomeIcon
          icon={icon}
          style={{ color: "black" }}
          className="hdrIcon"
        />
          <span> </span>
          {header}
      </h1>
    </header>
  );
};

export default Header;
