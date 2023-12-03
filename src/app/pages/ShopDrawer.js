import React from 'react'


export default function ShopDrawer() {
  const listVar = ['all brands', 'shopy', 'bittet', 'virtten', 'inhind'];
  return (
    <div className="shopDrawerComponent"
    >
      <table className='sdt'>
        <tbody>
          <tr>
            <td> 
              <h5 style={{margin:'20px'}}>apparel</h5>
              {
                listVar.map((item, index)=>{
                  return <li key={index}
                  style={{margin: '10px'}}>
                    {item}
                  </li>
                })
              }
            </td>
            <td>
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
