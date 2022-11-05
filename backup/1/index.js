import React from 'react';
import ReactDOM from 'react-dom/client';
import './App.css';


function Grid1() {  
  return <div class="box1">          
          <div>          
          </div>
         </div>;
}
function Grid2() {
  return <div class="box2">          
          <div>          
          </div>
         </div>;
}
function Grid3() {
  return <div class="box3">          
          <div>          
          </div>
         </div>;
}
function Grid4() {
  return <div class="box4">          
          <div>          
          </div>
         </div>;
}

function Grids() {

  var counter1 = 0;
  var counter2 = 0;
  var counter3 = 0;
  var counter4 = 0;
  var count = counter1 + counter2 + counter3 + counter4;


  return (
    <>
      <div class = "header">
        Count: {count}
      </div>    
      <div class="flex-container">
        <Grid1 /><Grid2 /> 
        <Grid3 /><Grid4 />        
      </div>
    </>
  );
}

function Counter() {
  return (
    <>
      <h2>
        Count: 1
      </h2>
    </>
  );
}



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Counter />);
root.render(<Grids />);


