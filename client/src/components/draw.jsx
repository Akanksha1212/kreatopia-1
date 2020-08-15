import React from 'react'

export default function Draw(props){
    return(
        <>
        <div className='drawer'>
            <p className='head'>Shop</p>
            <div className='draw'>
            {props.draw.load? props.draw.data.map(item => {
                return(<div className='item'>
                <img src={item.preview} className='item-image'/>
                <h2 className='item-name'>{item.name}</h2>
                <p className='item-price'>$ {item.price}/- </p>
                <button onClick={()=>{props.add(item)}} className='add-cart'>Add to Cart</button>
            </div>
            )}): 'Loading'}
            </div>
        </div>
        </>
    )
}