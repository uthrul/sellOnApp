import {Navigation} from 'react-native-navigation';

import FalseIcon from '../../../assets/images/circle.png';
const LoadTabs = () => {
    Navigation.startTabBasedApp({
        tabs:[
            {
                screen:"sellOnApp.Home",
                label:"Home",
                title:"Home",
                icon:FalseIcon
            },
            {
                screen:"sellOnApp.AddPost",
                label:"Sell On",
                title:"Sell On",
                icon:FalseIcon
            }
        ]
    })
}

export default LoadTabs;