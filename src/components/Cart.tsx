interface Prods {
  items: string[];
  onClear: () => void;
  onDelete: (item: string) => void;
}

const Cart = ({ items, onClear, onDelete }: Prods) => {
  return (
    <>
      <div>Cart</div>
      <ul>
        {items.map((item) => (
          <li key={item}>item <button onClick={() => onDelete(item)}>x</button></li>
        ))}
      </ul>
      <button onClick={onClear}>Clear</button>
    </>
  );
};

export default Cart;
