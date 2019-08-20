import React from 'react'


import SideBar from '../SideBar';
import { addHotDog, deleteHotDog } from '../../redux/api';
import { connect } from 'react-redux';
import {dataIsFetching,dataFetched} from '../../redux/redusers/SideBarReduser';
import withPreloader from '../../HOCs/WithPreloader';


const SideBarContainer = (props) =>{
    const createHandle=()=>{
        addHotDog();
    };
    const readHandle=()=>{};
    const updateHandle=()=>{};
    const deleteHandle=()=>{
        deleteHotDog();
    };
    
    return <SideBar 
        createHandle={createHandle}
        readHandle={readHandle}
        updateHandle={updateHandle}
        deleteHandle={deleteHandle}
        />
}

export default SideBarContainer