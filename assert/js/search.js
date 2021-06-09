
const ul = document.querySelector('ul');
const title = document.getElementById('title');


const searchResult = async(name)=>{

    const search_url = `https://api.themoviedb.org/3/search/multi?api_key=3b64ac412725369ae963817a7514e443&query=${name}&page=1`
    const searchResponse = await axios.get(search_url);

    title.innerText = name.toUpperCase();

    if(searchResponse.data.results.length == 0){
        const p = document.querySelector('#para');
        p.innerText = "No Movies or TV-Show exist with this name";
    }


    console.log(searchResponse.data.results);

    for(let x of searchResponse.data.results){
        const li = document.createElement('li');

        if(x.media_type == "movie"){
            li.innerHTML = `<a href="./details.html"><div>
                <img src="https://image.tmdb.org/t/p/w500/${x.poster_path}" alt="">
                <h3 class="lead moviename">${x.original_title.substring(0,16)}</h3>
                <h5 class="lead">${x.release_date}</h5>
            </div></a>`;
        }
        else{
            li.innerHTML = `<a href="./details.html"><div>
                <img src="https://image.tmdb.org/t/p/w500/${x.poster_path}" alt="">
                <h3 class="lead moviename">${x.original_name.substring(0,16)}</h3>
                <h5 class="lead">${x.first_air_date}</h5>
            </div></a>`;
        }

        li.addEventListener('click',()=>{
            if(x.media_type == "movie"){
                sessionStorage.setItem("movie_id",x.id);
            }
            else{
                sessionStorage.setItem("tv_id",x.id);
            }
        })

        ul.append(li);
    }
}



let names = sessionStorage.getItem("name");

if(names != null){
    searchResult(names);
}
