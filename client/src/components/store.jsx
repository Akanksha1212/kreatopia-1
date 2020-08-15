import React, {useState} from 'react'
import './Store.scss'
import Draw from './draw'
import Cart from './cart'
import Order from './order'
import { useEffect } from 'react'

function Store() {
  const [draw , setDraw] = useState({data:[], load:false})
  
  const [form, setForm] = useState(false)

  useEffect(()=>{
    // From backend recieve data from a REST API here 
    // collect the data and change the 'draw' state
    const sampleData = [
      {
          "name": "Star Wars T-shirt",
          "price": 400,
          "preview": "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fs1.thcdn.com%2Fproductimg%2F960%2F960%2F11205024-4944345848496659.jpg&f=1&nofb=1"
      },
      {
          "name": "DC Comics Men's T-shirt",
          "price": 500,
          "preview": "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fs4.thcdn.com%2Fproductimg%2F960%2F960%2F11314296-4034408390275693.jpg&f=1&nofb=1"
      },
      {
        "name": "Star Wars T-shirt",
        "price": 400,
        "preview": "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fs1.thcdn.com%2Fproductimg%2F960%2F960%2F11205024-4944345848496659.jpg&f=1&nofb=1"
    },
    {
        "name": "DC Comics Men's T-shirt",
        "price": 500,
        "preview": "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fs4.thcdn.com%2Fproductimg%2F960%2F960%2F11314296-4034408390275693.jpg&f=1&nofb=1"
    },
    
  
  ]
 
    setDraw({data: sampleData, load: true})
  },[])

  const [cart, setCart] = useState({data:[], total : 0, load:false})

  const addItem = e =>{
    let warn = false
    cart.data.map(item=> {if(item.name === e.name) warn = true})
    if(warn) alert('already in cart')
    else {  
      let newCart = cart.data
      e.quan = 1
      newCart.push(e)
      setCart({data: newCart, total: cart.total+ e.price,  load:true})
    }
  }

  const cartEdit = e =>{
    let newTotal = 0
    e.map(item => newTotal = newTotal + (item.price*item.quan))
    if(e.length == 0) setCart({data: e, total:0, load:false})
    else setCart({data: e, total:newTotal, load:true})
  }

  const orderCart = () =>{
    setForm(true)
  }

  const cancelCart = () =>{
    setForm(false)
  }

  return (
    <>
      <div className='store'>
        <Draw add={addItem} draw={draw} />
        <Cart edit={cartEdit} order={orderCart} cart={cart} />
        {form?<Order data={cart} cancel={cancelCart} /> : null}
      </div>
    </>
  )
}

export default Store;