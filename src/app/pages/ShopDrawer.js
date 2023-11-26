import React from 'react'


export default function ShopDrawer() {
  const listVar = ['all brands', 'shopy', 'bittet', 'virtten', 'inhind'];
  return (
    <div className="shopDrawerComponent"
    style={{
      padding: '20px'
    }}
    >
      <table className='sdt'>
        <tbody>
          <tr>
            <td
            style={{
              width: '50%',
              marginRight: '100px',
              paddingRight: '100px',
              paddingLeft: '100px',
            }}
            > 
              <h5 style={{margin:'20px'}}>apparel</h5>
              {
                listVar.map((item, index)=>{
                  return <li key={index}
                  style={{
                    margin: '10px'
                  }}
                  >
                    {item}
                  </li>
                })
              }
            </td>
            <td
            style={{
              width: '50%',
              // paddingLeft: '500px'  
              width: '700px'            
            }}
            >
              <h5 style={{margin:'20px'}}>home</h5>
              {
                listVar.map((item, index)=>{
                  return <li key={index}
                  style={{
                    margin: '10px'
                  }}
                  >
                    {item}
                  </li>
                })
              }
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
