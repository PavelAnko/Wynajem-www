import React from 'react';
import '../style/bages.css';

import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const Bages = () => {
  return (
    <div class='bages'>
      <div class="fixed-title">
        <div class="title-1">
          <a class="href-title" href='/bages'>
            <div class="thenorthpole">
              <div class="the">
                THE
              </div>
              <div class="northpole">
                NORTHPOLE
              </div>
            </div>
          </a>
        </div>
        <div class="title-2">
          <div class="s-a-f-c">
            <div class="shop">
              SHOP
            </div>
            <div class="about">
              ABOUT
            </div>
            <div class="forum">
              FORUM
            </div>
            <div class="contact">
              CONTACT
            </div>          
          </div>
          <div class="search">  
            <SearchIcon />                              
          </div>
          <div class="log-in"></div>
          <div class="basket"></div>
        </div>
      </div> 
      <div class="fixed-link">
        <div class="link-icon">
          <a href="https://www.facebook.com/"><div class="link-facebook"></div></a>
          <a href="https://www.youtube.com/"><div class="link-youtube"></div></a>
          <a href="https://www.instagram.com/"><div class="link-instagram"></div></a>
        </div>
        
      </div>
      <div class="front-img">
        <div class="img-info">
          <div class="img-title">PLAN YOUR ADVENTURE</div>
          <div class="shop-now-1">SHOP NOW</div>
        </div>
      </div> 
      <div class="second-page">
        <div class="page-2-title">
          <div class="new-arrivals">NEW ARRIVALS</div>
          <div class="shop-now-2">SHOP NOW</div>
        </div>
        <div class="bag"></div>
      </div>
      <div class="b-d-t">
        <div class="backpacks">
          <a class="href" href="1">
            <div class="href-img">BACKPACKS</div>
          </a>
        </div>
        <div class="duffle-bags">
          <a class="href" href="2">
            <div class="href-img">BUFFLE BAGS</div>
          </a>
        </div>
        <div class="travel-packs"> 
          <a class="href" href="3">
            <div class="href-img">TRAVEL PACKS</div>             
          </a>  
        </div> 
      </div>
      <div class="bags-3">
      </div>       
    </div>
  );
}

export default Bages;
