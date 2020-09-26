<!-- Layout -->
<template>
	<div id="wrapper">
		 <Header/>

		 <main id="content">
		 	<slot></slot>
		 </main>

		 <Footer/>

	</div>
</template>

<script>
import Header from '~/components/Header.vue'
import Footer from '~/components/Footer.vue'

export default {
	metaInfo: {
		htmlAttrs: {
			lang: 'fr',
		}
	},
  components: {
    Header,
    Footer
  }
}
</script>
