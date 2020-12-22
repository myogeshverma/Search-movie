import React from 'react';
import {Actions, Router, Scene} from 'react-native-router-flux';
import {Provider, connect} from 'react-redux';
import configureStore from './store/configureStore';
import Home from './Containers/Home';
import MovieDetail from './Containers/MovieDetail';


const ConnectedRouter = connect()(Router);
const store = configureStore();
const Scenes = Actions.create(
  <Scene key="root">
    <Scene
      key="home"
      component={Home}
      title="Movies"
      initial={true}
      hideNavBar={true}
    />
    <Scene key="movieDetail" component={MovieDetail} />
  </Scene>,
);
const App = () => {
  return (
    <Provider store={store}>
      <ConnectedRouter scenes={Scenes} />
    </Provider>
  );
};

export default App;
