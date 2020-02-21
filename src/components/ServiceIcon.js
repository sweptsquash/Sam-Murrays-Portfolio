import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Tooltip } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

var ServiceIcon = (props) => {
	const [tooltipOpen, setTooltipOpen] = useState(false);

	const toggleToolTip = () => setTooltipOpen(!tooltipOpen);

	return(
		<a href={props.item[2]} className="ServiceIcon" target="_blank" rel="noopener noreferrer">
			<FontAwesomeIcon icon={props.item[0]} id={props.id + '-' + props.i} />
			<Tooltip key={props.i} placement="top" isOpen={tooltipOpen} target={props.id + '-' + props.i} toggle={toggleToolTip}>
				{props.item[1]}
			</Tooltip>
		</a>
	);
};

ServiceIcon.propTypes = {
	item: PropTypes.array,
	i: PropTypes.number,
	id: PropTypes.string,
};

ServiceIcon.defaultProps = {
	item: [],
	i: 0,
	id: '',
};

export default ServiceIcon;