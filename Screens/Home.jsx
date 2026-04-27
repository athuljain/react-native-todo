import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Text } from "react-native";
import { View } from "react-native";
import Welcome from "./Welcome";
import Logout from "./Logout";
import TodoList from "./Todo/TodoList";
import Entypo from "@expo/vector-icons/Entypo";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import AddTodo from "./Todo/AddTodo";
import Ionicons from '@expo/vector-icons/Ionicons';


const Home = () => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
   screenOptions={{
    // headerShown: false, // Hides the top header
    tabBarActiveTintColor: "white",
    tabBarInactiveTintColor: "#91E3AC",
    tabBarActiveBackgroundColor: "#1D8C30",
    tabBarStyle: {
      backgroundColor: "#095716",
      borderTopWidth: 0, // Removes the subtle line at the top of the bar
      elevation: 5,      // Adds a shadow on Android
    },
    tabBarLabelStyle: {
      fontWeight: '600',
    }
  }}
    >
      <Tab.Screen
        name="Welcome"
        component={Welcome}
        options={{
          tabBarIcon: () => <Entypo name="home" size={24} color="black" />,
        }}
      />
       <Tab.Screen
        name="AddTodo"
        component={AddTodo}
        options={{
          tabBarIcon: () => 
           <Ionicons name="add-circle" size={24} color="black" />
          ,
        }}
      />
      <Tab.Screen
        name="Logout"
        component={Logout}
        options={{
          tabBarIcon: () => 
            <MaterialIcons name="logout" size={24} color="black" />
          ,
        }}
      />
      <Tab.Screen
        name="Todo List"
        component={TodoList}
        options={{
          tabBarIcon: () => 
            <FontAwesome5 name="th-list" size={24} color="black" />
          ,
        }}
      />
    </Tab.Navigator>
  );
};
export default Home;
