import "bootstrap/dist/css/bootstrap.min.css";
import NavScrollExample from "./components/navbar";
import BasicExample from "./components/card";
import AlertDismissible from "./components/heading";
function App() {
  return (
    <>
      <div className="App"></div>
      <NavScrollExample />
      <AlertDismissible />
      <BasicExample />
    </>
  );
}
//react fragment
export default App;
