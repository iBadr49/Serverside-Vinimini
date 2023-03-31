> _Fork_ deze leertaak en ga aan de slag. Onderstaande outline ga je gedurende deze taak in jouw eigen GitHub omgeving uitwerken. De instructie vind je in: [docs/INSTRUCTIONS.md](docs/INSTRUCTIONS.md)

# Producten Pagina
<img width="100%" alt="Scherm­afbeelding 2023-03-31 om 23 22 43" src="https://user-images.githubusercontent.com/112857932/229237699-2eb38db9-f563-4a2e-a517-4fb3f77a1cb8.png">



## 📚 Inhoudsopgave

  * [Beschrijving](#beschrijving)
  * [Kenmerken](#kenmerken)
  * [Installatie](#installatie)
  * [Bronnen](#bronnen)
  * [Licentie](#licentie)

## Beschrijving
Ik heb met een REST API een product pagina gemaakt voor mijn opdrachtgever Vinimini. Mijn userstory kan je hieronder lezen:
- Als ouder wil ik een overzicht zien van alle voedingssupplementen producten, zodat ik kan achterhalen of er een geschikt product voor mijn Vini Mini bij zit.

Vinimini is een start up en is opgericht door twee moeders, Vinimini verkoopt producten om vroegtijdig allergenen te voorkomen. Vinimini wil in de toekomst hun assortiment verbreiden met meer allergenen en ze willen doorgroeien in heel Europa.


## Kenmerken
Om dit producten pagina te kunnen bouwen heb ik gebruik gemaakt van ``` EJS ``` | ```Nodejs```| ```Express``` | ```REST API``` | ```Css``` .. zie hieronder:
- **Node.js** is een omgeving waarmee ontwikkelaars snelle en schaalbare webtoepassingen kunnen bouwen met behulp van JavaScript, zorgt ook dat de code op serverside loopt inplaats van clientside.

```js
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
```

- **Express** is een framework voor node.js en maakt het eenvoudiger voor ontwikkelaars om webapplicaties te maken met Node.js.

```js
import express from 'express'

const url = 'https://api.vinimini.fdnd.nl'

// Maak een nieuwe express app
const app = express()

// Stel in hoe we express gebruiken
app.set('view engine', 'ejs')
app.set('views', './views')
app.use(express.static('public'))
```

- **Ejs** staat voor Embedded JavaScript en zorgt dat functies van Js in het html kunnen geschreven worden.

```html
<H1 class="pageTitel">Producten</H1>
<!-- alles hieronder behalve de image komt uit de vinimini APi -->
<!-- For Each loop "Producten" -->
<section class="productContainer">
  <% producten.forEach(product=> { %>
  <article>
    <!-- Product Categorie titel -->
    <h2><%= product.categorie.titel %></h2>
    <a>
      <!-- For nu heb ik een image gebruikt voor alle producten later ga ik dat veranderen -->
      <img
        src="assets/productImage.jpg"
        alt="productImage"
        class="productImage"
    /></a>
    <!-- Product titel&prijs gehaald -->
    <p><%= product.titel %></p>
    $ <%= product.prijs %>
  </article>
  <% }) %>
```

- Mijn product pagina heb ik met een ``` grid ``` gemaakt en is ook responsive. **Zie** ``` Css ``` hieronder:

```css
/* --- Product pagina --- */

.productContainer{
  display: grid;
  --columns: 1;
  grid-template-columns: repeat(var(--columns), 1fr);
  text-align: center;
  border-radius: 10px;
  box-shadow: 2px 2px 20px var(--lightGreen);
  margin: 20px;
  padding: 20px;
}

/*---- MediaQuery -- RESPONSIVE!! ---- */
@media all and (min-width: 500px) {
  .productContainer{
    --columns: 2;
  }
}
@media all and (min-width: 700px) {
  .productContainer{
    --columns: 3;
  }
}
@media all and (min-width: 1024px) {
  .productContainer{
    --columns: 4;
  }
}

.productImage {
  width: 40%;
  height: auto;
}
```

## Installatie
Ga eerst naar nodejs.org en installeer de Node ontwikkelomgeving. Voor dit project heb ik gebruik gemaakt van 18.14.0 LTS, download de benodigde bestanden en doorloop het installatieproces. Daarna open Visual Studio Code - terminal en installeer Node doormiddel van het commando npm innit, voer hierna npm install uit, om de pagina te open start je een server op door middel van npm start en als de server weer gesloten moet worden kan je control + c / ^c gebruiken op mac.

## Bronnen
- Les stof | Workshops
- Ju5tu5 voorbeeld | https://github.com/ju5tu5/server-side-rendering
- Vinimini REST API | https://api.vinimini.fdnd.nl/docs/producten

## Licentie

This project is licensed under the terms of the [MIT license](./LICENSE).
