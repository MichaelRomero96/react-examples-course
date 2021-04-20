import { Provider } from "react-redux";
import FirebaseDemo from "./components/firebaseExample/FirebaseDemo";
import generateStore from "./reduxDucks/store";



function App() {
  const store = generateStore();
  return (
    <Provider
      store={store}>
      <FirebaseDemo />
    </Provider>

  );
}

export default App;
