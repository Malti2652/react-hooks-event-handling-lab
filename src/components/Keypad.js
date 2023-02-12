// Code Keypad Component Here

// function Keypad (){
//     return (
//         <div></div>
//     )
// }

// export default Keypad;

import React from 'react';

function Keypad() {
class Keypad extends React.Component {
  render() {
    return (
      <div>
        <input type="password" />
      </div>
    );
  }
}


  const handleChange = (event) => {
    console.log("Entering password...");
  };

  return (
    <div>
      <input type="password" onChange={handleChange} />
    </div>
  );
}

export default Keypad;
