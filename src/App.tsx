import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";
import Like from "./components/Like";

const App = () => {
  const [alertVisible, setAlertVisibility] = useState(false);
  return (
    <>
      {alertVisible && (
        <Alert onClose={() => setAlertVisibility(false)}>My alert!</Alert>
      )}
      <Button color="secondary" onClick={() => setAlertVisibility(true)}>
        Click Me
      </Button>
      <br />
      <Like onClick={() => console.log("clicked")} />
    </>
  );
};

export default App;
