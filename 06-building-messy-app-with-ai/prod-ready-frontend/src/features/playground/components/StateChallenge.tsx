import { useState } from "react";
import ShoppingCart from "../../shopping-cart/components/ShoppingCart";

interface CartItem {
  id: string,
  name: string,
  price: number,
  quantity: number
}

export type cartItemList = CartItem[];

export default function StateChallenge() {
  const [cartItems, setCartItems] = useState<cartItemList>([
    { id: "1", name: "Apple MacBook Pro 17", price: 2999, quantity: 1 },
    { id: "2", name: "Microsoft Surface Pro", price: 1999, quantity: 1 },
  ]);

  const totalPrice = cartItems.reduce((acc: number, current: CartItem) => {
    return acc + ((current.quantity < 1 ? 1 : current.quantity) * current.price);
  }, 0);
  
  const handleIncreaseQty = (id: string) => {
    const updatedCartItems = cartItems.map( (product) => {
      if(product.id === id) {
        return { ...product, quantity: product.quantity + 1 }
      }
      return product;
    })
    setCartItems(updatedCartItems);
  }
  
  const handleDecreaseQty = (id: string) => {
    const updatedCartItems = cartItems.map((product) => {
      if(product.id === id) {
        return { ...product, quantity:  product.quantity <= 1 ? 1 : product.quantity - 1 }
      } 
      return product;
    });
    setCartItems(updatedCartItems);    
  }

  return (
    <>
      <h2 className="text-2xl font-bold mt-10 ">Shopping Cart</h2>
      <ShoppingCart 
        cartItems={cartItems}
        totalPrice={totalPrice}
        onIncreaseQty={handleIncreaseQty}
        onDecreaseQty={handleDecreaseQty}
      />
    </>

  )
}
