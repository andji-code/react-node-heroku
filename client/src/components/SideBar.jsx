import React from 'react'


import s from '../css/SideBar.module.css'


const SideBar = (props) =>{
    return (
        <section id="sideBar">
            <button>Create new hot dog</button>
            <button>show hot dogs</button>
            <button>edit hot dog</button>
            <button>delete hot dog</button>
        </section>
    )
}

export default SideBar