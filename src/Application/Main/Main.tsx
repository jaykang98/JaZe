import React, { useEffect } from "react";
import { ActivityConstructorProps } from "types/structureTypes";
import DisplayGrid from "../../components/structure/viewChildren/displayGrid/DisplayGrid";
import { useViewTitle } from "../../contexts/ViewTitleContexts";

const Main: React.FC<ActivityConstructorProps> = () => {
    const { setTitle } = useViewTitle();
    useEffect(() => {
        setTitle("Main");
    }, [setTitle]);

    return (
        <>
            <DisplayGrid
                title="Main"
                viewFrames={[
                    {
                        content: (
                            <>
                                <p>
                                    Adjust your preferences for a personalized experience. JaZe
                                    offers a number of customization options, including Last.FM
                                    login, disabling local encryption (faster, but less secure),
                                    clearing all saved information, and dark mode. Enjoy!
                                </p>
                                <ul>
                                    <li>
                                        Use the Last.FM Authentication Framework to view data about
                                        your music
                                    </li>
                                    <li>
                                        Store some of the data locally and securely to save on query
                                        requests
                                    </li>
                                    <li>
                                        View your top ten musicians, albums, and tracks of all time.
                                        AND the number of scrobbles!
                                    </li>
                                    <li>Create a Last.FM account from the click of a button</li>
                                    <li>
                                        Enable DEBUG_MODE to view more information and disable
                                        encryption
                                    </li>
                                    <li>Quick links for quick actions!</li>
                                </ul>
                            </>
                        ),
                        viewWidth: 100,
                    }
                ]}
            /></>
    );
};

export default Main;
