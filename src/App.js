import "./styles/app.scss";
import Header from "./components/header/header.js";
import CustomCursor from "custom-cursor-react";
import "custom-cursor-react/dist/index.css";
// import CustomCursor from "./components/customCursor/customCursor.js";
import Homepage from "./pages/homepage/homepage";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";
import { useRef } from "react";

function App() {
	const ref = useRef(null);
	const options = {
		smooth: true,
		lerp: 0.1,
		repeat: true,
		// smartphone: {
		// 	smooth: true,
		// },
		tablet: { smooth: true },
	};

	return (
		<div className="app">
			<LocomotiveScrollProvider options={options} watch={[]} containerRef={ref}>
				<main className="main-container" data-scroll-container ref={ref}>
					<CustomCursor
						targets={[".link", ".target"]}
						customClass="custom-cursor"
						dimensions={40}
						fill="#ABB8C3"
						smoothness={{
							movement: 0.3,
							scale: 0.1,
							opacity: 0.3,
						}}
						targetOpacity={0.9}
						targetScale={1.2}
					/>
					{/* <CustomCursor /> */}
					<Header />
					<div className="content">
						<Homepage />
					</div>
				</main>
			</LocomotiveScrollProvider>
		</div>
	);
}

export default App;
