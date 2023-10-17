import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/HomeScreen";
import ProfileScreen from "../screens/ProfileScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { Entypo } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import PlaceScreen from "../screens/PlaceScreen";
import MovieScreen from "../screens/MovieScreen";

const ProfileStack = createNativeStackNavigator();
const HomeStack = createNativeStackNavigator();

const HomeStackScreen = () => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="HomeScreen" component={HomeScreen} options={{title:""}}/>
      <HomeStack.Screen name="PlaceScreen" component={PlaceScreen} />
      <HomeStack.Screen name="MovieScreen" component={MovieScreen} options={{title:""}}/>
    </HomeStack.Navigator>
  );
};

const ProfileStackScreen = () => {
  return (
    <ProfileStack.Navigator>
      <ProfileStack.Screen name="ProfileScreen" component={ProfileScreen}/>
    </ProfileStack.Navigator>
  );
};

const Tab = createBottomTabNavigator();

 const Navigation = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator 
      screenOptions={{
      tabBarStyle: {borderWidth:1,borderRadius:10,borderColor:"#d6d4d4"},
    }}>
        <Tab.Screen
          name="Home"
          component={HomeStackScreen}
          options={{
            tabBarShowLabel:false,
            headerShown: false,
            tabBarIcon:({focused})=>(
                focused ? (<Entypo name="home" size={26} color="#004F98" />) : (<AntDesign name="home" size={26} color="#004F98" />)
            )
          }}
        />
<Tab.Screen
          name="Profile"
          component={ProfileStackScreen}
          options={{
            tabBarShowLabel:false,
            headerShown: false,
            tabBarIcon:({focused})=>(
                focused ? (<FontAwesome name="user" size={26} color="#004F98" />) : (<FontAwesome name="user-o" size={26} color="#004F98" />)
            )
            
          }}
          
        />

        
      </Tab.Navigator>
    </NavigationContainer>
  );
};



export default Navigation
