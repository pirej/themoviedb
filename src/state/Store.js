import create from 'zustand';

const useMovieData = create(set => ({
  page: 1,
  nextPage: () => set(state => ({ page: state.page + 1 })),
}));

export default useMovieData;
