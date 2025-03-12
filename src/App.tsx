import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";

const App = () => {
  const [alertVisible, setAlertVisibility] = useState(false);
  return (
    <div>
      {alertVisible && (
        <Alert onClose={() => setAlertVisibility(false)}>My alert!</Alert>
      )}
      <Button color="secondary" onClick={() => setAlertVisibility(true)}>
        Click Me
      </Button>
    </div>
  );
};

export default App;
