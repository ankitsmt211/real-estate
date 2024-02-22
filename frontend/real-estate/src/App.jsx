import './App.css'
import Base from './Components/Base/Base.jsx';
import NavBar from './Components/Navbar/NavBar.jsx';
import Sidebar from './Components/Sidebar/Sidebar.jsx';


function App() {
  return <div className='main'>
  <Sidebar/>
  <div className='eleArea'><NavBar/><Base /></div>
  
  </div>
}
export default App
