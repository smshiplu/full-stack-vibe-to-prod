import type { ReactNode } from "react";
import CartCard from "../../../components/CartCard";
import type { cartItemList } from "../../playground/components/StateChallenge";

interface ShoppingCartProps {
  cartItems: cartItemList;
  totalPrice?: ReactNode;
  onIncreaseQty?: (id: string) => void;
  onDecreaseQty?: (id: string) => void;
}

const ShoppingCart: React.FC<ShoppingCartProps> = ({ cartItems, totalPrice, onIncreaseQty, onDecreaseQty } ) => {

  return (
    <div className="relative overflow-x-auto bg-neutral-primary-soft shadow-xs rounded-lg border border-gray-100 mt-10">
      <table className="w-full text-sm text-left rtl:text-right text-body">
        <thead className="text-sm text-body bg-neutral-secondary-soft border-b rounded-base border-default">
            <tr>
                <th scope="col" className="px-6 py-3 font-medium">
                    Product name
                </th>
                <th scope="col" className="px-6 py-3 font-medium">
                    Price
                </th>
                <th scope="col" className="px-6 py-3 font-medium">
                    Quantity
                </th>
                <th scope="col" className="px-6 py-3 font-medium">
                    Total
                </th>
            </tr>
        </thead>
        <tbody>
          { cartItems.length > 0 && cartItems.map((product) => (
            <CartCard 
              key={product.id} 
              item={product} 
              onIncreaseQty={onIncreaseQty}
              onDecreaseQty={onDecreaseQty}
            />
          )) }
          <tr>
            <td colSpan={3} className="px-6 py-4 text-right bg-gray-600 text-lg font-semibold">Grand Total</td>
            <td  className="px-6 py-4 bg-gray-600">${totalPrice}</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default ShoppingCart;