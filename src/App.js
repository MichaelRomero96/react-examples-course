import { Provider } from "react-redux";
import ReduxComponent from "./components/ReduxComponent";
import generateStore from "./reduxDucks/store";



function App() {
  const store = generateStore();
  return (
    <Provider
      store={store}>
      <ReduxComponent />
    </Provider>

  );
}

export default App;
