import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/home/Home'
import Projects from './pages/projects/Projects'
import Widget from './pages/widget/Widget'
import Settings from './pages/settings/Settings'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/project/:projectID/projects' element={<Projects />} />
          <Route path='/project/:projectID/widgetconfiguration' element={<Widget />} />
          <Route path='/project/:projectID/settings' element={<Settings />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
