import "./Header.css"
import PersonIcon from "@mui/icons-material/Person"
import { IconButton } from "@mui/material"
import ForumIcon from "@mui/icons-material/Forum"

const Header = () => {
	return (
		<div className="header">
			<IconButton>
				<PersonIcon fontSize="large" className="header__icon" />
			</IconButton>
			<img
				className="header__logo"
				src="https://static.tildacdn.com/tild3862-3761-4863-b238-383637316365/dating-app-icon.png"
				alt="header"
			/>
			<IconButton>
				<ForumIcon fontSize="large" className="header__icon" />
			</IconButton>
		</div>
	)
}

export default Header
