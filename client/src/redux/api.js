import store from './store';
import dal from '../DAL/dal';
import { setHotDogs,changeFetching } from './redusers/hotDogsListPage';

const getHotDogs=async()=>{
    store.dispatch(changeFetching(true));
    const hotDogs = await dal.getHotDogs().then(res=>res.data);
    store.dispatch(setHotDogs(hotDogs));
}

const addHotDog=async()=>{
    store.dispatch(changeFetching(true));
    const postRes = await dal.addHotDog();
    getHotDogs();
}

const deleteHotDog = async()=>{
    store.dispatch(changeFetching(true));
    const postRes = await dal.deleteHotDog();
    getHotDogs();
}


export {getHotDogs,addHotDog,deleteHotDog};
