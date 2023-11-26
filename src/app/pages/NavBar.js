import React from 'react';
import BrandDrawer from './BrandDrawer';
import ShopDrawer from './ShopDrawer';


export default function NavBar() {
  return (
    <div className='navBar'>
      <ul className="horizontal-list">
        <li>
          <span className="hoverColor brands">brands</span>
          <BrandDrawer />
          </li>
        <li>
          <span className="hoverColor shop">shop</span>
          <ShopDrawer />
          </li>
        <li><span className="hoverColor">premium</span></li>
        <li><span className="hoverColor">gift cards</span></li>
      </ul>
      <ul className="horizontal-list brava">
        <li>brava</li>
      </ul>
      <ul className="horizontal-list">
        <li><span class="hoverColor">become an affiliate</span></li>
        <li><i className="bi bi-twitter hoverColor"></i></li>
        <li><i className="bi bi-tiktok hoverColor"></i></li>
        <li><i className="bi bi-instagram hoverColor"></i></li>
        <li><i className="bi bi-person hoverColor"></i></li>
        <li><i className="bi bi-search hoverColor"></i></li>
        <li><i className="bi bi-chat-text hoverColor"></i></li>
      </ul>
    </div>
  );
}
