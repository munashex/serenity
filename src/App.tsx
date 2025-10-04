import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Navbar from "./components/Navbar" 
import Services from "./pages/Services"

const App = () => {

  return (
    <div className="h-screen w-full">
      <Router> 
        <Navbar/>
        <Routes> 
          <Route path="/" element={<Home/>}/> 
          <Route path="/services" element={<Services/>}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App