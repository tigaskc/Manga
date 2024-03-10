const axios = require('axios');
const cheerio = require('cheerio');

async function obterUltimoCapitulo() {
    try {
        const response = await axios.get('https://ww.onepunchmanmangas.com/?2024-03-05#google_vignette');
        const $ = cheerio.load(response.data);
        const ultimoCapitulo = $('.post-title > a').first().text().trim();
        console.log("Último capítulo de One Punch Man:", ultimoCapitulo);
    } catch (error) {
        console.error('Ocorreu um erro:', error);
    }
}

obterUltimoCapitulo();
