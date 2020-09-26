// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api/

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

const axios = require('axios')

module.exports = function (api) {
  api.loadSource(async actions => {
    await axios.get('https://api.punkapi.com/v2/beers/?per_page=60').then((response) => {
      const collection_beers = actions.addCollection({
        typeName: 'Beers'
      })

      for (const item of response.data) {
        collection_beers.addNode({
          id: item.id,
          name: item.name,
          tagline: item.tagline,
          description: item.description,
          image_url: item.image_url,
          first_brewed: item.first_brewed,
          abv:  item.abv,
          ibu: item.ibu,
          ebc: item.ebc,
          srm: item.srm,
          ingredients: item.ingredients,
        })
      }
    })
  })
}
