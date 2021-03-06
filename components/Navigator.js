import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import MyTabs from './MainScreen';
import Add from '../components/AddMedicine/Add';
import AddNewMedicine from '../components/AddMedicine/AddNewMedicine';
import HistoryPage from '../components/History/HistoryPage';
import History  from '../components/History/History';
import HistoryList from '../components/History/HistoryList'
import HistoryItem from '../components/History/HistoryItem'
import MedicineList from './History/MedicineList';
import TodayMedicine from './TodayMedicine/TodayMedicine'
const Stack = createStackNavigator();

function Navigator() {
    return (
        <Stack.Navigator headerMode='none' initialRouteName="My Tab">
            <Stack.Screen name="My Tab" component={MyTabs}/>
            <Stack.Screen name="Add" component={Add} />
            <Stack.Screen name="AddNewMedicine" component={AddNewMedicine}/>
            <Stack.Screen name="History" component={History} />
            <Stack.Screen name="History Page" component={HistoryPage}/>
            <Stack.Screen name="History List" component={HistoryList}/>
            <Stack.Screen name="Medicine List" component={MedicineList}/>
            <Stack.Screen name="HistoryItem" component={HistoryItem}/>
            <Stack.Screen name="TodayMedicine" component={TodayMedicine}/>            
        </Stack.Navigator> 
    )
}

export default Navigator;