import React from 'react'


import s from '../css/HotDogsList.module.css'


const HotDogsList = (props) =>{
    const {hotDogs} =props;
    let c=0;
    const hotDogsList = hotDogs ? hotDogs.length>0? 
        <div id={s.list}>{hotDogs.map((hotDog)=>{
            return(
                <div key={hotDog.id} className={s.hotDogWrapper}>
                    <div className={s.hotDogImg}><img src={hotDog.img} alt={hotDog.name}/></div>
                    <div className={s.hotDogBody}>
                        <div className={s.name}>{hotDog.name}</div>
                        <div className={s.description}>{hotDog.description}</div>
                        <div className={s.info}>
                            <div className={s.ingredients}>{hotDog.ingredients.map((ingredient=>{
                                return (
                                <div className={s.ingredient} key={ingredient.id}>
                                    <div className={s.ingredientName}>{ingredient.name}</div>
                                    <div className={s.ingredientMass}>{ingredient.mass} g.</div>
                                </div>
                                )
                            }))}</div>
                            <div className={s.costPerMass}>
                                <div className={s.mass}>{hotDog.mass}</div>
                                <div className={s.cost}>{hotDog.cost}</div>
                            </div>
                        </div>
                    </div>
                </div>
            );
        })}
        </div>
        : <p>No hot dogs here...</p> :null;
    return (
        <section id ="hotDogsList">
            {hotDogsList}
        </section>
    )
}

export default HotDogsList