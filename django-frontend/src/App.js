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
          <Route path="/" exact element={<NewCorp/>}/>
          <Route path="/one" exact element={<One/>}/>
          <Route path="/two/:data" exact element={<Two/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
