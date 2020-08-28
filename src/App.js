import React from 'react';
import imageInSrc from "./images.jpg" ;
import './App.css';
import './Style.css' ;
function App() {
  return (
    <div className="App">
      <div style={{border:'solid 1px black',maxWidth:'100vw'}}>  
 
 <h1 className="titlered">Fredj FATHIA</h1>  
 <br></br>
 <img src={imageInSrc} alt="" /> 
<br></br>
<img src="/voiture.jpg" alt=""/>  

</div>  
<br></br>
<br></br>
<video width={320} height={240} controls>  

   <source src="myVideo.mp4" type="video/mp4"/> 

</video> 
     
    </div>
  );
}

export default App;
