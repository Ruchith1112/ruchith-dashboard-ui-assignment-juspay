import styled from "styled-components";

const NavbarWrap = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
border-bottom: 1px solid ${({ isDarkMode }) => (isDarkMode ? '#FFFFFF1A' : '#1C1C1C1A')};
padding: 18px 25px;
background-color: ${({ isDarkMode }) => (isDarkMode ? '#1C1C1C' : 'white')};

@media (max-width: 429px) { 
    flex-direction: column;
    align-items: flex-start; 
    gap: 15px;
  }
`
const NavbarLeftWrap = styled.div`
display: flex;
align-items: center;
gap: 16px;
@media (max-width: 429px) { 
  gap: 20px;
}
`
const NavbarRightWrap = styled.div`
display: flex;
align-items: center;
gap: 16px;
@media (max-width: 429px) { 
  gap: 20px;
}
`
const NavbarCrumbs = styled.div`
font-size: 14px;
font-weight: 400;
cursor: pointer;
color: ${({ isDarkMode }) => (isDarkMode ? '#FFFFFF66' : 'black')};

`
const NavbarIcons = styled.img`
width:17px;
height: 17px;
cursor: pointer;
`

const SearchBar = styled.input`
  padding: 8px 30px; 
  border: none; 
  border-radius: 8px; 
  transition: border-color 0.2s;
  outline: none;
  background-color: ${({ isDarkMode }) => (isDarkMode ? '#FFFFFF1A' : '#1C1C1C0D')};
  &::placeholder {
    color: ${({ isDarkMode }) => (isDarkMode ? '#FFFFFF33' : '#1C1C1C33')};
    opacity: 1; 
  }
`

const SearchIcon = styled.img`
  width: 17px;
  height: 17px;
  position: absolute;
  left: 10px; 
  top: 50%; 
  transform: translateY(-50%); 
  pointer-events: none;
`
const SearchBarWrap = styled.div`
position:relative;
`
const ShortcutDisplay = styled.div`
position: absolute;
  right: 10px; 
  top: 50%; 
  transform: translateY(-50%); 
  pointer-events: none;
  color: ${({ isDarkMode }) => (isDarkMode ? '#FFFFFF33' : '#1C1C1C33')};
`

const NavbarStyles = {
  NavbarWrap,
  NavbarLeftWrap,
  NavbarRightWrap,
  NavbarCrumbs,
  NavbarIcons,
  SearchBar,
  SearchIcon,
  SearchBarWrap,
  ShortcutDisplay
}

export default NavbarStyles;