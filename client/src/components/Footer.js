import React from 'react';
import '../style/footer.css'

const Footer = () => {
  return (
    <div class="footer">
      <div class="post_border"><div class="footer_border"></div></div>
      <div class="footer_container">
        <div class="footer_text">PRODUCT</div>
        <div class="footer_text">COMPANY</div>
        <div class="footer_text">COMMUNITY</div>
        <div class="footer_text">SUPPORT</div>
        {/* <div class="footer_img-container">
          <div class="footer_img">
            IMG
          </div>
        </div> */}
      </div>
      <div class="footer_discription">
        <div class="footer_text-container add_margin">
          <div class="footer_down" >Templates</div>
          <div class="footer_down" >More</div>
          <div class="footer_down" >Functions</div>
          <div class="footer_down" >Website designer</div>
          <div class="footer_down" >Velo</div>
          <div class="footer_down" >My sites</div>
          <div class="footer_down" >Premium plans</div>
          <div class="footer_down" >Logo Maker</div>
          <div class="footer_down" >Start a blog</div>
          <div class="footer_down" >Internet-shop</div>
        </div>
        <div class="footer_text-container add_margin2">
          <div class="footer_down">About Horn</div>
          <div class="footer_down">For the press</div>
          <div class="footer_down">For investors</div>
          <div class="footer_down">Corporate identity</div>
          <div class="footer_down">Terms of use</div>
          <div class="footer_down">Privacy policy</div>
          <div class="footer_down">Statement of availability</div>
        </div>
        <div class="footer_text-container add_margin3">
          <div class="footer_down">Horn Blog</div>
          <div class="footer_down">Horn Marketplace</div>
        </div>
        <div class="footer_text-container add_margin4">
          <div class="footer_down">Support center</div>
          <div class="footer_down">Status page</div>
        </div>
        {/* <div style={{marginLeft: 255}}>
          <div>barsik</div>
        </div> */}
      </div>
    </div>
  );
}

export default Footer;
