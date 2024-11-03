
import './App.css';
import data from './data';
import Tour from './components/Tour';
import { useState } from 'react';

function App() {
  const[tour,setTour]= useState(data);
  function Btnhandler(id){
    const newTour=tour.filter(tt=>tt.id != id);
    setTour(newTour);
    }
    function refreshhandler(){
      setTour(data);
    }

 if(tour.length==0){
  return(
    <div className='refresh'>
      <h2>No tours left</h2>
      <button className='btn-refresh' onClick={refreshhandler}>REfresh</button>
    </div>
  )
 }

  return (
    <div className='app' >
    <Tour data={tour} Btnhandler={Btnhandler} />
      
    </div>
  );
}

export default App;
