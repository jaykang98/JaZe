import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {IconDefinition} from "@fortawesome/free-solid-svg-icons";

interface TitleProps {
    header: string;
    icon?: IconDefinition;
}
const Title: React.FC<TitleProps> = ({header,icon}) => {
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

export default Title;
