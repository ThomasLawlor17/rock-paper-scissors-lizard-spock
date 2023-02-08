import React from "react";
import PropTypes from "prop-types";
import IconRock from "./Rock";
import IconPaper from "./Paper";
import IconScissors from "./Scissors";
import IconLizard from "./Lizard";
import IconSpock from "./Spock";
import IconClose from "./Close";
import IconLogo from "./Logo";

const Icon = ({ name }) => {
	switch (name) {
		case "Rock":
			return <IconRock />;
		case "Paper":
			return <IconPaper />;
		case "Scissors":
			return <IconScissors />;
		case "Lizard":
			return <IconLizard />;
		case "Spock":
			return <IconSpock />;
		case "Close":
			return <IconClose />;
		case 'Logo':
			return <IconLogo/>;
		default:
			return null
	}
};

Icon.propTypes = {
	name: PropTypes.string.isRequired,
};

export default Icon;
