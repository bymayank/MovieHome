


const popularShows = document.querySelector('#popular_shows');
const onTheAirShows = document.querySelector('#on_the_air_shows');
const topRatedShows = document.querySelector('#toprated_shows');
const airingToday = document.querySelector('#airing_today');


const getTopRatedShows = async ()=>{
    const url = "https://api.themoviedb.org/3/tv/top_rated?api_key=3b64ac412725369ae963817a7514e443";

    const res = await axios.get(url);

    for(let x of res.data.results){
        const li = document.createElement('li');

        let y;

        if(x.name.length >= 19){
            y = x.name.slice(0,16)+"...";
        }
        else{
            y = x.name;
        }
        
        li.innerHTML = `<a href="./details.html"><div>
            <img src="https://image.tmdb.org/t/p/w500/${x.poster_path}" alt="">
            <h3 class="lead moviename">${y}</h3>
            <h5 class="lead">${x.first_air_date}</h5>
        </div></a>`;

        li.addEventListener('click',(event)=>{
            sessionStorage.setItem("tv_id",x.id);
        })

        topRatedShows.append(li);
    }
}

const getAiringTodayShows = async ()=>{
    const url = "https://api.themoviedb.org/3/tv/airing_today?api_key=3b64ac412725369ae963817a7514e443";

    const res = await axios.get(url);

    console.log(res);

    for(let x of res.data.results){
        const li = document.createElement('li');
        
        let y;

        if(x.name.length >= 19){
            y = x.name.slice(0,16)+"...";
        }
        else{
            y = x.name;
        }
        
        li.innerHTML = `<a href="./details.html"><div>
            <img src="https://image.tmdb.org/t/p/w500/${x.poster_path}" alt="">
            <h3 class="lead moviename">${y}</h3>
            <h5 class="lead">${x.first_air_date}</h5>
        </div></a>`;

        li.addEventListener('click',(event)=>{
            sessionStorage.setItem("tv_id",x.id);
        })

        airingToday.append(li);
    }
}

const getPopularShows = async ()=>{
    const url = "https://api.themoviedb.org/3/tv/popular?api_key=3b64ac412725369ae963817a7514e443";

    const res = await axios.get(url);

    for(let x of res.data.results){
        const li = document.createElement('li');
        
        let y;

        if(x.name.length >= 19){
            y = x.name.slice(0,16)+"...";
        }
        else{
            y = x.name;
        }
        
        li.innerHTML = `<a href="./details.html"><div>
            <img src="https://image.tmdb.org/t/p/w500/${x.poster_path}" alt="">
            <h3 class="lead moviename">${y}</h3>
            <h5 class="lead">${x.first_air_date}</h5>
        </div></a>`;

        li.addEventListener('click',(event)=>{
            sessionStorage.setItem("tv_id",x.id);
        })

        popularShows.append(li);
    }
}

const getOnTheAirShows = async ()=>{
    const url = "https://api.themoviedb.org/3/tv/on_the_air?api_key=3b64ac412725369ae963817a7514e443";

    const res = await axios.get(url);


    for(let x of res.data.results){
        const li = document.createElement('li');
        
        let y;

        if(x.name.length >= 19){
            y = x.name.slice(0,16)+"...";
        }
        else{
            y = x.name;
        }
        
        li.innerHTML = `<a href="./details.html"><div>
            <img src="https://image.tmdb.org/t/p/w500/${x.poster_path}" alt="">
            <h3 class="lead moviename">${y}</h3>
            <h5 class="lead">${x.first_air_date}</h5>
        </div></a>`;

        li.addEventListener('click',(event)=>{
            sessionStorage.setItem("tv_id",x.id);
        })

        onTheAirShows.append(li);
    }
}



getOnTheAirShows();
getTopRatedShows();
getPopularShows();
getAiringTodayShows();
