<template>
  <a :href="href" :rel="rel" :target="target" :title="title">
		<slot />
  </a>
</template>

<script>
/** @format */

export default {
	name: 'outbound-link',
	props: {
		href: String,
		title: String,
		rel: {
			type: String,
			default: 'nofollow',
		},
		target: {
			type: String,
			default: '_blank',
		},
	},
};
</script>
