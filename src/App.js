
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import BlogDetail from "./blogDetail";
import Create from './create';
import Home from './home';
import NavBar from "./navBar";

function App() {
  return (
   <Router>
     <div className="App">
      <header className="App-header">
        <NavBar />
      </header>
      <div className="content">
        <Routes>
          <Route path="/" element= {<Home />}></Route>
          <Route path="/blogs/:id" element= {<BlogDetail />}></Route>
          <Route path="/create" element= {<Create />}></Route>
        </Routes>
      </div>
    </div>
   </Router>

  );
}

export default App;
