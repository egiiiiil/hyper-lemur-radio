import './ChannelSelectButton.scss';
const ChannelSelectButton = (props) => {
	
	return (
		<>
			<button onClick={props.onClick} id='channel-select-button'>
				{props.name}
			</button>
		</>
	)
};

export default ChannelSelectButton;