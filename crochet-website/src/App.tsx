import { Routes, Route } from "react-router-dom"
import NavBar from './components/NavBar';
import HomePage from './components/HomePage'
import GalleryPage from './components/GalleryPage'
import ContactPage from './components/ContactPage'
function App() {
  return (
  <div>
    <NavBar />
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/gallery" element={<GalleryPage />} />
      <Route path="/contact" element={<ContactPage />} />
    </Routes>
  </div>
)
}

export default App;