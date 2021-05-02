


const getMovieDetails = async (movie_id)=>{
    console.log(movie_id);

    const url = `https://api.themoviedb.org/3/movie/${movie_id}?api_key=3b64ac412725369ae963817a7514e443`;

    const res = await axios.get(url);

    const title = document.querySelector('#title');
    const overview = document.querySelector('#overview');
    const rating = document.querySelector('#rating');
    const creator = document.querySelector('#creator');
    const movie_img = document.querySelector('#movie_img');

    console.log(res.data);

    title.innerText = res.data.original_title;
    overview.innerText = res.data.overview;
    rating.innerText = res.data.popularity;
    movie_img.setAttribute('src',`https://image.tmdb.org/t/p/w500/${res.data.poster_path}`)

    for(let g of res.data.genres){
        const li = document.createElement('li');
        li.innerHTML = `<div>
        <h3 class="lead moviename">${g.name}</h3>
    </div>`;
        
        genres.append(li);
    }

}


const getMovieCast = async (movie_id)=>{
    const cast_container = document.getElementById('cast_container');

    const url = `https://api.themoviedb.org/3/movie/${movie_id}/credits?api_key=3b64ac412725369ae963817a7514e443`;

    const res = await axios.get(url);

    sessionStorage.removeItem("movie_id");

    console.log(res.data);

    for(let c of res.data.cast){
        const li = document.createElement('li');
        let y;

        if(c.character.length > 16){
            y = c.character.slice(0,15)+"..";
        }
        else{
            y = c.character;
        }
        li.innerHTML = `<div>
            <img src="https://image.tmdb.org/t/p/w500/${c.profile_path}" alt="">
            <h3 class="lead moviename">${c.original_name.slice(0,18)}</h3>
            <p class="lead">${y}</p>
        </div>`;

        cast_container.append(li);
    }

}






const getTvDetails = async (tv_id)=>{
    console.log(tv_id);

    const url = `https://api.themoviedb.org/3/tv/${tv_id}?api_key=3b64ac412725369ae963817a7514e443`;

    const res = await axios.get(url);

    console.log(res.data);

    const title = document.querySelector('#title');
    const overview = document.querySelector('#overview');
    const rating = document.querySelector('#rating');
    const creator = document.querySelector('#creator');
    const movie_img = document.querySelector('#movie_img');
    const genres = document.querySelector('#genres');

    title.innerText = res.data.name;
    overview.innerText = res.data.overview;
    rating.innerText = res.data.popularity;
    creator.innerHTML = res.data.created_by[0].name+'<span class="lead" style="float:none">- CREATOR</span>'
    movie_img.setAttribute('src',`https://image.tmdb.org/t/p/w500/${res.data.poster_path}`)

    for(let g of res.data.genres){
        const li = document.createElement('li');
        li.innerHTML = `<div>
        <h3 class="lead moviename">${g.name}</h3>
    </div>`;
        
        genres.append(li);
    }

}

const getTvCast = async (tv_id)=>{
    const cast_container = document.getElementById('cast_container');

    const url = `https://api.themoviedb.org/3/tv/${tv_id}/credits?api_key=3b64ac412725369ae963817a7514e443`;

    sessionStorage.removeItem("tv_id");

    const res = await axios.get(url);

    console.log(res.data);

    for(let c of res.data.cast){
        const li = document.createElement('li');
        let y;

        if(c.character.length > 16){
            y = c.character.slice(0,15)+"..";
        }
        else{
            y = c.character;
        }
        li.innerHTML = `<div>
            <img src="https://image.tmdb.org/t/p/w500/${c.profile_path}" alt="">
            <h3 class="lead moviename">${c.original_name}</h3>
            <p class="lead">${y}</p>
        </div>`;

        cast_container.append(li);
    }

}


let movie_id = sessionStorage.getItem("movie_id");

if(movie_id!=null){
    getMovieDetails(movie_id);
    getMovieCast(movie_id);
}


let tv_id = sessionStorage.getItem("tv_id");
if(tv_id!=null){
    getTvDetails(tv_id);
    getTvCast(tv_id);
}