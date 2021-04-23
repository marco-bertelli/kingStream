const API_KEY = process.env.API_KEY;

export default {
    fetchTrending: {
        title: 'Trending',
        url: `/trending/all/week?api_key=${API_KEY}&language=it-IT`
    },
    fetchTopRated: {
        title: 'Top Rated',
        url: `/movie/top_rated?api_key=${API_KEY}&language=it-IT`
    },
    fetchActionRated: {
        title: 'Action',
        url: `/discover/movie?api_key=${API_KEY}&with_generes=28`
    },
    fetchCommedyRated: {
        title: 'Commedy',
        url: `/discover/movie?api_key=${API_KEY}&with_generes=35`
    },
    fetchHorrorRated: {
        title: 'Horror',
        url: `/discover/movie?api_key=${API_KEY}&with_generes=27`
    }
  
}