import "./skillItem.scss";

const SkillItem = (props) => {
	const list = props.list;
	return (
		<div className="skill_item">
			<h3 className="skill_title">{props.title}</h3>
			<ul className="skill_list">
				{list.map((i, idx) => (
					<li key={idx}>{i}</li>
				))}
			</ul>
		</div>
	);
};

export default SkillItem;
