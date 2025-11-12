import { Routes, Route } from "react-router"
import { Home } from "./pages/Home"
import { Navbar } from "./components/Navbar"
import { CreatePostPage } from "./pages/CreatePostPage"

function App() {
  return (
  <div className="bg-black min-h-screen text-gray-100 transition-opacity duration-700 pt-20">
    <Navbar />
    <div className="px-4 py-6 container mx-auto">
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/create" element={<CreatePostPage />}/>
      </Routes>
    </div>
  </div>
  )
}

export default App
