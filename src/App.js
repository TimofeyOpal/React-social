
import './Components/App.module.css';
import Header from './Components/Header/Header';
import Text from './Components/Text/Text';
import Profile from "./Components/Profile/Profile";
import Dialogs from "./Components/Dialogs/Dialogs";
import { BrowserRouter, Route, Link } from "react-router-dom";

const App = () => {
  return (
      <BrowserRouter>
    <div>
      <Header/>
      <Text />

      <Route path={'/Profile'} component={Profile} />
      <Route path={'/Dialogs'} component={Dialogs}  />
    </div>
      </BrowserRouter>

  );
}

export default App;
