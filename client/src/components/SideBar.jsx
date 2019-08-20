import React from 'react'


import s from '../css/SideBar.module.css'


const SideBar = (props) =>{
    return (
        <section id={s.sideBarWr}>
            <div id={s.sideBar}>
                <button onClick={props.createHandle} id={s.create}>Create new hot dog</button>
                <button onClick={props.readHandle} id={s.read}>show hot dogs</button>
                <button onClick={props.updateHandle} id={s.update}>edit hot dog</button>
                <button onClick={props.deleteHandle} id={s.delete}>delete hot dog</button>
            </div>
        </section>
    )
}

export default SideBar