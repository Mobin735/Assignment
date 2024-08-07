import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/home/Home'
import Projects from './pages/projects/Projects'
import Widget from './pages/widget/Widget'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/project/:projectName/projects' element={<Projects />} />
          <Route path='/project/:projectName/widgetconfiguration' element={<Widget />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
