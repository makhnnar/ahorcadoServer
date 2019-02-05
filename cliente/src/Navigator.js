import {
    createNavigator,
    SwitchRouter,
    getActiveChildNavigationOptions
  } from "@react-navigation/core";
  
  
  import Loading from './loadingview/Loading';
  import GameView from './gameview/main/GameView';
  import Inicio from './gameview/setwords/Inicio';
  import Login from './views/login/Login.js';
  import Alone from './views/alone/Alone.js';
  import Forgot from './views/forgot/Forgot.js';
  import Signup from './views/signup/Signup.js';
  import Wellcome from './views/wellcome/Wellcome.js';
  import Vs from './views/vs/Vs.js';

  import AppView from "./AppView";
  //import SidebarView from "./SidebarView";
  
  /*const Docs = createNavigator(
    SidebarView,
    SwitchRouter({
      DocHome,
      DocA,
      DocB
    }),
    {
      navigationOptions: ({ navigation, screenProps }) => {
        const options = getActiveChildNavigationOptions(navigation, screenProps);
        return { title: options.title };
      }
    }
  );
  Docs.path = "docs";*/
  
  const AppNavigator = createNavigator(
    AppView,
    SwitchRouter({
      Inicio,
      GameView,
      Loading
    }),
    {}
  );
  
  export default AppNavigator;
  