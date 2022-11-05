import React, {useState} from 'react';
import ReactDOM from 'react-dom/client';
import './App.css';

// class Grids extends React.Component {



//   constructor() {
//     super();
//     var counter1 = 0;
//     var counter2 = 0;
//     var counter3 = 0;
//     var counter4 = 0;
//     var x = counter1 + counter2 + counter3 + counter4;    
//   }

//   render() {
//     return (
//       <>
//         <div class = "header">
//           Count: {x}
//         </div>    
//         <div class="flex-container">
//           <Grid1 />
//           <Grid2 /> 
//           <Grid3 />
//           <Grid4 />    
//         </div>
//       </>
//     );
//   }


// }

    var counter1 = 0;
    var counter2 = 0;
    var counter3 = 0;
    var counter4 = 0;
    var totalCount = 0;

    

function Grids() {

  const [count, setCount] = useState(0);

  const handleCounter1 = () => {
    if (counter1 == 0) {
      counter1 = 1;
    } else {
      counter1 = 0;
    }     
    setCount(counter1 + counter2 + counter3 + counter4);
  }

  const handleCounter2 = () => {
    if (counter2 == 0) {
      counter2 = 1;
    } else {
      counter2 = 0;
    }     
    setCount(counter1 + counter2 + counter3 + counter4);
  }
  
  const handleCounter3 = () => {
    if (counter3 == 0) {
      counter3 = 1;
    } else {
      counter3 = 0;
    }     
    setCount(counter1 + counter2 + counter3 + counter4);
  }
  
  const handleCounter4 = () => {
    if (counter4 == 0) {
      counter4 = 1;
    } else {
      counter4 = 0;
    }     
    setCount(counter1 + counter2 + counter3 + counter4);
  }  

  return (
    <>
      <div class = "header">
        Count: {count}
      </div>    
      <div class="flex-container">
        <Grid1 /> 
        <Grid2 /> 
        <Grid3 />
        <Grid4 />         
      </div>
    </>
  )
}


function Grid1() {  
  return <div class="box1" onClick={handleCounter1}>          
         </div>;
}

function Grid2(){
  return <div class="box2" onClick={handleCounter2}>          
 </div>;
}

function Grid3(){
  return <div class="box3" onClick={handleCounter3}>          
         </div>;
}
function Grid4(){
  return <div class="box4" onClick={handleCounter4}>          
         </div>;
}



function handleCounter1() {
  if (counter1 == 0) {
    counter1 = 1;
  } else {
    counter1 = 0;
  }    
  // showCount();
  setTotalCount(countTotal());
}

function handleCounter2() {
  if (counter2 == 0) {
    counter2 = 1;
  } else {
    counter2 = 0;
  }  

  countTotal();
}

function handleCounter3() {
  if (counter3 == 0) {
    counter3 = 1;
  } else {
    counter3 = 0;
  }  

  countTotal();
}

function handleCounter4() {
  if (counter4 == 0) {
    counter4 = 1;
  } else {
    counter4 = 0;
  }  

  countTotal();
}

function countTotal() {
  totalCount = counter1 + counter2 + counter3 + counter4;
  showCount();
  return totalCount;
}

const setTotalCount = () => {
  setTotalCount(totalCount => counter1 + counter2 + counter3 + counter4);
};

function showCount() {
  return (
    <>
      <div class = "header">
        Count: {totalCount}
      </div> 
    </>
  )  
}


const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<Counter />);
// root.render(<Grids />);
root.render(<Grids />);


