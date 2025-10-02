import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Navbar from "./components/Navbar"

const App = () => {

  return (
    <div className="h-screen w-full">
      <Router> 
        <Navbar/>
        <Routes> 
          <Route path="/" element={<Home/>}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App