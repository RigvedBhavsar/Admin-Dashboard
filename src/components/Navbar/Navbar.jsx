import React from "react";
import "./Navbar.css";
import { NotificationsNone, Language, Settings } from "@material-ui/icons";
import profile from '../../assests/profile.jpeg'
import {Link} from 'react-router-dom';

const Navbar = () => {
	return (
		<div className="topbar">
			<div className="topbarWrapper">
				<div className="topLeft">
					<Link to='/' className="link">
						<span className="logo">Admin</span>
					</Link>
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
