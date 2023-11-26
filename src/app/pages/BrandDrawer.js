import React from 'react'

export default function BrandDrawer() {
  const listVar = ['all brands', 'shopy', 'bittet', 'virtten', 'inhind'];
  return (
    <div className="drawer">
      <ul>
        {
          listVar.map((brand, index)=>{
            return <li key={index}>
              {brand}
            </li>
          })
        }
      </ul>
    </div>
  );
}
