<!-- Page Beer -->
<template>
	<Layout>
		<div id="modal">
			<div class="row">
				<div id="img" class="column">
				<img :src="$page.beers.image_url" :alt="$page.beers.first_brewed">
				<h1 class="title">{{ $page.beers.name }}</h1>
				</div>

				<div id="fiche" class="column">
				<h2 class="name"><strong>{{ $page.beers.name }}</strong><br>{{ $page.beers.tagline }}</h2>
				<h3 class="description">{{ $page.beers.description }}</h3>

				<table>
					<thead>
					<tr>
						<th colspan="2">Spécifications</th>
					</tr>
					</thead>

					<tbody>
					<tr>
						<td class="first_line">First Brewed</td>
						<td>{{ $page.beers.first_brewed }}</td>
					</tr>
					<tr>
						<td class="first_line">ABV</td>
						<td>{{ $page.beers.abv }}</td>
					</tr>
					<tr>
						<td class="first_line">IBU</td>
						<td>{{ $page.beers.ibu }}</td>
					</tr>
					<tr>
						<td class="first_line">EBC / SRM</td>
						<td>{{ $page.beers.ebc }} / {{ $page.beers.srm }}</td>
					</tr>
					</tbody>
				</table>

				<table>
					<thead>
					<tr>
						<th colspan="2">Ingrédients</th>
					</tr>
					</thead>

					<tbody>
					<tr>
						<td class="first_line">Malt</td>
						<td>
						<span v-for="malt in $page.beers.ingredients['malt']">{{ malt['name'] }}</span>
						</td>
					</tr>
					<tr>
						<td class="first_line">Yeast</td>
						<td>{{ $page.beers.ingredients['yeast'] }}</td>
					</tr>
					</tbody>
				</table>
				</div>
			</div>
		</div>
	</Layout>
</template>

<page-query>
	query ($id: ID!) {
		beers(id: $id) {
			id,
			name,
			tagline,
			description,
			image_url,
			first_brewed,
			abv,
			ibu,
			ebc,
			srm,
			ingredients {
				malt {
					name
				},
				yeast
			}
		}
	}
</page-query>

<script>
	const show = true;

	import Layout from '~/layouts/Default.vue'

	export default {
		name: 'Beer Template',
		metaInfo() {
			return {
		    title: this.$page.beers.name,
		    meta: [
		      { name: 'description', content: this.$page.beers.description }
		    ],
				bodyAttrs: {
		      class: 'beer'
		    }
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
