import './App.css'
import Base from './Components/Base/Base.jsx';
import NavBar from './Components/NavBar';
import Sidebar from './Components/Sidebar';


function App() {
  return <div className='main'>
  <Sidebar/>
  <div className='eleArea'><NavBar/><Base /></div>
  
  </div>
}
export default App
