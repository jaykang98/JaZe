// File: About.tsx
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGlobeAmericas,
  faCalendarAlt,
  faUserCircle,
  faMusic,
} from "@fortawesome/free-solid-svg-icons";
import { ActivityConstructorProps } from "../../types/structureTypes";
import { fetchUserData } from "../../hooks/dataManagement/fetchUserData";

import DisplayTable from "../../components/views/displayTable/DisplayTable";
import DisplayGrid from "../../components/views/displayGrid/DisplayGrid";

const LandingPage: React.FC<ActivityConstructorProps> = ({ userID }) => {
  const { userData, artistData } = fetchUserData("j_aykang1");

  const renderUserInfo = () => {
    if (!userData || !userData.user) return null;
    const { user } = userData;
    const registrationDate = new Date(user.registered.unixtime * 1000);
    const currentDate = new Date();
    let yearsSinceRegistration =
      currentDate.getFullYear() - registrationDate.getFullYear();
    const monthsDifference =
      currentDate.getMonth() - registrationDate.getMonth();
    if (
      monthsDifference < 0 ||
      (monthsDifference === 0 &&
        currentDate.getDate() < registrationDate.getDate())
    ) {
      yearsSinceRegistration--;
    }

    const dataForDisplay = [
      [
        <span>
          <FontAwesomeIcon icon={faUserCircle} /> Name
        </span>,
        user.name,
      ],
      [
        <span>
          <FontAwesomeIcon icon={faGlobeAmericas} /> Country
        </span>,
        user.country,
      ],
      [
        <span>
          <FontAwesomeIcon icon={faCalendarAlt} /> User Since
        </span>,
        registrationDate.toLocaleDateString(),
      ],
      [
        <span>
          <FontAwesomeIcon icon={faCalendarAlt} /> Years Active
        </span>,
        `${yearsSinceRegistration} years`,
      ],
      [
        <span>
          <FontAwesomeIcon icon={faMusic} /> Playcount
        </span>,
        Number(user.playcount).toLocaleString(),
      ],
    ];

    return <DisplayTable data={dataForDisplay} />;
  };

  const userInfoElement = renderUserInfo();
  const aboutDescription = (
    <div>
      <h3>About You!</h3>
      This application generates visual representations of Last.FM data that you
      have scrobbled over time. Here are some basic facts from your Last.FM
      profile!
      {userInfoElement}
    </div>
  );
  const secondaryContent = (
    <div>
      <h3>Old Favorites to Revisit</h3>
      This application generates visual representations of Last.FM data that you
      have scrobbled over time. Here are some basic facts from your Last.FM
      profile!
    </div>
  );

  return (
    <DisplayGrid
      title="About"
      userID={userID}
      viewFrames={[
        {
          content: aboutDescription,
          viewWidth: 100,
        },
        {
          content: secondaryContent,
          viewWidth: 100,
        },
      ]}
    />
  );
};

export default LandingPage;
