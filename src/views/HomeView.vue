<template>
  <div id="home">
    <h1>
      <!-- <router-link to="/"> -->
        Jason Moon
      <!-- </router-link> -->
    </h1>
    <section class="intro">
      <p>
        Hi. I'm a JavaScript engineer in Denver, Colorado. I create interactive web applications with a focus on usability, maintainability, and joy.
      </p>
      <p>
        I currently work on <outbound-link href="https://wordpress.com/">WordPress.com</outbound-link>
        as part of <outbound-link href="https://automattic.com/">Automattic</outbound-link>'s
        Data Engineering team. Before that, I informally led front-end development at
        <outbound-link href="https://techcrunch.com/2015/06/02/coupangzillion/">Coupang</outbound-link>'s
        Silicon Valley office, developed across the stack at
        <outbound-link href="https://www.humblebundle.com" title="Y Combinator Startup">Humble Bundle</outbound-link>,
        and served as engineer #2 at
        <outbound-link href="https://www.fastcompany.com/3062865/tim-cooks-apple/apple-acquires-personal-health-data-startup-gliimpse" title="Acquired by Apple">Gliimpse (Apple Health)</outbound-link>. 
        I am a first generation Korean American and hold a B.S. in Mechanical Engineering from University of California, Berkeley.
      </p>
      <p>
        I approach my work with a
        <outbound-link href="https://en.wikipedia.org/wiki/The_Pragmatic_Programmer">craftman's mindset</outbound-link>,
        prefer
        <outbound-link href="https://www.python.org/dev/peps/pep-0020/">simplicity over complexity</outbound-link>,
        and enjoy
        <outbound-link href="https://www.youtube.com/watch?v=f84n5oFoZBc">hammock-driven development</outbound-link>
        when given the chance.
      </p>
    </section>
    <section class="tools">
      <div class="left">
        Current tools of the trade:
        <ul>
          <li>
            <outbound-link href="https://facebook.github.io/react">React</outbound-link>
          </li>
          <li>
            <outbound-link href="http://redux.js.org">Redux</outbound-link>
          </li>
          <li>
            <outbound-link href="https://webpack.github.io">Webpack</outbound-link>
          </li>
          <li>
            <outbound-link href="babeljs.io">Babel</outbound-link>
          </li>
        </ul>
      </div>
      <div class="right">
        Exploring:
        <ul>
          <li>
            <outbound-link href="https://vuejs.org">Vue</outbound-link>
            (used to
            <outbound-link href="https://github.com/jsnmoon/jsnmoon.github.io">build this site</outbound-link>)
          </li>
          <li>
            <outbound-link href="http://elm-lang.org">Elm</outbound-link>
          </li>
        </ul>
      </div>
    </section>
    <!--
    <section class="portfolio"></section>
     -->
  </div>
</template>

<script>
/** @format */

import OutboundLink from '../components/OutboundLink.vue';

export default {
	name: 'home-view',
	components: {
		OutboundLink,
	},
};
</script>

<style lang="scss" scoped>
/** @format */

@import '../styles/colors';
@import '../styles/breakpoints';

h1 {
	font-weight: 500;
	margin: 0.5em 0;

	a {
		color: darken($brand-info, 40%);
	}

	@media (max-width: $breakpoint-mobile-lg) {
		margin-top: 0;
	}
}

p {
	margin: 1em 0;
	&:last-child {
		margin-bottom: 0;
	}
}

section {
	border-bottom: 1px solid $gray-lightest;
	padding-bottom: 1.5em;
	margin-bottom: 1.5em;
	&:last-child {
		margin-bottom: 0;
		border-bottom: none;
	}
}

.tools {
	display: flex;
	flex-flow: row wrap;

	ul {
		margin: 0.25em 0 0 0;
	}
}
.left,
.right {
	flex-basis: 50%;

	@media (max-width: $breakpoint-mobile-lg) {
		flex-basis: 100%;
		margin-bottom: 0.25em;
	}
}
</style>
