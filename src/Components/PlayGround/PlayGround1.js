import React, {useState} from 'react';
import Slider from '@material-ui/core/Slider'

const acaller =(
  {
    eta,
    eta2,
  }
) => {
  const [val1,setval1] = useState(eta)
  const handlechange = event =>{
    setval1(event.target.value)
  };
  return (
    <div>
      <Slider valueLabelDisplay={"auto"} value={val1} onChange={handlechange}/>
    </div>
  )

}

export {acaller};