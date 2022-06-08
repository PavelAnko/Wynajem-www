import React from 'react';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import '../style/templates.css'
import Types from '../components/Types';

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

const Templates = () => {
  return (
    <div class='templates'>
      {/* Intro */}
      <div class='templates_intro'>
        <div class='templates_intro-container'>
          <div class='templates_intro-text'>Choose a site template that you like</div>
          <div class='templates_intro-search'>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              // style={{width: 300}}
              placeholder="Search ..."
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
          <div class='templates_border-search'/>
        </div>
        </div>
        <div class='templates_border'/>
        <div class='templates_buttons-container'>
          <div class='templates_buttons'>
            <div class='templates_intro-button-text'>All templates<i class="down"/></div>
            <div class='templates_intro-button-text'>Blank templates<i class="down"/></div>
            <div class='templates_intro-button-text'>Other<i class="down"/></div>
          </div>
        </div>
        <div class='templates_border-buttons'/>
      </div>
      {/* Main body */}
      <div class='template_main-body'>
        <Types/>
      </div>
    </div>
  );
}

export default Templates;
