import About from "./routes/About";
import Contact from "./routes/Contact";
import Home from "./routes/Home";
import Expert from "./routes/Expert";
import Service from "./routes/Service";
import{Route , Routes} from 'react-router-dom';

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/service" element={<Service />} />
        <Route path="/expert" element={<Expert />} />
        <Route path="/contact" element={<Contact />}/>
      </Routes>
      
    </div>
  );
}

export default App;
