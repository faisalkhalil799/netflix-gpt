import { Provider } from "react-redux";
import "./App.css";
import Layout from "./components/Layout";
import appStore from "./utils/appStore";

function App() {
  return (
    <div>
      <Provider store={appStore}>
        <Layout />
      </Provider>
    </div>
  );
}

export default App;
