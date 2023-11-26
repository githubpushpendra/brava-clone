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
              {/* <table className='tb'>
                <tbody >
                  <tr >
                    <td className='aTitle'>amazing</td>
                  </tr>
                  <tr>
                    <td className='aLink'>
                      <a href="example.com" target="_blank" rel="noopener noreferrer">
                        textLink
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table> */}
            </th>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
