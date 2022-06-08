import { Button } from '@mui/material';
import InfoIcon from '@mui/icons-material/Info';
import React from 'react';
import '../style/subscriptions.css'
import { grey } from '@mui/material/colors';

const Subscriptions = () => {
  return (
    <div class="subscriptions">
      {/* Intro container */}
      <div class="subscriptions_intro-container">
        <div class="subscriptions_main-text">Horn premium plans</div>
        <div class="subscriptions_discription-text">Horn offers hundreds of templates, unlimited pages and first-class hosting for free. Go to Premium and get even more.</div>
        <a class="subscriptions_button" href="./subscriptions"><Button style={{borderRadius: 50, height: 42, width: 185, backgroundColor: '#AA4DC8'}} variant="contained" >Get started</Button></a>
        <div class="subscriptions_plans-container">
          <div class="subscriptions_plan-left">
            <div>Plans for sites</div>
            <div>Suitable for demonstration of professional sites</div>
          </div>
          <div class="subscriptions_plan-right">
            <div>Business and eCommerce plans</div>
            <div>Required to accept online payments</div>
          </div>
        </div>
      </div>
      {/*Main body */}
      <div class="price_popular">
        <div class="price_popular-container">
          <div class="price_popular-text">Popular</div>
        </div>
      </div>
      <div class="price">
        {/* PRICE BODY */}
        <div class="price_main-body">
          <div class="price_body">
            {/* CONTAINER 1  */}
            <div class="price_container-1"></div>
            {/* CONTAINER 2  */}
            <div class="price_container-2">
              <div class="price_container-up">
                <div class="price_text-up">VIP</div>
                <div class="price_text-down">Priority support</div>
                <div class="price_border"></div>
              </div>
              <div class="price_container-down">
                <div class="cost">
                  <div class="cost-1"></div>
                  <div class="cost-2">108</div>
                  <div class="cost-container">
                    <div class="cost_text-up">PLN 75</div>
                    <div class="cost_text-down">/miss.</div>
                  </div>
                </div>
              </div>
            </div>
            {/* CONTAINER 3  */}          
            <div class="price_container-2 add_for-price_container-2">
              <div class="price_container-up add_for-text">
                <div class="price_text-up">Unlimited</div>
                <div class="price_text-down ">For entrepreneurs and freelancers</div>
                <div class="price_border add_for-border"></div>
              </div>
              <div class="price_container-down">
                <div class="cost">
                  <div class="cost-1"></div>
                  <div class="cost-2">63</div>
                  <div class="cost-container">
                    <div class="cost_text-up">PLN 75</div>
                    <div class="cost_text-down">/miss.</div>
                  </div>
                </div>
              </div>
            </div>
            {/* CONTAINER 4  */}
            <div class="price_container-2">
              <div class="price_container-up">
                <div class="price_text-up">Combo</div>
                <div class="price_text-down">Personal</div>
                <div class="price_border"></div>
              </div>
              <div class="price_container-down">
                <div class="cost">
                  <div class="cost-1"></div>
                  <div class="cost-2">37</div>
                  <div class="cost-container">
                    <div class="cost_text-up">PLN 75</div>
                    <div class="cost_text-down">/miss.</div>
                  </div>
                </div>
              </div>
            </div>
            {/* CONTAINER 5  */}
            <div class="price_container-2">
              <div class="price_container-up">
                <div class="price_text-up">Connect Domain</div>
                <div class="price_text-down">Base</div>
                <div class="price_border"></div>
              </div>
              <div class="price_container-down">
                <div class="cost">
                  <div class="cost-1"></div>
                  <div class="cost-2">20</div>
                  <div class="cost-container">
                    <div class="cost_text-up">PLN 75</div>
                    <div class="cost_text-down">/miss.</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Discripton BODY */}
          <div class="list">
            {/* { BLOCK 1 } */}
            <div class="list-container-1">
              <div class="list_block-1">
                <div class="list_block-text">Own domain</div>
                <InfoIcon sx={{ color: grey[500]}} style={{marginRight: 15}}/>
              </div>
              <div class="list_block-2"><span/></div>
              <div class="list_block-2 add_for-price_container-2 add_border"><span/></div>
              <div class="list_block-2"><span/></div>
              <div class="list_block-2"><span/></div> 
            </div>
            {/* { BLOCK 2 } */}
            <div class="list-container-1">
              <div class="list_block-1">
                <div class="list_block-text">Free domain for 1 year</div>
                <InfoIcon sx={{ color: grey[500]}} style={{marginRight: 15}}/>
              </div>
              <div class="list_block-2 "><span/></div>
              <div class="list_block-2 add_for-price_container-2"><span/></div>
              <div class="list_block-2"><span/></div>
              <div class="list_block-2"><div class="list_block-line"/></div> 
            </div>
            {/* { BLOCK 3 } */}
            <div class="list-container-1">
              <div class="list_block-1">
                <div class="list_block-text">Site without Horn ads</div>
                <InfoIcon sx={{ color: grey[500]}} style={{marginRight: 15}}/>
              </div>
              <div class="list_block-2"><span/></div>
              <div class="list_block-2 add_for-price_container-2"><span/></div>
              <div class="list_block-2"><span/></div>
              <div class="list_block-2"><div class="list_block-line"/></div> 
            </div>
            {/* { BLOCK 4 } */}
            <div class="list-container-1">
              <div class="list_block-1">
                <div class="list_block-text">Free SSL certificate</div>
                <InfoIcon sx={{ color: grey[500]}} style={{marginRight: 15}}/>
              </div>
              <div class="list_block-2"><span/></div>
              <div class="list_block-2 add_for-price_container-2"><span/></div>
              <div class="list_block-2"><span/></div>
              <div class="list_block-2"><span/></div>
            </div>
            {/* { BLOCK 5 } */}
            <div class="list-container-1">
              <div class="list_block-1">
                <div class="list_block-text">Capacity</div>
                <InfoIcon sx={{ color: grey[500]}} style={{marginRight: 15}}/>
              </div>
              <div class="list_block-2"><div>Unlimited</div></div>
              <div class="list_block-2 add_for-price_container-2"><div>Unlimited</div></div>
              <div class="list_block-2"><div>2 GB</div></div>
              <div class="list_block-2"><div>1 GB</div></div>
            </div>
            {/* { BLOCK 6 } */}
            <div class="list-container-1">
              <div class="list_block-1">
                <div class="list_block-text">Refuge</div>
                <InfoIcon sx={{ color: grey[500]}} style={{marginRight: 15}}/>
              </div>
              <div class="list_block-2">35 GB</div>
              <div class="list_block-2 add_for-price_container-2">10 GB</div>
              <div class="list_block-2">3 GB</div>
              <div class="list_block-2">500 Mb</div>
            </div>
            {/* { BLOCK 7 } */}
            <div class="list-container-1">
              <div class="list_block-1">
                <div class="list_block-text">Hours of video</div>
                <InfoIcon sx={{ color: grey[500]}} style={{marginRight: 15}}/>
              </div>
              <div class="list_block-2">5 hours</div>
              <div class="list_block-2 add_for-price_container-2">1:00</div>
              <div class="list_block-2">30 minutes</div>
              <div class="list_block-2"><div class="list_block-line"/></div>
            </div>
          </div>
        </div> 
      </div>
    </div>  
  );
}

export default Subscriptions;
