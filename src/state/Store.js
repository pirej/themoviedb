import create from 'zustand';

const useMovieData = create(set => ({
  page: 1,
  discover: '',
  popular: '/popular',
  genres: '',
  nextPage: () => set(state => ({ page: state.page + 1 })),
  genAction: () =>
    set(state => ({ genres: (state.genres = '&with_genres=28') })),
  genAdventure: () =>
    set(state => ({ genres: (state.genres = '&with_genres=12') })),
  genAnimation: () =>
    set(state => ({ genres: (state.genres = '&with_genres=16') })),
  genComedy: () =>
    set(state => ({ genres: (state.genres = '&with_genres=35') })),
  genCrime: () =>
    set(state => ({ genres: (state.genres = '&with_genres=80') })),
  genDocumentary: () =>
    set(state => ({ genres: (state.genres = '&with_genres=99') })),
  genDrama: () =>
    set(state => ({ genres: (state.genres = '&with_genres=18') })),
  genFamily: () =>
    set(state => ({ genres: (state.genres = '&with_genres=10751') })),
  genFantasy: () =>
    set(state => ({ genres: (state.genres = '&with_genres=14') })),
  genHistory: () =>
    set(state => ({ genres: (state.genres = '&with_genres=36') })),
  genHorror: () =>
    set(state => ({ genres: (state.genres = '&with_genres=27') })),
  genMusic: () =>
    set(state => ({ genres: (state.genres = '&with_genres=10402') })),
  genMistery: () =>
    set(state => ({ genres: (state.genres = '&with_genres=9648') })),
  genRomance: () =>
    set(state => ({ genres: (state.genres = '&with_genres=10749') })),
  genSciFi: () =>
    set(state => ({ genres: (state.genres = '&with_genres=878') })),
  genTvMovie: () =>
    set(state => ({ genres: (state.genres = '&with_genres=10770') })),
  genThriller: () =>
    set(state => ({ genres: (state.genres = '&with_genres=53') })),
  genWar: () =>
    set(state => ({ genres: (state.genres = '&with_genres=10752') })),
  genWestern: () =>
    set(state => ({ genres: (state.genres = '&with_genres=37') })),
}));

export default useMovieData;
