import React from 'react';
import PropTypes from 'prop-types';
import {
	Carousel,
	CarouselItem,
	CarouselControl,
	CarouselIndicators,
	Modal,
	ModalHeader,
	ModalBody,
} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlayCircle } from '@fortawesome/pro-solid-svg-icons';


class Interviews extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			activeIndex: 0,
			activeInterview: 0,
			animating: false,
			modal: false,
		};
	}

	render() {
		const toggle = (interview) => {
			if(interview !== undefined && interview !== null) {
				this.setState({ modal: !this.state.modal, activeInterview: interview });
			}
			else {
				this.setState({ modal: !this.state.modal });
			}
		};

		const next = () => {
			if (this.state.animating) return;
			const nextIndex = this.state.activeIndex === this.props.items.length - 1 ? 0 : this.state.activeIndex + 1;
			this.setState({ activeIndex:nextIndex });
		};

		const previous = () => {
			if (this.state.animating) return;
			const nextIndex = this.state.activeIndex === 0 ? this.props.items.length - 1 : this.state.activeIndex - 1;
			this.setState({ activeIndex:nextIndex });
		};

		const goToIndex = (newIndex) => {
			if (this.state.animating) return;
			this.setState({ activeIndex:newIndex });
		};

		const slides = this.props.items.map((item, i) => {
			return (
				<CarouselItem
					onExiting={() => this.setState({ animating: true })}
					onExited={() => this.setState({ animating: false })}
					key={i}
				>
					<div onClick={() => toggle(i)} className="Thumbnail" style={{ backgroundImage: `url(${item.src })`, backgroundPosition: `${item.position}` }}>
						<div className="ThumbnailCaption">
							<p>
								<FontAwesomeIcon icon={ faPlayCircle } />
							</p>
							{item.caption}
						</div>
					</div>
				</CarouselItem>
			);
		});

		return (
			<div>
				<Carousel
					activeIndex={this.state.activeIndex}
					next={next}
					previous={previous}
				>
					<CarouselIndicators items={this.props.items} activeIndex={this.state.activeIndex} onClickHandler={goToIndex} />
					{slides}
					<CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
					<CarouselControl direction="next" directionText="Next" onClickHandler={next} />
				</Carousel>
				{(this.state.activeInterview != null) ? (
					<Modal isOpen={this.state.modal} toggle={() => toggle(null)} size='xl' centered={true} id="VideoModal">
						<ModalHeader toggle={() => toggle(null)}>{this.props.items[this.state.activeInterview].caption}</ModalHeader>
						<ModalBody>
							<div className="embed-responsive embed-responsive-16by9">
								<iframe className="embed-responsive-item" src={'https://www.youtube.com/embed/' + this.props.items[this.state.activeInterview].code} frameBorder="0" allowFullScreen title={this.props.items[this.state.activeInterview].caption}></iframe>
							</div>
						</ModalBody>
					</Modal>
				) : (
					''
				)}
			</div>
		);
	}
}

Interviews.propTypes = {
	items: PropTypes.array,
};

Interviews.defaultProps = {
	items: [],
};

export default Interviews;
