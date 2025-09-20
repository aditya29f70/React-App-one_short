

function ListGroup() {
  return (
    <>
      <h1>List</h1> 
      {/* React.createElement('h1') ; showing error (red mark) bz in react we can't return more than one component -> so it will be compiled in the js
       so solve this problem we have multiple ways 1. rap this whole multiple component in a <Fragment' but this is unnecessury we only use so reach will happy -> a better way to use flagments from react so replace -> div with Fragment -> by default you don't need to import and write do dirct -> <>*/}
      <ul className="list-group">
        <li className="list-group-item">An item</li>
        <li className="list-group-item">A second item</li>
        <li className="list-group-item">A third item</li>
        <li className="list-group-item">A fourth item</li>
        <li className="list-group-item">And a fifth one</li>
      </ul>
    </>
  );
}

export default ListGroup;
// next we have to import this in our app.tsx so
// it will visible
