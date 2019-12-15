import React from 'react';
import { NavLink } from 'react-router-dom';

import Title from '../../components/Title';
import Button from '../../components/Button';
import '../../components/Link/Link.scss';
import './UserPage.scss';

const UserPage: React.FC = () => {
	return (
		<div className="UserPage">
			<div className="UserPage-Header">
				<div className="UserPage-Image"></div>
				<div className="UserPage-Preview">
					<Title className="UserPage-Title" level="1">
						Илья Сидорчик
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

export default UserPage;
