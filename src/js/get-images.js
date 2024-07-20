import axios from "axios";
export { getImages };

const API_URL = 'https://pixabay.com/api/';
const KEY = '44993602-d27a6bb35adbaddc31f5b3355';

axios.defaults.baseURL = API_URL;

async function getImages(query, page, perPage) {
    const response = await axios.get('', {
        params: {
            key: KEY,
            q: query,
            image_type: 'photo',
            orientation: 'horizontal',
            safesearch: true,
            page,
            per_page: perPage,
        },
    });
    return response;
}


//////////////////////////////////DRAFTS/////////////////////////////////////////

// key - cheia dvs. unică de acces la API.
// q - valoarea pe care o va introduce utilizatorul.
// image_type - tipul imaginii. Avem nevoie doar de fotografii, așa că setați valoarea photo.
// orientation - orientarea fotografiei. Setați valoarea horizontal.
// safesearch - se filtrează după vârstă. Setați valoarea true.

//axios.defaults.baseURL = 'https://api.example.com';
//https://pixabay.com/api/
// var API_KEY = '44993602-d27a6bb35adbaddc31f5b3355';
// 	var URL = "https://pixabay.com/api/?key="+API_KEY+"&q="+encodeURIComponent('red roses');
// 	$.getJSON(URL, function(data){
// 	if (parseInt(data.totalHits) > 0)
// 	    $.each(data.hits, function(i, hit){ console.log(hit.pageURL); });
// 	else
// 	    console.log('No hits');
// 	});

// import axios from 'axios';
// const getData = async () => {
// 	const response = await axios.get(
// 		`https://famous-quotes4.p.rapidapi.com/random`
// 	);
// };