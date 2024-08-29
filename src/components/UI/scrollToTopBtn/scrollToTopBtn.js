import "./scrollToTopBtn.scss";

const ScrollToTopBtn = (props) => {
	return (
		<a
			className={`scroll_top_btn ${props.isScrolled && "scrolled"}`}
			href="https://drive.google.com/file/d/1R_xDNHDDfqhsTJZ4OggjiOsHwsBX5oLu/view?usp=sharing"
			target="_blank"
			rel="noopener noreferrer"
		>
			RESUME
		</a>
	);
};
export default ScrollToTopBtn;
