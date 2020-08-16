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
          "name": "New Art Poster",
          "price": 8.5,
          "preview": "https://media.discordapp.net/attachments/509189498484293632/744369007662071901/EcoYZGJUwAAHveh.jpeg"
      },
      {
          "name": "Fantasy Digital Art",
          "price": 8,
          "preview": "https://media.discordapp.net/attachments/536702581976727562/712848389837946910/6c2d32d6729f384be8474da650b02af8.png"
      },
      {
        "name": "Illusion Art Zine",
        "price": 12,
        "preview": "https://media.discordapp.net/attachments/509189498484293632/744368112400466061/104717932_1452242011626136_679598100740196536_n.jpg"
    },
    {
        "name": "Superhero T-shirt",
        "price": 10,
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
      <div className='store' style={{ height: "100vh"}}>
        <Draw add={addItem} draw={draw} />
        <Cart edit={cartEdit} order={orderCart} cart={cart} />
        {form?<Order data={cart} cancel={cancelCart} /> : null}
      </div>
    </>
  )
}

export default Store;