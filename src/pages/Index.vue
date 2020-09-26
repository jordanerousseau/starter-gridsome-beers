<!-- Page Index -->
<template>
	<Layout>
		<div class="container">
			<masonry id="masonry" :cols="{default: 2, 850: 1}" :gutter="10">
				<g-link class="item" v-scroll-reveal="{ delay: 250 }" v-for="item in $static.allBeers.edges" :key="item.node.id" :to="item.node.path">
					<div class="row">
						<div class="column">
							<h2 v-html="item.node.name"></h2>
							<h3 v-html="item.node.tagline"></h3>
							<div class="button button-outline">See more</div>
						</div>

						<div class="column">
							<img :src="item.node.image_url" :alt="item.node.first_brewed">
						</div>
					</div>
				</g-link>
			</masonry>
		</div>
	</Layout>
</template>

<static-query>
	query Beers {
	 allBeers(order: ASC) {
	    edges {
	      node {
					id,
					name,
					tagline,
					image_url,
					first_brewed,
					path
	      }
	    }
	  }
	}
</static-query>

<script>
	import Layout from '~/layouts/Default.vue'

	export default {
		name: 'Index',
		metaInfo() {
			return {
		    title: 'Beers',
				titleTemplate: '%s',
		    meta: [
		      { name: 'description', content: 'List beers' }
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
