import './App.css'
import Base from './Components/Base/Base.jsx';
import TopBar from './Components/Topbar/TopBar.jsx';
import Sidebar from './Components/Sidebar/Sidebar.jsx';


function App() {
  return <div className='main'>
  <Sidebar/>
  <div className='eleArea'><TopBar/><Base /></div>
  
  </div>
}
export default App
