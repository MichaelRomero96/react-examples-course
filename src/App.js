import MyGlobalComponent from "./components/MyGlobalComponent";
import LoginGoogleProvider from "./context/provider/LoginGoogleProvider";
import MyComponentProvider from "./context/provider/MyComponentProvider";


function App() {

  return (
    <LoginGoogleProvider>
      <MyComponentProvider>
        <MyGlobalComponent />
        {/* <LoginGoogle /> */}
      </MyComponentProvider>
    </LoginGoogleProvider>

  );
}

export default App;
