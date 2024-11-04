//import { useEffect,useState } from 'react'
import { BrowserRouter,Routes,Route} from 'react-router-dom';
import './App.css'
import Header from './components/Header/Header.jsx';
import Homepage from './pages/Homepage/Homepage.jsx';
import Upload from './pages/Upload/Upload.jsx';

function App() {
  return (
    <div>
        <BrowserRouter>
          <Header/>
            <Routes>
              <Route path="/" element={<Homepage/>}/>
              <Route path="/videos/:videoId" element={<Homepage/>}/>
              <Route path="/upload" element={<Upload/>}/>
            </Routes>
      </BrowserRouter>
    </div>
 
  )
}

export default App;
