import axios from 'axios'

const base_url = "https://api.themoviedb.org/3/discover/" /*movie?api_key="+import.meta.env.VITE_TMDB_API_KEY*/ 
const urlGenres=`https://api.themoviedb.org/3/genre/` //${type}/list?api_key=${import.meta.env.VITE_TMDB_API_KEY}`
const urlSearch=`https://api.themoviedb.org/3/search/` //${type}?api_key=${import.meta.env.VITE_TMDB_API_KEY}&query=${searchText}&page=${page}`




export const getData = async ({queryKey}) => {
    let url = base_url+queryKey[1] + "?api_key="+import.meta.env.VITE_TMDB_API_KEY+'&page='+queryKey[2]
    if(queryKey[3].length != 0){
        url +='&with_genres='+queryKey[3].join(",")
    }
    console.log(url);
    
    const resp = await axios.get(url)
    return resp.data
}

export const getGenres = async ({queryKey}) => {
    const url = urlGenres+queryKey[1] + "/list?api_key="+import.meta.env.VITE_TMDB_API_KEY
    console.log(url);
    const resp = await axios.get(url)
    return resp.data

}
export const getSearchData = async ({queryKey}) => {
    const url = `${urlSearch}${queryKey[1]}?api_key=${import.meta.env.VITE_TMDB_API_KEY}&query=${queryKey[2]}&page=${queryKey[3]}`
    console.log(url);
    const resp = await axios.get(url)
    return resp.data
}

export const img_300='https://image.tmdb.org/t/p/w300';
export const img_500='https://image.tmdb.org/t/p/w500';
export const noImg ='https://www.movienewz.com/img/films/poster-holder.jpg'

export const getDetailsData = async ({queryKey}) => {
    console.log(queryKey[1])
    const resp = await axios.get(queryKey[1])
    return resp.data
}