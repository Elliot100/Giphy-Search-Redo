import * as APIUtil from '../util/api_util';
export const RECEIVE_SEARCH_GIPHYS = "RECEIVE_SEARCH_GIPHYS";

export const fetchGiphysSearch = searchTerm => dispatch => {
  return APIUtil.fetchGiphysSearch(searchTerm).then(giphys => dispatch(receiveSearchGiphys(giphys.data)))
};


export const receiveSearchGiphys = giphys => {
  return {
    type: RECEIVE_SEARCH_GIPHYS,
    giphys
  };
};

// window.receiveSearchGiphys = receiveSearchGiphys;
// // window.fetchGiphysSearch = fetchGiphysSearch;