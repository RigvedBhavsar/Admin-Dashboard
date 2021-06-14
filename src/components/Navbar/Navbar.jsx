import React from "react";
import "./Navbar.css";
import { NotificationsNone, Language, Settings } from "@material-ui/icons";
import profile from '../../assests/profile.jpeg'
const Navbar = () => {
	return (
		<div className="topbar">
			<div className="topbarWrapper">
				<div className="topLeft">
					<span className="logo">Dashboard</span>
				</div>
				<div className="topRight">
					<div className="topbarIconContainer">
						<NotificationsNone />
						<span className="topIconBadge">2</span>
					</div>
					<div className="topbarIconContainer">
						<Language />
						<span className="topIconBadge">2</span>
					</div>
					<div className="topbarIconContainer">
						<Settings />
					</div>
					<img
						src={profile}
						alt=""
						className="topAvatar"
					/>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
