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
        <div class="footer_text-container">
          <div>barsik</div>
          <div>barsik</div>
          <div>barsik</div>
          <div>barsik</div>
          <div>barsik</div>
        </div>
        <div style={{marginLeft: 280}}class="footer_text-container">
          <div>barsik</div>
          <div>barsik</div>
          <div>barsik</div>
          <div>barsik</div>
        </div>
        <div style={{marginLeft: 290}} class="footer_text-container">
          <div>barsik</div>
          <div>barsik</div>
        </div>
        <div style={{marginLeft: 290}} class="footer_text-container">
          <div>barsik</div>
          <div>barsik</div>
        </div>
        {/* <div style={{marginLeft: 255}}>
          <div>barsik</div>
        </div> */}
      </div>
    </div>
  );
}

export default Footer;
