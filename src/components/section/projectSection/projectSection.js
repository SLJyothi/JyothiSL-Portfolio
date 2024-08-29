import "./projectSection.scss";
import { ReactComponent as Dots } from "../../../assets/dots.svg";
import ProjectItem from "../../UI/projectItem/projectItem";
import projectImg from "../../../assets/My Portfolio.png";
import Spinner from "../../../assets/spinner.png";
import MLL from "../../../assets/srock-paper-scissors.jpg";
import furbo from "../../../assets/character maker.png";
import toyGreen from "../../../assets/toyGreen.png";
import toyRed from "../../../assets/toyRed.png";
import toyBlue from "../../../assets/toyBlue.png";
import { useLocomotiveScroll } from "react-locomotive-scroll";
import { useEffect } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const ProjectSection = () => {
	const { scroll } = useLocomotiveScroll();
	const spinner = document.getElementById("spinner");
	const title = document.getElementById("project_section_title");
	const width = window.screen.width;
	useEffect(() => {
		if (scroll && spinner) {
			scroll.on("scroll", (instance) => {
				if (title.classList.contains("is-inview")) {
					spinner.style.transform = "rotate(" + instance.scroll.y / 3 + "deg)";
				}
			});
		}
	}, [scroll, spinner]);

	return width > 600 ? (
		<section className="project" id="Projects" data-scroll-section>
			<Dots className="project_dots" />
			<div id="project_title_wrapper" className="project_title_wrapper">
				<div
					className="project_section_title"
					id="project_section_title"
					data-scroll
					data-scroll-sticky
					data-scroll-target="#project_title_wrapper"
				>
					Projects.
					<img
						src={Spinner}
						alt="spinner"
						className="project_spinner"
						id="spinner"
						data-scroll
					/>
				</div>

				<div className="project_items">
					<ProjectItem
						name="portfolio"
						img={projectImg}
						toy={toyGreen}
						width="30vw"
						height="auto"
						title="My Portfolio"
						link="https://sljyothi.github.io/JyothiSL-Portfolio/"
						text={[
							"My Portfolio.",
						]}
					/>
					<ProjectItem
						name="mll"
						img={MLL}
						toy={toyRed}
						width="30vw"
						height="auto"
						title="rock paper scissors"
						link="rock-paper-scissors-jyothisl.netlify.app/"
						text={[
							"Rules If the player wins, they gain 1 point. If the computer wins, the player loses one point.",
						]}
					/>
				</div>
			</div>

			<ProjectItem
				name="furbo"
				img={furbo}
				toy={toyBlue}
				width="40vw"
				height="auto"
				title="Character Maker"
				link="https://character-maker-fun.netlify.app/"
				text={[
					"Create with love.",
				]}
			/>
		</section>
	) : (
		<section className="project" id="Projects" data-scroll-section>
			<Dots className="project_dots" />
			<div
				className="project_section_title"
				id="project_section_title"
				data-scroll
			>
				Projects.
			</div>
			<Carousel
				showStatus={false}
				width="100%"
				infiniteLoop={true}
				autoPlay={true}
				showThumbs={false}
			>
				<ProjectItem
					name="portfolio"
					img={projectImg}
					toy={toyGreen}
					width="30vw"
					height="auto"
					title="My Portfolio"
					link="https://sljyothi.github.io/JyothiSL-Portfolio/"
					text={[
						"My Portfolio.",
					]}
				/>
				<ProjectItem
					name="mll"
					img={MLL}
					toy={toyRed}
					width="30vw"
					height="auto"
					title="rock paper scissors"
					link="rock-paper-scissors-jyothisl.netlify.app/"
					text={[
						"Rules If the player wins, they gain 1 point. If the computer wins, the player loses one point.",
					]}
				/>
				<ProjectItem
					name="furbo"
					img={furbo}
					toy={toyBlue}
					width="40vw"
					height="auto"
					title="Character Maker"
					link="https://character-maker-fun.netlify.app/"
					text={[
						"Create with love.",
					]}
				/>
			</Carousel>
		</section>
	);
};

export default ProjectSection;
