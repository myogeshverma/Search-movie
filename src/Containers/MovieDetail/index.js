import MovieDetail from './MovieDetail';
import * as actions from './actions';
import {connect} from 'react-redux';
import {getDetail} from '../../reducers';

const mapStateToProps = (state, props) => {
  return {
    ...getDetail(state),
  };
};

const mapDispatchToProps = {
  ...actions,
};

export default connect(mapStateToProps, mapDispatchToProps)(MovieDetail);
