import { Menu } from "./Navigation";
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { Home, One, Two } from "./SampleComps";
import { NewCorp } from "./NewCorporate";

const App=()=>{
  return (
    <>
      <BrowserRouter>
        <Menu/>
        <Routes>
          <Route path="/" exact element={<Home/>}/>
          <Route path="/one" exact element={<One/>}/>
          <Route path="/two/:data" exact element={<Two/>}/>
        </Routes>
      </BrowserRouter>
      <h1>Hai!!!!!!!!!!!!!</h1>
    </>
  );
}

export default App;
