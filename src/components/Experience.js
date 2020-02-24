import React from 'react';
import PropTypes from 'prop-types';
import {
	Container,
	Row,
	Col,
} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlayCircle } from '@fortawesome/pro-solid-svg-icons';
import ServiceIcon from './ServiceIcon';

class Experience extends React.Component {
	render() {
		const ColVid = () => {
			return(
				<Col sm={12} md={7} className={(!this.props.rightAligned ? 'text-right' : '')}>
					{(this.props.video) ? (
						<a href={this.props.videoUrl} className="VideoThumbnail" target="_blank" rel="noopener noreferrer">
							<img src={this.props.videoImg} width="543" height="308" alt="" />
							<div className="PlayIcon">
								<FontAwesomeIcon icon={ faPlayCircle } />
							</div>
						</a>
					) : (
						<div className="CharacterImage" style={{ backgroundImage: `url(${this.props.characterImg})` }}></div>
					)}
				</Col>
			);
		};

		const ColDesc = () => {
			return (
				<Col sm={12} md={5} className={(this.props.rightAligned ? 'text-right' : '')}>
					<p>
						<img src={this.props.logoImg} className="Logo" alt="" width="320" height="80" />
					</p>
					{(this.props.description != null) ? (
						this.props.description.map((item, i) => {
							return (
								<p key={i}>{item}</p>
							);
						})
					) : (
						''
					)}
					{(this.props.services != null) ? (
						<p>
							{this.props.services.map((service, i) => {
								return (
									<ServiceIcon key={i}	item={service} i={i} id={this.props.id} />
								);
							})}
						</p>
					) : (
						''
					)}
				</Col>
			);
		};

		return(
			<section className={'AppExperience' + (this.props.rightAligned ? ' Right' : '') + (!this.props.overlay ? ' no-overlay' : '')} style={{ backgroundImage:`url(${this.props.backgroundImg})` }} id={this.props.id}>
				<div className={'overlay' + (!this.props.overlay ? ' d-none' : '')}></div>
				<Container fluid={true}>
					{(this.props.rightAligned ?
						(
							<Row>
								{ColVid()}
								{ColDesc()}
							</Row>
						) : (
							<Row>
								{ColDesc()}
								{ColVid()}
							</Row>
						)
					)}
				</Container>
			</section>
		);
	}
}

Experience.propTypes = {
	id: PropTypes.string,
	rightAligned: PropTypes.bool,
	overlay: PropTypes.bool,
	characterImg: PropTypes.string,
	backgroundImg: PropTypes.string,
	logoImg: PropTypes.string,
	description: PropTypes.array,
	services: PropTypes.array,
	video: PropTypes.bool,
	videoImg: PropTypes.string,
	videoUrl: PropTypes.string,
};

Experience.defaultProps = {
	id: '',
	rightAligned: false,
	overlay: true,
	characterImg: '',
	backgroundImg: '',
	logoImg: '',
	description: [],
	services: [],
	video: true,
	videoImg: '',
	videoUrl: '',
};

export default Experience;