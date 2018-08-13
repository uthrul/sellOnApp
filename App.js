import { Navigation } from 'react-native-navigation';
import ConfigureStore from './src/components/Store/config';
import { Provider} from 'react-redux';

import Login from './src/components/views/Login';
import Home from './src/components/views/Home';
import AddPost from './src/components/views/Admin/AddPost';

const store = ConfigureStore();

Navigation.registerComponent(
  "sellOnApp.Login",
  ()=>
  Login,
  store,
  Provider
);

Navigation.registerComponent(
  "sellOnApp.Home",
  ()=>
  Home,
  store,
  Provider
);

Navigation.registerComponent(
  "sellOnApp.AddPost",
  ()=>
  AddPost,
  store,
  Provider
);

export default () =>  Navigation.startSingleScreenApp({
  screen:{
    screen:"sellOnApp.Login",
    title:"Login",
    navigatorStyle:{
      navBarHidden:true
    }
  }
})
