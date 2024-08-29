import "./projectItem.scss";

const ProjectItem = (props) => {
	const imgSize = {
		width: props.width,
		height: props.height,
	};
	return (
		<div
			className={`${props.name} project_item `}
			data-scroll
			data-scroll-direction="horizontal"
			data-scroll-speed="4"
		>
			<img src={props.toy} alt="toyimage" className="toy" />
			<div className="project_image" style={imgSize}>
				<img src={props.img} alt={props.title} data-scroll />
			</div>
			<div className="project_textbox">
				<a
					href={props.link}
					target="_blank"
					rel="noopener noreferrer"
					className="project_title target"
				>
					{props.title}
				</a>
				<p className="project_text">{props.text}</p>
			</div>
		</div>
	);
};

export default ProjectItem;
