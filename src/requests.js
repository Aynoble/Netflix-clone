const API_KEY = "0272e43ac1ee59865652d6ae641b512d";
const requests = {
    fetchTrending: `/trending/all/week?api_key=0272e43ac1ee59865652d6ae641b512d`,
    fetchNetflixOriginals: `discover/tv?api_key=0272e43ac1ee59865652d6ae641b512d&with_networks=213`,
    fetchTopRated: `movie/top_rated?api_key=0272e43ac1ee59865652d6ae641b512d&language=en-US`,
    fetchActionMovies: `discover/movie?api_key=0272e43ac1ee59865652d6ae641b512d&with_genres=28`,
    fetchComedyMovies: `discover/movie?api_key=0272e43ac1ee59865652d6ae641b512d&with_genres=35`,
    fetchHorrorMovies: `discover/movie?api_key=0272e43ac1ee59865652d6ae641b512d&with_genres=27`,
    fetchRomanceMovies: `discover/movie?api_key=0272e43ac1ee59865652d6ae641b512d&with_genres=10749`,
    fetchDocumentaries: `discover/movie?api_key=0272e43ac1ee59865652d6ae641b512d&with_genres=99`,
}

export default requests;