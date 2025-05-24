import Dashboard from "./components/dashboard/Dashboard";
import { BrowserRouter, Routes, Route } from 'react-router-dom'


function App() {
  const API = 'https://fakestoreapi.com'

    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard API ={API}/>}/>
          </Routes>
      </BrowserRouter>
    )
}

export default App
