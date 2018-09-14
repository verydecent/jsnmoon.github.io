<template>
  <div id="app">
    <transition name="fade" mode="out-in">
      <router-view class="view" />
    </transition>
  </div>
</template>

<script>
/** @format */

export default {
	name: 'app',
};
</script>

<style lang="scss">
/** @format */

@import 'styles/colors';
@import 'styles/breakpoints';

html {
	-moz-osx-font-smoothing: grayscale;
	-webkit-font-smoothing: antialiased;
	-webkit-text-size-adjust: 100%;
}

body {
	font-size: 16px;
	@media (max-width: $breakpoint-mobile) {
		font-size: 12px;
	}
	@media (max-width: $breakpoint-mobile-lg) {
		font-size: 14px;
	}
}

body {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	margin: 1em auto;
	padding: 1em 2em;
	max-width: 40em;
	text-rendering: optimizeLegibility;
}

h1,
h2,
h3 {
	line-height: 1.2em;
}

p {
	line-height: 1.4;
}

a {
	text-decoration: none;
	color: $brand-info;
	transition: color 0.1s linear, background-color 0.1s linear;

	&:active,
	&:focus,
	&:hover {
		color: darken($brand-info, 25%);
	}
}

@media print {
	body {
		max-width: none;
	}
}
</style>
