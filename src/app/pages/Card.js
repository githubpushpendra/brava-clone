import React from 'react';

export default function Card(props) {
  const image = "https://www.w3schools.com/howto/img_avatar2.png";

  return (
    <div className='aCard' 
    >
      <table>
        <tbody>
          <tr>
            <th>
              <img src={image} className='image'></img>
            </th>
            <th className='secondC'>
              <div className='aTitle'>amazing</div>
              <div className='aLink'>
                <a href="example.com" id='linkId' target="_blank" rel="noopener noreferrer">
                  textlink
                </a>
              </div>
            </th>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
