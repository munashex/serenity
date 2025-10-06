import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Navbar from "./components/Navbar" 
import Services from "./pages/Services" 
import Blogs from "./pages/Blogs"
import Blog from "./pages/Blog"
import NotFound from "./pages/NotFound"

const App = () => {

  return (
    <div className="h-screen w-full">
      <Router> 
        <Navbar/>
        <Routes> 
          <Route path="/" element={<Home/>}/> 
          <Route path="/services" element={<Services/>}/> 
          <Route path="/blog" element={<Blogs/>}/> 
          <Route path="/blog/:id" element={<Blog/>}/> 
          <Route path="*" element={<NotFound/>}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App