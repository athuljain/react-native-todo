import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { Text } from "react-native"
import { View } from "react-native"
import Welcome from "./Welcome"
import Logout from "./Logout"
import TodoList from "./Todo/TodoList"

const Home=()=>{
    const Tab=createBottomTabNavigator()
    return(
       <Tab.Navigator>
        <Tab.Screen name="Welcome" component={Welcome}/>
        <Tab.Screen name="Logout" component={Logout}/>
        <Tab.Screen name="Todo List" component={TodoList}/>
       </Tab.Navigator>
    )
}
export default Home;