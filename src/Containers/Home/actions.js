import {getHome} from '../../reducers';
import {Actions} from 'react-native-router-flux';
import {API_BASE_URL, API_KEY} from '@env';
export const searchMovies = (query) => ({
  type: 'SEARCH_MOVIES',
  payload: {
    request: {
      url: `${API_BASE_URL}s=${query}${API_KEY}`,
    },
  },
});
