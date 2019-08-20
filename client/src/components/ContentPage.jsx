import React from 'react'
import { Route } from 'react-router-dom';

import s from '../css/ContentPage.module.css'
import HotDogsListContainer from './ContainerComponents/HotDogsListContainer';



const ContentPage = (props) =>{
    return (
        <main>
           <Route path='/' render={()=><HotDogsListContainer />} />
        </main>
    )   
}

export default ContentPage