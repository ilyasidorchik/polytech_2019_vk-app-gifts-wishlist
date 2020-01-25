import React from "react";
import { NavLink } from "react-router-dom";

import Title from "../../components/Title";
import Button from "../../components/Button";
import "../../components/Link/Link.scss";
import "../UserPage/UserPage.scss";

const FriendPage: React.FC = () => {
    return (
        <div className="UserPage">
            <div className="UserPage-Header">
                <img
                    className="User-Image"
                    src="https://sun1-22.userapi.com/c856024/v856024222/13fae8/Hh1rhOF2dk0.jpg?ava=1"
                    alt="Дмитрий Гущин"
                />
                <div className="UserPage-Preview">
                    <Title className="UserPage-Title" level="1">
                        Дмитрий Гущин
                    </Title>

                    <div className="UserPage-Nav">
                        <NavLink
                            className="Link UserPage-Link"
                            activeClassName="Link_selected"
                            to="/profile"
                            exact
                        >
                            Хочу получить&nbsp;
                            <span
                                role="img"
                                aria-label="Эмодзи «Расслабленное лицо»"
                            >
                                😌
                            </span>
                        </NavLink>

                        <NavLink
                            className="Link UserPage-Link"
                            activeClassName="Link_selected"
                            to="/profile/gifts-for-friends"
                        >
                            Хочу подарить&nbsp;
                            <span
                                role="img"
                                aria-label="Эмодзи «Улыбающееся лицо в солнечных очках»"
                            >
                                😎
                            </span>
                        </NavLink>
                    </div>

                    <div className="UserPage-Share">
                        <Button>Поделиться</Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FriendPage;
