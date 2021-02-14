import { useState } from 'react';
import Picker from './Picker';

const App = () => {
  const [colors, setColors] = useState(["#ff0000", "#00ff00", "#0000ff"]);
  const [BG, setBG] = useState("#ffffff");

  return (
    <>
    <div id="root" style={{backgroundColor:BG}}>
      {colors.map((color, index) => {
        return <Picker key={index} color={color} onClick={setBG}/>
      })}
    </div>
    </>
  );
}

export default App;