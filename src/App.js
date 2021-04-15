import { Provider } from "react-redux";
import ReduxComponent from "./components/ReduxComponent";
import store from './redux/store'


function App() {
  return (
    <Provider
      store={store}>
      <ReduxComponent />
    </Provider>

  );
}

export default App;
