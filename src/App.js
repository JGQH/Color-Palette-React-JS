import { useState } from 'react';
import Picker from './Picker';

function getHex(val){
  if(val < 16){
    return "0" + val.toString(16);
  }
  return val.toString(16);
}

function getColor(p){
  let [R, G, B] = [0, 0, 0];
  if(p < 1){ //Red to Green
    G = Math.floor(255 * p);
    R = 255 - G;
  }else if(p < 2){ //Green to Blue
    B = Math.floor(255 * (p - 1));
    G = 255 - B;
  }else{ //Blue to Red
    R = Math.floor(255 * (p - 2));
    B = 255 - R;
  }
  return `#${getHex(R)}${getHex(G)}${getHex(B)}`;
}

const App = () => {
  const [colors, setColors] = useState(["#ff0000", "#00ff00", "#0000ff"]);
  const [BG, setBG] = useState("#ffffff");

  function addColor(){
    let colors_ = [...colors, ""];
    for (let i = 0; i < colors_.length; i++){
      colors_[i] = getColor(3 * i/colors_.length);
    }
    setColors(colors_);
  }

  return (
    <>
    <div id="picker-root" style={{backgroundColor:BG}}>
      {colors.map((color, index) => {
        return <Picker key={index} color={color} onClick={setBG}/>
      })}
      <Picker color={"#ffffff"} onClick={addColor}/>
    </div>
    </>
  );
}

export default App;