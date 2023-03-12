import express from 'express'

const url = 'https://api.vinimini.fdnd.nl'

// https://api.vinimini.fdnd.nl 
// /api/v1/producten
// Maak een nieuwe express app
const app = express()

// Stel in hoe we express gebruiken
app.set('view engine', 'ejs')
app.set('views', './views')
app.use(express.static('public'))

// Routes/path gemaakt voor mijn index | proces | agenda pagina's 
app.get('/', (request, response) => {
  fetchJson(url + '/api/v1/producten').then((data) => {
    // console.log(data)
    response.render('index', data)
  })
})

app.get('/producten', (request, response) => {
  fetchJson(url + '/api/v1/producten').then((data) => {
    response.render('producten', data)
    // console.log(data)
  })
})

app.get('/proces', (request, response) => {
    response.render('proces')
  })
  
app.get('/agenda', (request, response) => {
    response.render('agenda')
  })

  // Stel het poortnummer in en start express
app.set('port', process.env.PORT || 8000)
app.listen(app.get('port'), function () {
  console.log(`Application started on http://localhost:${app.get('port')}`)
})

/**
 * Wraps the fetch api and returns the response body parsed through json
 * @param {*} url the api endpoint to address
 * @returns the json response from the api endpoint
 */
async function fetchJson(url) {
  return await fetch(url)
    .then((response) => response.json())
    .catch((error) => error)
}