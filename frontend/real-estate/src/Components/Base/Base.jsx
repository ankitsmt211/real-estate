import { BrowserRouter, Routes, Route,Navigate, Outlet } from "react-router-dom"
import Sidebar from "../Sidebar/Sidebar"
import TopBar from "../Topbar/TopBar"
import Login from "../Auth/Login"
import Register from "../Auth/Register"
import { useContext, useState } from 'react';
import { authContext } from '../../App';
import '../Base/base.css'
import Properties from "../Properties/Properties.jsx"
import { useEffect } from "react"
import { useNavigate } from 'react-router-dom';
import AddProperty from "../Add Property/AddProperty.jsx"
import { ENDPOINTS } from "../Properties/PropertyEndpoints.js"

export default function Base(){
    const { isLoggedIn } = useContext(authContext);

    return <>
    <BrowserRouter>
        <Routes>
            <Route path="/home/*" element={isLoggedIn ? <DashBoard /> : <Navigate to={'/login'} />}/>
            {/* <Route path="/home/add-property" element={<AddProperty/>}/> */}
            <Route path="/login" element={<Login/>}/>
            <Route path="/register" element={<Register/>}/>  
        </Routes>
    </BrowserRouter>
    </>
}

function DashBoard(){
  let navigate = useNavigate();
  const [userdata, setuserdata] = useState("")
  const [properties,setProperties] = useState([])
  // const data = [
  //   { ppdId: 1, image: 'image1.jpg', type: 'Property One', contact: '123-456-7890', area: '1000 sqft', views: 120, status: 'Active', daysLeft: 5, action: 'Renew' },
  //   { ppdId: 2, image: 'image2.jpg', type: 'Property Two', contact: '234-567-8901', area: '1500 sqft', views: 80, status: 'Pending', daysLeft: 3, action: 'Edit' },
  //   { ppdId: 3, image: 'image3.jpg', type: 'Property Three', contact: '345-678-9012', area: '2000 sqft', views: 60, status: 'Sold', daysLeft: 0, action: 'Remove' },
  //   { ppdId: 4, image: 'image4.jpg', type: 'Property Four', contact: '456-789-0123', area: '1200 sqft', views: 110, status: 'Active', daysLeft: 10, action: 'Renew' },
  //   { ppdId: 5, image: 'image5.jpg', type: 'Property Five', contact: '567-890-1234', area: '1400 sqft', views: 90, status: 'Active', daysLeft: 8, action: 'Renew' },
  //   { ppdId: 6, image: 'image6.jpg', type: 'Property Six', contact: '678-901-2345', area: '1600 sqft', views: 70, status: 'Pending', daysLeft: 4, action: 'Edit' },
  //   { ppdId: 7, image: 'image7.jpg', type: 'Property Seven', contact: '789-012-3456', area: '1800 sqft', views: 50, status: 'Sold', daysLeft: 0, action: 'Remove' },
  //   { ppdId: 8, image: 'image8.jpg', type: 'Property Eight', contact: '890-123-4567', area: '1100 sqft', views: 100, status: 'Active', daysLeft: 7, action: 'Renew' },
  //   { ppdId: 9, image: 'image9.jpg', type: 'Property Nine', contact: '901-234-5678', area: '1300 sqft', views: 85, status: 'Pending', daysLeft: 2, action: 'Edit' },
  //   { ppdId: 10, image: 'image10.jpg', type: 'Property Ten', contact: '012-345-6789', area: '1700 sqft', views: 55, status: 'Sold', daysLeft: 0, action: 'Remove' },
  // ];
  useEffect(() => {
    let testUrl='http://localhost:8080/test'
    const fetchUser = async () => {
      const token = localStorage.getItem('token'); 
      
      if (!token) {
        navigate('/login');
        return;
      }

      try {
        const response = await fetch(testUrl, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`},
        });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const json = await response.json();
        setuserdata(json)
      } catch (error) {
        console.error('Error', error);
        navigate('/login');
       
      }
    };

    fetchUser();
  }, []);
  

  useEffect( ()=>{
    const token = localStorage.getItem('token'); 
    if (!token) {
      navigate('/login');
      return;
    }

    const getProperties = async ()=>{
      try{
        let properties = await fetch(ENDPOINTS.getProperties,{
          method:'GET',
          headers:{
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`}
          })

          if(!properties.ok){
            throw new Error(`HTTP error! status: ${properties.status}`);
          }

          let propertiesJson = await properties.json()
          let propertiesData = propertiesJson.data
          setProperties(propertiesData);

      }
      catch(error){
        console.error('Error', error);
        navigate('/login');
      }
    }

    getProperties()
  },[])

  useEffect(() => {
    preparePropertyList();
 
}, [properties]);


  // function preparePropertyList(){
  //   //prepare property list data from properties state array
  //   console.log(properties)
  //   let propertyBrief = {
  //     ppdId:properties.ppdID,
  //     imageUrl:properties.imageUrl,
  //     propertyType:properties.basic['buildingType'],
  //     contact:properties.general['mobile'],
  //     area:properties.details['area'],
  //     views:properties.views,
  //     status:properties.status,
  //     daysLeft:properties.daysLeft
  //   }

  //   return propertyBrief

  //   //this propetyBrief object will be passed to Properties Component as data
  // }

  function preparePropertyList() {
    
    return properties.map(property => ({
        ppdId: property.ppdId,
        imageUrl: property.imageUrl,
        propertyType: property.basic.buildingType,
        contact: property.general.mobile || "0-0-0-0-0--00-",
        area: property.details['area'],
        views: property.views || "01",
        status: property.status || "Unsold",
        daysLeft: property.daysLeft || "10"
    }
    ));

}

    return <>
     <div className="main">
    <Sidebar/>
      <div className='eleArea'>
        <TopBar userdata={userdata}/>
        <Routes>
          <Route path="/" element={<Properties dataArray={preparePropertyList()}/>}/>
          <Route path="/add-property" element={<AddProperty/>}/>
        </Routes>
        {/* <Properties dataArray={data} />  */}
      </div>
    </div>
    </>
}
