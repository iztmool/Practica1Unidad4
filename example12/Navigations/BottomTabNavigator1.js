import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Inicio from '../Screens/Inicio';
import Consulta from '../Screens/Consulta';
import Listado from '../Navigations/StackNavigator1';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

export default function BottomTabNavigator1(){
    return(
        <Tab.Navigator
            initialRouteName="Inicio"
            tabBarOptions={{
                activeTintColor:"#ffffff",
                inactiveTintColor:"#000000",
                showLabel:true,
                labelStyle:{
                    fontSize:12
                },
                style:{
                    paddingBottom:5,
                    backgroundColor:"#258902"
                }

            }}
        > 
           
            <Tab.Screen
                name="Inicio"
                component={Inicio}
                options={{
                    tabBarIcon:({color})=>(
                        <Ionicons name={"ios-home"} size={20} color={color}/>
                    )
                }}
            
            />
            <Tab.Screen
                name="Listado"
                component={Listado}
                options={{
                    tabBarIcon:({color})=>(
                        <Ionicons name={"md-list"} size={20} color={color}/>
                    )
                }}
            />
            <Tab.Screen
                name="Consulta"
                component={Consulta}
                options={{
                    tabBarIcon:({color})=>(
                        <Ionicons name={"md-search"} size={20} color={color}/>
                    )
                }}
            />
        </Tab.Navigator>
    )
}