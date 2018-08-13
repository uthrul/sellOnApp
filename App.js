import { Navigation } from 'react-native-navigation';

import Login from './src/components/views/Login';
import Home from './src/components/views/Home';
import AddPost from './src/components/views/Admin/AddPost';

Navigation.registerComponent("sellOnApp.Login",()=>Login);
Navigation.registerComponent("sellOnApp.Home",()=>Home);
Navigation.registerComponent("sellOnApp.AddPost",()=>AddPost);

export default () =>  Navigation.startSingleScreenApp({
  screen:{
    screen:"sellOnApp.Login",
    title:"Login",
    navigatorStyle:{
      navBarHidden:true
    }
  }
})
