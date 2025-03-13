import { useState } from "react";
import Cart from "./components/Cart";
import NavBar from "./components/NavBar";

const App = () => {
  const [items, setItems] = useState(["Product1", "Product2"]);
  const handleClear = () => {
    setItems([]);
  };
  const handleDelete = () => {
    console.log("Delete current item");
  };
  return (
    <>
      <NavBar itemCount={items.length} />
      <Cart
        items={items}
        onClear={handleClear}
        onDelete={(itemFromCart) =>
          setItems(items.filter((item) => item != itemFromCart))
        }
      />
    </>
  );
};

export default App;
