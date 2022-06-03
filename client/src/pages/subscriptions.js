import { Button } from '@mui/material';
import { height } from '@mui/system';
import React from 'react';
import '../style/subscriptions.css'

const Subscriptions = () => {
  return (
    <div class="subscriptions">
      <div class="subscriptions_intro-container">
        <div class="subscriptions_main-text">Horn premium plans</div>
        <div class="subscriptions_discription-text">Horn offers hundreds of templates, unlimited pages and first-class hosting for free. Go to Premium and get even more.</div>
        <a class="subscriptions_button" href="./auth"><Button style={{borderRadius: 50, height: 42, width: 185, backgroundColor: '#AA4DC8'}} variant="contained" >Get started</Button></a>
        <div class="">
          <div class=""></div>
          <div class=""></div>
        </div>
      </div>
    </div>  
  );
}

export default Subscriptions;
