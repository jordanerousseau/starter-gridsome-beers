<!-- Page 404 -->
<template>
	<Layout>
		<div class="container">
			<h1>404 - not found</h1>
		</div>
	</Layout>
</template>

<script>
	import Layout from '~/layouts/Default.vue'

	export default {
		name: '404',
		metaInfo() {
			return {
		    title: '404 - not found',
		    meta: [
		      { name: 'description', content: '404 - not found' }
		    ]
			}
	  },
		components: {
	    Layout
	  },
		mounted() {
			window.scrollTo(0, 0);
	  }
	}
</script>
