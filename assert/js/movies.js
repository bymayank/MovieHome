
const upcomingMovies = document.querySelector('#upcomingMovies');
const popularMovies = document.querySelector('#popularMovies');
const topRatedMovies = document.querySelector('#topratedMovies');
const nowPlayingMovies = document.querySelector('#nowPlayingMovies');
const details = document.querySelector('#details_container1');




const getUpcomingMovies = async ()=>{

    const url = `https://api.themoviedb.org/3/movie/upcoming?api_key=3b64ac412725369ae963817a7514e443`;

    const res = await axios.get(url);

    console.log(res.data.results);

    for(let x of res.data.results){
        const li = document.createElement('li');

        let y;

        if(x.title.length > 19){
            y = x.title.slice(0,16)+"...";
        }
        else{
            y = x.title;
        }
        

        li.innerHTML = `<a href="./details.html"><div>
            <img src="https://image.tmdb.org/t/p/w500/${x.poster_path}" alt="">
            <h3 class="lead moviename">${y}</h3>
            <h5 class="lead">${x.release_date}</h5>
        </div></a>`;

        li.addEventListener('click',(event)=>{
            sessionStorage.setItem("movie_id",x.id);
        });

        upcomingMovies.append(li);
    }
}

const getTopRatedMovies = async ()=>{

    const url = `https://api.themoviedb.org/3/movie/top_rated?api_key=3b64ac412725369ae963817a7514e443`;

    const res = await axios.get(url);

    for(let x of res.data.results){
        const li = document.createElement('li');

        let y;

        if(x.title.length > 19){
            y = x.title.slice(0,16)+"...";
        }
        else{
            y = x.title;
        }
        
        li.innerHTML = `<a href="./details.html"><div>
            <img src="https://image.tmdb.org/t/p/w500/${x.poster_path}" alt="">
            <h3 class="lead moviename">${y}</h3>
            <h5 class="lead">${x.release_date}</h5>
        </div></a>`;

        li.addEventListener('click',(event)=>{
            sessionStorage.setItem("movie_id",x.id);
        });

        topRatedMovies.append(li);
    }
}

const getPopularMovies = async ()=>{

    const url = `https://api.themoviedb.org/3/movie/popular?api_key=3b64ac412725369ae963817a7514e443`;

    const res = await axios.get(url);

    for(let x of res.data.results){
        const li = document.createElement('li');

        let y;

        if(x.title.length > 19){
            y = x.title.slice(0,16)+"...";
        }
        else{
            y = x.title;
        }
        
        li.innerHTML = `<a href="./details.html"><div>
            <img src="https://image.tmdb.org/t/p/w500/${x.poster_path}" alt="">
            <h3 class="lead moviename">${y}</h3>
            <h5 class="lead">${x.release_date}</h5>
        </div></a>`;

        li.addEventListener('click',(event)=>{
            sessionStorage.setItem("movie_id", x.id);
        })

        popularMovies.append(li);
    }
}

const getNowPlayingMovies = async ()=>{

    const url = `https://api.themoviedb.org/3/movie/now_playing?api_key=3b64ac412725369ae963817a7514e443`;

    const res = await axios.get(url);

    for(let x of res.data.results){
        const li = document.createElement('li');
        let y;

        if(x.title.length > 19){
            y = x.title.slice(0,16)+"...";
        }
        else{
            y = x.title;
        }
        
        li.innerHTML = `<a href="./details.html"><div>
            <img src="https://image.tmdb.org/t/p/w500/${x.poster_path}" alt="">
            <h3 class="lead moviename">${y}</h3>
            <h5 class="lead">${x.release_date}</h5>
        </div></a>`;

        li.addEventListener('click',(event)=>{
            sessionStorage.setItem("movie_id",x.id);
        });

        nowPlayingMovies.append(li);
    }
}



getUpcomingMovies();
getPopularMovies();
getTopRatedMovies();
getNowPlayingMovies();