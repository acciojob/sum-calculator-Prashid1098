
import React from "react";
import './../styles/App.css';

const App = () => {
  let [number,setNum]=useState(0);

    function updateNum(event)
    {
      let n=parseInt(event.target.value);
      setNum(prevNum => prevNum + n);
    }

  return (
    <div>
        {/* Do not remove the main div */}
         <div>Sum Calculator:</div><br/>
        <input type="number" id="abc" onChange={updateNum} />
        <p id="abc">Sum: {number}</p>
    </div>
  )
}  

export default App
