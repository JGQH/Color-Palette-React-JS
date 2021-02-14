import { useState } from 'react';
import Picker from './Picker';

const App = () => {
  const [colors, setColors] = useState(["#ff0000", "#00ff00", "#0000ff"]);

  return (
    <>
    {colors.map((color, index) => {
      return <Picker key={index} color={color} />
    })}
    </>
  );
}

export default App;