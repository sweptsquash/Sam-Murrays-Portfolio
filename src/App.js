import React, { useState } from 'react';
import {
	Container,
	Collapse,
	Navbar,
	NavbarToggler,
	Nav,
	NavItem,
	NavLink,
	Row,
	Col,
} from 'reactstrap';
import { faLink } from '@fortawesome/pro-solid-svg-icons';
import { faXbox, faPlaystation, faSteam } from '@fortawesome/free-brands-svg-icons';
import Experience from './components/Experience';
import Interviews from './components/Interviews';

/* Assets */
import AaeroLogo from './assets/images/Aaero-Logo.png';
import AaeroBG from './assets/images/Aaero-BG.png';
import AaeroThumb from './assets/images/Aaero-Thumb.png';

import DeceitLogo from './assets/images/Deceit-Logo.png';
import DeceitBG from './assets/images/Deceit-BG.jpg';
import DeceitThumb from './assets/images/Deceit-Thumb.jpg';

import MVXLogo from './assets/images/MVX-Logo.png';
import MVXBG from './assets/images/MVX-BG.png';
import MVXThumb from './assets/images/MVX-Thumb.png';

import TwitchLogo from './assets/images/Twitch-Logo.png';
import TwitchLogoWhite from './assets/images/Twitch-Logo-White.png';
import TwitchBG from './assets/images/Twitch-BG.png';
import TwitchThumb from './assets/images/Twitch-Thumb.png';

import SenshudoLogo from './assets/images/Senshudo-Logo.png';
import SenshudoBG from './assets/images/Senshudo-BG.png';
import SenshudoThumb from './assets/images/Senshudo-Thumb.png';

import KickstarterLogo from './assets/images/Kickstarter-Logo.png';
import KickstarterBG from './assets/images/Kickstarter-BG.png';
import KickstarterChar from './assets/images/Kickstarter-Character.png';

import ToxicThumb from './assets/images/Toxic.png';
import GrowthThumb from './assets/images/Growth.png';
import UdemyLogo from './assets/images/Udemy-Logo.png';

import Interview1Thumb from './assets/images/Interview1Thumb.png';
import Interview2Thumb from './assets/images/Interview2Thumb.png';
import Interview3Thumb from './assets/images/Interview3Thumb.png';
import Interview4Thumb from './assets/images/Interview4Thumb.png';

function App() {
	const [isOpen, setIsOpen] = useState(false);
	const toggle = () => setIsOpen(!isOpen);

	const InterviewList = [
		{
			src: Interview1Thumb,
			code: 'Tw5TVJPOIoU',
			caption: 'E3 2015: Oddworld Interview',
			position: '100% 70%',
		},
		{
			src: Interview2Thumb,
			code: '7c4npX3KIUQ',
			caption: 'The 6/10 Podcast: Live At EGX 2017',
			position: 'top',
		},
		{
			src: Interview3Thumb,
			code: 'Gl2Oa3810ms',
			caption: 'E3 2015: Alekhines Gun Interview',
			top: 'top',
		},
		{
			src: Interview4Thumb,
			code: '2u48c3xz_EE',
			caption: 'Harvest Mood: Light of Hope Interview @ E3 2017',
			position: 'center 30%',
		},
	];

	return (
		<div>
			<Navbar color="light" light expand="md" fixed="top">
				<NavbarToggler onClick={toggle} />
				<Collapse isOpen={isOpen} navbar>
					<Nav className="ml-auto mr-auto" navbar>
						<NavItem>
							<NavLink href="#AboutMe" className="active">About Me</NavLink>
						</NavItem>
						<NavItem>
							<NavLink href="#Experiences">Experience</NavLink>
						</NavItem>
						<NavItem>
							<NavLink href="#Interviews">Interviews</NavLink>
						</NavItem>
						<NavItem>
							<NavLink href="#Contact">Contact</NavLink>
						</NavItem>
					</Nav>
				</Collapse>
			</Navbar>
			<header className="AppHeader">
				<Container>
					<h1>Sam Murray</h1>
					<h3>Marketing &amp; Community Management Specialist</h3>
				</Container>
				<div className="AppWaves">
					<svg className="waves" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 24 150 28" preserveAspectRatio="none" shapeRendering="auto">
						<defs>
							<path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
						</defs>
						<g className="parallax">
							<use xlinkHref="#gentle-wave" x="48" y="0" fill="rgba(30,35,41,0.7" />
							<use xlinkHref="#gentle-wave" x="48" y="7" fill="rgb(30,35,41)" />
						</g>
					</svg>
				</div>
			</header>
			<section className="AppAbout">
				<div className="container">
					<h4 id="AboutMe">A Little About Me</h4>
					<p>You can see some background of my work below, but the cliff notes about me are as follows:</p>
					<ul>
						<li>I&#39;m a perfectionist who takes a tonne of pride in his work.</li>
						<li>I won&#39;t stop working when it hits 5pm, America is only just waking up on the West Coast.</li>
						<li>I am always searching for new ways to market the same products.</li>
						<li>I have never left a job without numerous offers to write glowing referrals.</li>
					</ul>
					<p>From getting a game title shown on Twitch&#39;s front page, to having the entire soundtrack drummed through, to linking up with brands to cross-promote, there&#39;s a wealth of rarely tapped options for reach out there.</p>
					<p>I want to tap them all.</p>
					<p>I take a lot of pride in my work and have never worked for a product I don&#39;t believe in. If you&#39;ve reached this page, I believe in your product and I believe more strongly that I can make it a success.</p>
				</div>
				<div className="AppWaves inverted">
					<svg className="waves" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 24 150 28" preserveAspectRatio="none" shapeRendering="auto">
						<defs>
							<path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
						</defs>
						<g className="parallax">
							<use xlinkHref="#gentle-wave" x="48" y="0" fill="rgba(30,35,41,0.7" />
							<use xlinkHref="#gentle-wave" x="48" y="7" fill="rgb(30,35,41)" />
						</g>
					</svg>
				</div>
			</section>
			<div className="AppExperiences" id="Experiences">
				<Experience
					id='Aaero'
					backgroundImg={AaeroBG}
					logoImg={AaeroLogo}
					description={[
						'I worked closely with Mad Fellows to recover and build up their social media/marketing, as they moved to self-publishing. We far outsold the initial publisher\'s marketing expectations and revived the fan-base behind Aaero to the point that a sequel is now in development.',
						'This was performed post-release and using DLC as a vehicle to promote from.',
					]}
					services={[
						[
							faXbox,
							'Xbox',
							'https://www.microsoft.com/store/p/aaero/bzr51xd70nkd?rtc=1',
						],
						[
							faPlaystation,
							'PlayStation',
							'https://store.playstation.com/#!/games/aaero/cid=EP2059-CUSA08067_00-AAEROGAME1234567',
						],
						[
							faSteam,
							'Steam',
							'http://store.steampowered.com/app/499890/Aaero/',
						],
					]}
					videoImg={AaeroThumb}
					videoUrl='https://www.twitch.tv/the8bitdrummer'
				/>
				<Experience
					id='Deceit'
					rightAligned={true}
					backgroundImg={DeceitBG}
					logoImg={DeceitLogo}
					description={[
						'Due to limited bandwidth, a community had fallen by the wayside. I implemented new guidelines, direct community management techniques and provided additional attention to de-toxify a long-standing community.',
						'The change was profound and the community became welcoming & engaging within a month.',
					]}
					services={[
						[
							faSteam,
							'Steam',
							'https://store.steampowered.com/app/466240/Deceit/',
						],
					]}
					videoImg={DeceitThumb}
					videoUrl='https://www.youtube.com/watch?v=_Nc50F-W6to'
				/>
				<Experience
					id='Mvx'
					backgroundImg={MVXBG}
					logoImg={MVXLogo}
					description={[
						'During a difficult development period as a game\'s model was pivoted, I worked to deliver compelling marketing material, while closely managing the community.',
						'This helped ensure they didn\'t feel ignored, their feedback was valued and stayed loyal during a tough transitional time. ',
					]}
					videoImg={MVXThumb}
					videoUrl='https://www.youtube.com/watch?v=IOo5GRq9Xh0'
				/>
				<Experience
					id='Twitch'
					rightAligned={true}
					overlay={false}
					backgroundImg={TwitchBG}
					logoImg={TwitchLogo}
					description={[
						'I\'m a Twitch partner, have hosted events on Twitch\'s stages at gaming events and am regularly featured on the site\'s front page.',
					]}
					services={[
						[
							faLink,
							'Twitch',
							'https://www.twitch.tv/senshudo',
						],
					]}
					videoImg={TwitchThumb}
					videoUrl='https://www.youtube.com/watch?v=7c4npX3KIUQ'
				/>
				<Experience
					id='Sen'
					backgroundImg={SenshudoBG}
					logoImg={SenshudoLogo}
					description={[
						'I run and own this company to create products and fill niches for people in the livestreaming space.',
						'We are one of the largest streaming communities & heavily support the creative community.',
					]}
					services={[
						[
							faLink,
							'Senshudo Website',
							'https://www.senshudo.tv',
						],
						[
							faLink,
							'CreativeStreams Website',
							'https://www.creativestreams.tv',
						],
					]}
					videoImg={SenshudoThumb}
					videoUrl='https://www.creativestreams.tv'
				/>
				<Experience
					id='Kick'
					rightAligned={true}
					video={false}
					backgroundImg={KickstarterBG}
					logoImg={KickstarterLogo}
					characterImg={KickstarterChar}
					description={[
						'I\'ve helped a number of titles through Kickstarter & matchmade countless people in the industry to share services.',
					]}
					services={[
						[
							faLink,
							'Eminence: Xanders Tales',
							'https://www.kickstarter.com/projects/1661433091/eminence-xanders-tales/',
						],
						[
							faLink,
							'Games Industry Card Game',
							'https://www.kickstarter.com/projects/1163288590/game-developerz-the-games-industry-card-game',
						],
					]}
				/>
			</div>
			<section className="AppThoughts" id="Thoughts">
				<div className="overlay"></div>
				<Container>
					<Row className="text-center mb-5">
						<Col xl={12}>
							<h2>Thought Leadership</h2>
							<p className="lead">I share the knowledge I gather<br />It&#39;s minimally useful when kept to myself.</p>
						</Col>
					</Row>
					<Row className="text-center">
						<Col sm={12} md={6}>
							<a href="https://medium.com/@Squallmuzza/turning-toxic-into-terrific-salvaging-a-community-827492725435" target="_blank" rel="noopener noreferrer">
								<p>
									<img src={ToxicThumb} alt="" />
								</p>
								<p className="lead">
									Toxic Communities
								</p>
							</a>
						</Col>
						<Col sm={12} md={6}>
							<a href="https://medium.com/@Squallmuzza/why-i-dont-supportsmallstreamers-related-stream-teams-da1720ef85d2" target="_blank" rel="noopener noreferrer">
								<p>
									<img src={GrowthThumb} alt="" />
								</p>
								<p className="lead">
									Debunking Poor Streamer<br />Etiquette &amp; Growth Strategy
								</p>
							</a>
						</Col>
					</Row>
				</Container>
			</section>
			<section className="AppStreaming" id="Livestreaming">
				<div className="overlay"></div>
				<Container>
					<Row className="text-center mb-5">
						<Col xl={12}>
							<h2>Livestreaming</h2>
							<p className="lead">I seek to share lessons learned from the<br />infancy of livestreaming up until present day.</p>
						</Col>
					</Row>
					<Row className="text-center">
						<Col sm={12} md={6}>
							<a href="https://twitter.com/Squallmuzza/status/1022054924811677696" target="_blank" rel="noopener noreferrer">
								<p>
									<img src={TwitchLogoWhite} alt="" />
								</p>
								<p className="lead">
									Free Guidance<br />On Livestreaming
								</p>
							</a>
						</Col>
						<Col sm={12} md={6}>
							<a href="https://www.udemy.com/course/the-complete-guide-to-twitch-streaming/" target="_blank" rel="noopener noreferrer">
								<p>
									<img src={UdemyLogo} alt="" />
								</p>
								<p className="lead">
									A Best In Class<br />Livestreaming Course
								</p>
							</a>
						</Col>
					</Row>
				</Container>
			</section>
			<div id="Interviews">
				<Interviews items={InterviewList} />
			</div>
			<section className="AppQuote" id="quote">
				<Container>
					<Row>
						<Col className="text-center">
							Communities Don&#39;t Sleep When You Clock Off And Marketing Doesn&#39;t Finish When You Hit &quot;Send&quot;.
						</Col>
					</Row>
				</Container>
			</section>
			<section className="AppContact" id="Contact">
				<Container>
					<Row>
						<Col xl={12} className="text-center">
							<h2>Contact Me</h2>
							<p className="mb-0">
								<a href="mailto:sam.murray@senshudo.tv?subject=Portfolio%20Contact">
									sam.murray [at] senshudo.tv
								</a>
							</p>
						</Col>
					</Row>
				</Container>
			</section>
			<footer className="AppFooter">
				<Container>
					<Row>
						<Col xl={12} className="text-center">
							&copy; 2020 By Sam Murray.
						</Col>
					</Row>
				</Container>
			</footer>
		</div>
	);
}

export default App;
