import { Route } from "react-router-dom";
import Header from "./pages/NavNheader";
import "./App.css";

function App() {
  return (
    <div>
      <Route path="/" component={Header} exact />
    </div>
  );
}
export default App;
