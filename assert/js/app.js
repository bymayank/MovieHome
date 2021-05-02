
const h3 = document.querySelectorAll('.moviename');
const trending = document.querySelector('#trending');
const popular = document.querySelector('#popular');



const getPopular = async()=>{
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
        popular.append(li);
    }
}


const getTrendings = async(time_window)=>{
    const url = `https://api.themoviedb.org/3/trending/all/${time_window}?api_key=3b64ac412725369ae963817a7514e443`;
    const res = await axios.get(url);


    for(let x of res.data.results){
        const li = document.createElement('li');

        let y;
        
        if(x.media_type == "movie"){
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
        }
        else{
            if(x.name.length > 19){
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
            });
        }

        
        
        trending.append(li);
    }
    
}

getTrendings("week");
getPopular();











// ___________________Movie Details________________________________




