import "./homepage.scss";
import WelcomeSection from "../../components/section/welcomeSection/welcomeSection";
import SecondSection from "../../components/section/secondSection/secondSection";
import ContactSection from "../../components/section/contactSection/contactSection";
import ProjectSection from "../../components/section/projectSection/projectSection";
import SkillSection from "../../components/section/skillSection/skillSection";
const Homepage = () => {
	return (
		<div className="homepage">
			<WelcomeSection />
			<SecondSection />
			<SkillSection />
			<ProjectSection />
			<ContactSection />
		</div>
	);
};
export default Homepage;
