import create from 'zustand';

const useMovieData = create(set => ({
  page: 1,
  discover: '',
  popular: '/popular',
  genres: '',
  nextPage: () => set(state => ({ page: state.page + 1 })),
}));

export default useMovieData;
