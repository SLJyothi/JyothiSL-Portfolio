import "./skillSection.scss";
import SkillItem from "../../UI/skillItem/skillItem.js";
import data from "./skillData.js";
import { ReactComponent as Bg } from "../../../assets/skillSectionbg.svg";
const SkillSection = () => {
	return (
		<section className="skill" id="Experience" data-scroll-section>
			<h1
				className="skill_section_title"
				data-scroll
				data-scroll-direction="vertical"
				data-scroll-speed="-3"
			>
				Experience.
			</h1>
			<div
				className="skill_bg"
				data-scroll
				data-scroll-direction="vertical"
				data-scroll-speed="-2"
			>
				<Bg />
			</div>

			<div
				className="skill_items"
				data-scroll
				data-scroll-direction="vertical"
				data-scroll-speed="1"
			>
				{data.map((i, idx) => (
					<SkillItem key={idx} title={i.title} list={i.list} />
				))}
			</div>
		</section>
	);
};

export default SkillSection;
