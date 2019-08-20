import React,{useEffect} from 'react'
import {connect} from 'react-redux'

import HotDogsList from '../HotDogsList'
import withPreloader from '../../HOCs/WithPreloader';
import { getHotDogs } from '../../redux/api';
// import { setHotDogs } from '../../redux/redusers/hotDogsListPage';
// import { getHotDogs } from '../../DAL/API';


const HotDogsListContainer = (props) =>{
    useEffect(()=>{
        getHotDogs();
    })

    const mstp =(state)=>({
        hotDogs:state.HotDogsListPage.hotDogs,
    })
    const mstp2=(state)=>({isFetching:state.HotDogsListPage.isFetching})
    const MapedHotDogsList= connect(mstp2)(withPreloader(connect(mstp)(HotDogsList)));
    return <MapedHotDogsList />; 
}


export default HotDogsListContainer