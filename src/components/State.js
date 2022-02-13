import React, {useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import Album from '@mui/icons-material/Album';
import Favorite from "@mui/icons-material/Favorite";

const State = () => {
  const [test,setTest] = useState('false');
  useEffect(()=>{
    console.log("useEffect実行");
  },[]);

  const clickEvent = () => {
    setTest(!test);
  };

  return (
    <div className='App'>

      {!test && <div>あああああ</div>}
      {test && <div>いいいい</div>}

        <Button onClick={clickEvent} variant="text" size='large'>
          <Favorite/>
        </Button>
        
        <Button variant="text" size='large' color='error'>
          <Album/>
        </Button>
    </div>
  )
}



export default State