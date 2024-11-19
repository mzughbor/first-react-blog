import Alert from "./components/alert";
import Button from "./components/button";
import { useState } from "react";

function App() {
  const [alertVisable, setAlertVisable] = useState(false);
  return (
    <div>
      {alertVisable && (
        <Alert onClose={() => setAlertVisable(false)}>
          {" "}
          Hello World
          <span>
            !<p>Mahs</p>
          </span>
        </Alert>
      )}

      {alertVisable && (
        <Alert onClose={() => setAlertVisable(false)}>My Alert</Alert>
      )}
      <Button color="danger" onClick={() => setAlertVisable(true)}>
        My Btn
      </Button>
    </div>
  );
}

export default App;
