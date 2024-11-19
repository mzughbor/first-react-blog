import Alert from "./components/alert";
import Button from "./components/button";

function App() {
  return (
    <div>
      <Alert>
        Hello World
        <span>
          !<p>Mah</p>
        </span>
      </Alert>
      <Button color="danger" onClick={() => console.log("Clicked")}>
        My Btn
      </Button>
    </div>
  );
}

export default App;
