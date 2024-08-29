import "./contactInfo.scss";
const ContactInfo = (props) => {
	return (
		<div className="contact_info target">
			<props.img className="contact_info_icon" />
			<a
				href={props.link}
				target="_blank"
				rel="noopener noreferrer"
				className="text"
			>
				{props.info}
			</a>
		</div>
	);
};

export default ContactInfo;
