import { createNativeStackNavigator } from "@react-navigation/native-stack"
import Home from "./Screens/Home"
import TodoList from "./Screens/Todo/TodoList"
import TodoDetails from "./Screens/Todo/TodoDetails"

const RootRoute=()=>{
    const Stack=createNativeStackNavigator()
    return(
        <>
        <Stack.Navigator screenOptions={{headerShown:false}} >
            <Stack.Screen name="Home" component={Home}/>
            <Stack.Screen name="Todo List" component={TodoList}/>
            <Stack.Screen name="Todo Details" component={TodoDetails}/>
        </Stack.Navigator>
        </>
    )
}
export default RootRoute;