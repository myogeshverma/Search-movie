import {getDetail} from '../../reducers';
import {Actions} from 'react-native-router-flux';
import {API_BASE_URL, API_KEY} from '@env';
export const moviesDetail = (imdbID) => ({
  type: 'MOVIES_DETAIL',
  payload: {
    request: {
      url: `${API_BASE_URL}i=${imdbID}${API_KEY}`,
    },
  },
});
