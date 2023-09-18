import { useEffect } from "react";
import { fireStore } from "./firebase";

function App() {
  useEffect(() => {
    console.log(fireStore);
  });

  return <div className="App">{fireStore._databaseId.projectId}</div>;
}

export default App;
