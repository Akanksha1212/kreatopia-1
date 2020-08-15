import React, { useState } from 'react';
import SlidingPanel from 'react-sliding-side-panel';
import {
    Button,
    Typography,
    IconButton,
    AppBar,
    Toolbar,
  } from "@material-ui/core";
  
  import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
export default function Cart(props){
    const [openPanel, setOpenPanel] = useState(false);
    const cart = props.cart.data

    const maxItem = e => {
        cart.map(item => {
            if(item.name === e.name){item.quan = item.quan+1}
        })  
        props.edit(cart)
    }

    const minItem = e =>{
        let newCart = []
        if(e.quan === 1) {newCart = cart.filter(item => {if(item.name !== e.name) return item})
        props.edit(newCart)}
        else {cart.map(item => {if(item.name === e.name){item.quan = item.quan-1}})
        props.edit(cart)}
        
    }

    return(
        <>
        <SlidingPanel
      type={'right'}
      isOpen={openPanel}
      size={30}
    >
      <div>
      <div className='cart'>
            <h1 className='cart-head'>Your Cart</h1>
            <div className='cart-lib'></div>
            {props.cart.load? props.cart.data.map(item=> {return( 
                <>
            <div className='cart-item' style={{animation:'fade 0.4s'}}>
                <p>{item.name}</p>
                <p>{item.price}</p>
                <div className='cart-cont'>
                <button onClick={()=>minItem(item)} className='cont'>-</button>
                <p className='count'>{item.quan}</p>
                <button className='cont' onClick={()=> maxItem(item)}>+</button>
                </div>
            </div>
            </>
            )}
            ): 'Cart is Empty'}

            {props.cart.load? 
            <>
            <p className='total'>Total : {props.cart.total}</p>
            <button onClick={props.order} className='order' style={{animation:'fade 0.4s'}}>Order</button>
            </>
            :null}
             <button onClick={() => setOpenPanel(false)}>close</button>
        </div>
      </div>
    </SlidingPanel>
    <div>
      <button onClick={() => setOpenPanel(true)}>Open</button>
    </div>
        </>
    )
}
 