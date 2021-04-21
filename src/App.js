import { Provider } from "react-redux";
import FirebaseDemoRedux from "./components/firebaseExample/FirebaseDemoRedux";
//lamado del store desde redux
import store from "./redux/store";
//llamado del store desde funcion de redux ducks
// import generateStore from "./reduxDucks/store";




function App() {
  return (
    <Provider
      store={store}>
      {/* <FirebaseDemo /> */} {/* demo de productos de firebase sin aplicar redux*/}
      <FirebaseDemoRedux /> {/* demo de productos de firebase con redux */}

    </Provider>

  );
}

export default App;
