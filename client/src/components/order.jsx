import React from 'react'

export default function Order(props) {
    const orderStr = []
    props.data.data.map(item=>{
        let cartItem = `${item.quan} ${item.name}, `
        orderStr.push(cartItem)
    })

    const placeOrder = e =>{
        // PUT Request here 

        console.log(orderStr, props.data.total)
    }

    return (
        <div className='order-span' style={{animation:'fade 0.4s'}} >
            <p className='close-icon' onClick={props.cancel}>X</p>
            <div className='order-form'>
                <h1 className='cart-head'>Place Order</h1>
                <input type="text" className='inp' placeholder="Name"/>
                <input type="text" className='inp' placeholder="Email"/>
                <input type="text" className='inp' placeholder="Address"/>
                <input type="number" className='inp' placeholder="Phone"/>
                <p className='order-det'>Order: {orderStr} </p>
                <p className='order-det'>Total: {props.data.total}</p>
                <button className='order' onClick={() => placeOrder()}>Order</button>
            </div>
        </div>
    )
}