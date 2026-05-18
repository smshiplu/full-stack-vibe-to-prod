
interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
}

interface CartCardProps {
  item: CartItem;
  onIncreaseQty?: (id: string) => void;
  onDecreaseQty?: (id: string) => void;
}


const CartCard: React.FC<CartCardProps> = ({ item, onIncreaseQty, onDecreaseQty }) => {
  return (
    <tr className="bg-neutral-primary border-b border-default">
      <th scope="row" className="px-6 py-4 font-medium text-heading whitespace-nowrap">
         {item.name}
      </th>
      <td className="px-6 py-4">
         ${item?.price}
      </td>
      <td className="px-6 py-4">
          <div className="flex items-center gap-4">
            <button 
              className="w-10 h-6 p-4 bg-blue-500 hover:bg-blue-600 rounded-lg text-xl text-center font-extrabold flex items-center justify-center cursor-pointer transition-colors"
              onClick={() => onDecreaseQty?.(item.id)}
            >-</button>
            <input 
              type="text"
              name="quantity"
              className="border rounded-lg p-2 w-10 h-8 text-center"
              value={item.quantity < 1 ? 1 : item.quantity }
              readOnly
            />
            <button 
              className="w-10 h-6 p-4 bg-blue-500 hover:bg-blue-600 rounded-lg text-xl text-center font-extrabold flex items-center justify-center cursor-pointer transition-colors"
              onClick={() => onIncreaseQty?.(item.id)}
            >+</button>
          </div>
      </td>
      <td className="px-6 py-4">
        ${ item.quantity < 1 ? item.price : item.quantity * item.price }
      </td>
    </tr>
  )
}

export default CartCard;
