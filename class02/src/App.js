

import './App.css';
import Apple from './components/Apple';


function App() {
  const data=[{
    id:1,
    name:"item1",
    price:10,
    date:new Date(2021,8,10)
   
    },
    {
      id:2,
      name:"item2kasim",
      price:20,
      date:new Date(2019,5,6)
   
    },
    {
      id:3,

      name:"suhail",
      price:30,
      date:new Date(23/64/2021)
     
    },{
      id:4, 
      name:"item4",
      price:'pricce40',
      date:new Date(13/64/2024)
      
    }
    

  ]
  return (
    <div >
    
     <Apple arr={data} />
    </div>
  );
}

export default App;
