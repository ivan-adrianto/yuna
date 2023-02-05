import { Provider } from "react-redux";
import store from "./redux/store";
import Router from "./router/Router";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Router />
      </Provider>
    </div>
  );
}

export default App;
