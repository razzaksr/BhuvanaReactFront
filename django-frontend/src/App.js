import { Menu } from "./Navigation";
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { Homes, One, Two } from "./SampleComps";
import { NewCorp } from "./NewCorporate";
import { Home } from "./Home";
import { Read } from "./Read";
import { Edit } from "./Edit";


const App=()=>{
  return (
    <>
      <BrowserRouter>
        <Menu/>
        <Routes>
          <Route path="/" exact element={<Home/>}/>
          <Route path="/new" exact element={<NewCorp/>}/>
          <Route path="/kind/:id" exact element={<Read/>}/>
          <Route path="/kidding/:id" exact element={<Edit/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
