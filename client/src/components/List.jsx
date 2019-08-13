import React,{useState,useEffect} from 'react'

const List = (props) =>{
    const [list,setList]=useState(null);
    const getList = async() => {
        const res = await fetch('/api/getList');
        const body = await res.json();
        setList( body);
    }
    useEffect(()=>{
        getList();
    })

    let c=0;
    const items = list?list.map((item)=>
        <p>it is {++c} item: {item}</p>
    )
    :<p>Empty List</p>

    return (
        <div>
            {items}
        </div>
    )
}

export default List