<template>
    <div id="app">
        <b-navbar toggleable="lg">
            <b-container>
                <b-navbar-toggle target="nav-collapse" />
                <b-collapse id="nav-collapse" is-nav>
                    <b-navbar-nav class="mx-auto">
                        <b-nav-item href="#">About Me</b-nav-item>
                        <b-nav-item href="#">Experience</b-nav-item>
                        <b-nav-item href="#">Interviews</b-nav-item>
                        <b-nav-item href="#">Contact</b-nav-item>
                    </b-navbar-nav>
                </b-collapse>
            </b-container>
        </b-navbar>

        <header class="AppHeader">
            <b-container>
                <h1>Sam Murray</h1>
                <h3>Marketing &amp; Community Management Specialist</h3>
            </b-container>
            <div class="AppWaves">
                <svg
                    class="waves"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    viewBox="0 24 150 28"
                    preserveAspectRatio="none"
                    shapeRendering="auto"
                >
                    <defs>
                        <path
                            id="gentle-wave"
                            d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
                        />
                    </defs>
                    <g class="parallax">
                        <use xlink:href="#gentle-wave" x="48" y="0" fill="rgba(30,35,41,0.7" />
                        <use xlink:href="#gentle-wave" x="48" y="7" fill="rgb(30,35,41)" />
                    </g>
                </svg>
            </div>
        </header>

        <section class="AppAbout">
            <div class="container">
                <h4 id="AboutMe">A Little About Me</h4>
                <p>
                    You can see some background of my work below, but the cliff notes about me are
                    as follows:
                </p>
                <ul>
                    <li>I&#39;m a perfectionist who takes a tonne of pride in his work.</li>
                    <li>
                        I won&#39;t stop working when it hits 5pm, America is only just waking up on
                        the West Coast.
                    </li>
                    <li>I am always searching for new ways to market the same products.</li>
                    <li>
                        I have never left a job without numerous offers to write glowing referrals.
                    </li>
                </ul>
                <p>
                    From getting a game title shown on Twitch&#39;s front page, to having the entire
                    soundtrack drummed through, to linking up with brands to cross-promote,
                    there&#39;s a wealth of rarely tapped options for reach out there.
                </p>
                <p>I want to tap them all.</p>
                <p>
                    I take a lot of pride in my work and have never worked for a product I don&#39;t
                    believe in. If you&#39;ve reached this page, I believe in your product and I
                    believe more strongly that I can make it a success.
                </p>
            </div>
            <div class="AppWaves inverted">
                <svg
                    class="waves"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    viewBox="0 24 150 28"
                    preserveAspectRatio="none"
                    shapeRendering="auto"
                >
                    <defs>
                        <path
                            id="gentle-wave"
                            d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
                        />
                    </defs>
                    <g class="parallax">
                        <use xlink:href="#gentle-wave" x="48" y="0" fill="rgba(30,35,41,0.7" />
                        <use xlink:href="#gentle-wave" x="48" y="7" fill="rgb(30,35,41)" />
                    </g>
                </svg>
            </div>
        </section>

        <div class="AppExperiences" id="Experiences">

        </div>
    </div>
</template>

<script>
export default {
    name: 'Index',
    data() {
        return {
            experiences: [
                {
                    id: 'Aaero',
                    background: '',
                    logo: '',
                    description: '',
                    services: [],
                    thumbnail: '',
                    video: '',
                },
            ],
        }
    },
}
</script>
