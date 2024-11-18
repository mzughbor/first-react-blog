import ListGruop from "./components/ListGroup";

function App() {
  let items = ["New York", "San Fran", "Tokyo", "Gaza"];
  const handleSelectItem = (item: string) => {
    console.log(item);
  };
  return (
    <div>
      <ListGruop
        items={items}
        heading={"Cites"}
        onSelectItem={handleSelectItem}
      />
    </div>
  );
}

export default App;
