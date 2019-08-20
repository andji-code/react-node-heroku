import { createStore,combineReducers } from 'redux'


import HotDogsListPage from './redusers/hotDogsListPage';
import SideBar from './redusers/SideBarReduser';


const redusers = combineReducers({
    HotDogsListPage,SideBar
})

const store = createStore(redusers)
window.store = store;

export default store;