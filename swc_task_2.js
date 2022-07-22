const API_KEY = 'api_key=a23dee33cad2017b026abeabaf09bcc9';
const BASE_URL = 'https://api.themoviedb.org/3';
const API_URL = BASE_URL +'/discover/movie?sort_by=popularity.desc&' + API_KEY;
const IMG_URL = 'https://image.tmbd.org/t/p/w500';
const search_URL = BASE_URL + '/search/movie?' + API_KEY ;


const cards = document.getElementById('cards')
    fetch(API_URL).then(res=>res.json())
.then(data=>{
    const movele=data.results;
    let data1='';
    movele.forEach(movie=>{
        
        data1+=`<div class="card">
        <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" class="images">
        <p class="title ">${movie.title}</p>
        </div>`
       cards.innerHTML = data1;
    });
    
});
