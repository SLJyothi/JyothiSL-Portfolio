import "./mapPin.scss";

const MapPin = (props) => {
	return (
		<div className={`${props.class} map_pin`}>
			<span className="year">{props.year}</span>
			<span className="event">{props.event}</span>
		</div>
	);
};
export default MapPin;
