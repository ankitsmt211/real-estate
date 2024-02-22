import Properties from "../Properties.jsx"
export default function Base(){
    const data = [
        { ppdId: 1, image: 'image1.jpg', property: 'Property One', contact: '123-456-7890', area: '1000 sqft', views: 120, status: 'Active', daysLeft: 5, action: 'Renew' },
        { ppdId: 2, image: 'image2.jpg', property: 'Property Two', contact: '234-567-8901', area: '1500 sqft', views: 80, status: 'Pending', daysLeft: 3, action: 'Edit' },
        { ppdId: 3, image: 'image3.jpg', property: 'Property Three', contact: '345-678-9012', area: '2000 sqft', views: 60, status: 'Sold', daysLeft: 0, action: 'Remove' },
        { ppdId: 4, image: 'image4.jpg', property: 'Property Four', contact: '456-789-0123', area: '1200 sqft', views: 110, status: 'Active', daysLeft: 10, action: 'Renew' },
        { ppdId: 5, image: 'image5.jpg', property: 'Property Five', contact: '567-890-1234', area: '1400 sqft', views: 90, status: 'Active', daysLeft: 8, action: 'Renew' },
        { ppdId: 6, image: 'image6.jpg', property: 'Property Six', contact: '678-901-2345', area: '1600 sqft', views: 70, status: 'Pending', daysLeft: 4, action: 'Edit' },
        { ppdId: 7, image: 'image7.jpg', property: 'Property Seven', contact: '789-012-3456', area: '1800 sqft', views: 50, status: 'Sold', daysLeft: 0, action: 'Remove' },
        { ppdId: 8, image: 'image8.jpg', property: 'Property Eight', contact: '890-123-4567', area: '1100 sqft', views: 100, status: 'Active', daysLeft: 7, action: 'Renew' },
        { ppdId: 9, image: 'image9.jpg', property: 'Property Nine', contact: '901-234-5678', area: '1300 sqft', views: 85, status: 'Pending', daysLeft: 2, action: 'Edit' },
        { ppdId: 10, image: 'image10.jpg', property: 'Property Ten', contact: '012-345-6789', area: '1700 sqft', views: 55, status: 'Sold', daysLeft: 0, action: 'Remove' },
      ];
      
  
    return <>
    <h1>Hello From React</h1>
    <Properties dataArray={data} />      
    </>
}