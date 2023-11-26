// import React from 'react'
// import Marquee from "react-fast-marquee";
// import Card from './Card'

// export default function Maquee(props) {
//   const cards = [
//     "I can be a React component, multiple React components, or just some text",
//     "I can be a React component, multiple React components, or just some text",
//     "I can be a React component, multiple React components, or just some text"
//   ]
//   return (
//     <div>
//       <Marquee className='marquee'>
//         {
//           cards.map((elemnt, index)=>{
//             return <div key={index}>
//               <Card />
//             </div>
//           })
//         }
//       </Marquee>
//     </div>
//   )
// }


import React from 'react';
import Marquee from 'react-fast-marquee';
import Card from './Card';

export default function Maquee(props) {
  const cards = ['data1', 'data2', 'data3'];

  // Concatenate the array with itself to create a continuous loop
  const extendedCards = cards.concat(cards);

  return (
    <div>
      <Marquee className='marquee'>
        {extendedCards.map((element, index) => (
          <div key={index}>
            <Card />
          </div>
        ))}
      </Marquee>
    </div>
  );
}
