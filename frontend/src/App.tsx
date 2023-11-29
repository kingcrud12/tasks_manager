import { useState } from "react";
import { Button } from "react-bootstrap";

function App() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <Button onClick={() => setCount(count + 1)}>clicked {count} times</Button>
    </div>
  );
}

export default App;
