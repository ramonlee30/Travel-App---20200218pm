const express = require('express')
const cors = require('cors');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const axios = require('axios');
dotenv.config({path: '.env'});

console.log(process.env.GEO_USER)

const app = express()

app.use(express.static('dist'))
app.use(cors());

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

console.log(__dirname)

app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
})

// designates what port the app will listen to for incoming requests
app.listen(4000, function () {
    console.log('Example app listening on port 4000!')
})

app.get('/trip/:location', (req, res) => {
    const location = req.params.location
    console.log(location)

    // Geonames API
    geonamesAPI(location)
        .then(coordenate => Promise.all([darkskyAPI(coordenate), pixabayAPI(location)]))
        .then(([temperature, photo]) => ({temperature, photo}) )
        .then( a => res.send(a))
        .catch(error => {
            console.log(error);
        });
});

darkURL = 'https://api.darksky.net/forecast/9cc39b26dab7e64f21707024b736a60e/37.8267,-122.4233'
darkKEY = '9cc39b26dab7e64f21707024b736a60e'

function darkskyAPI(coordenate) {
    const darkURL = 'https://api.darksky.net/forecast/'
    const darkKEY = process.env.DARKAPI_KEY
    return axios.get(darkURL+darkKEY+'/'+coordenate.lat+','+coordenate.lng)
        .then(response => response.data.currently.temperature )
}

pixaURL = 'https://pixabay.com/api/'
pixaKEY = '15285265-dff6383a87066df94ac442864'

function pixabayAPI(location) {
    const pixaURL = 'https://pixabay.com/api/?key='
    const pixaKEY = process.env.PIXA_KEY
    const pixaLeft = '&image_type=photo&category=travel'
    return axios.get(pixaURL+pixaKEY+'&q='+location+pixaLeft)
        .then( response =>  response.data.hits[0].webformatURL )
        .catch(error => {
            console.log(error);
        });
}

function geonamesAPI(location){
    const geoURL = 'http://api.geonames.org/postalCodeSearchJSON?placename='
    const geoMore = '&username='
    const geoUser = process.env.GEO_USER
    return axios.get(geoURL+location+geoMore+geoUser)
        .then (response => response.data.postalCodes[0])
}