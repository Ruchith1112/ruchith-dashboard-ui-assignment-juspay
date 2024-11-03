import React, { useEffect, useRef } from 'react'
import NavbarStyles from './NavbarStyled'
import FavIcon from './Images/fav.svg'
import LeftPanelView from './Images/Sidebar.svg'
import ThemeIcon from './Images/theme.svg'
import RecentIcon from './Images/recent.svg'
import NotificationIcon from './Images/notification.svg'
import SearchIconImg from './Images/search.svg'
import FavIconDark from './Images/fav-dark.svg'
import LeftPanelViewDark from './Images/left-panel-dark.svg'
import ThemeIconDark from './Images/theme-dark.svg'
import RecentIconDark from './Images/activity-dark.svg'
import NotificationIconDark from './Images/notification-dark.svg'
import SearchIconImgDark from './Images/search-dark.svg'

function Navbar({ leftPanelView, setLeftPanelView, rightPanelView, setRightPanelView, isMobile, isDarkMode, setIsDarkMode, isOrderList, setIsOrderList }) {
  const searchRef = useRef(null);
  const handleGlobalKeyDown = (event) => {
    if (event.metaKey && event.key === '/') {
      event.preventDefault();
      if (searchRef.current) {
        searchRef.current.focus();
      }
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleGlobalKeyDown);
    return () => {
      window.removeEventListener('keydown', handleGlobalKeyDown);
    };
  }, []);

  const handleLeftPanelToggle = () => {
    if (isMobile) {
      setLeftPanelView(!leftPanelView);
      if (!leftPanelView) {
        setRightPanelView(false);
      }
    } else {
      setLeftPanelView(!leftPanelView);
    }
  };

  const handleRightPanelToggle = () => {
    if (isMobile) {
      setRightPanelView(!rightPanelView);
      if (!rightPanelView) {
        setLeftPanelView(false);
      }
    } else {
      setRightPanelView(!rightPanelView);
    }
  };

  const handleDarkMode = () => {
    setIsDarkMode(!isDarkMode)
  }

  const toggleViews = () => {
    setIsOrderList(!isOrderList)
  }

  return (
    <NavbarStyles.NavbarWrap isDarkMode={isDarkMode} >
      <NavbarStyles.NavbarLeftWrap>
        <NavbarStyles.NavbarIcons onClick={handleLeftPanelToggle} src={isDarkMode ? LeftPanelViewDark : LeftPanelView} alt='left-view' />
        <NavbarStyles.NavbarIcons src={isDarkMode ? FavIconDark : FavIcon} alt='fav' />
        <NavbarStyles.NavbarCrumbs isDarkMode={isDarkMode} style={{ opacity: "0.8" }}>Dashboards</NavbarStyles.NavbarCrumbs>
        <NavbarStyles.NavbarCrumbs isDarkMode={isDarkMode} style={{ opacity: "0.8" }}>/</NavbarStyles.NavbarCrumbs>
        <NavbarStyles.NavbarCrumbs isDarkMode={isDarkMode} style={{ color: isDarkMode ? "#FFFFFF" : "" }}>Default</NavbarStyles.NavbarCrumbs>
        <NavbarStyles.NavbarCrumbs isDarkMode={isDarkMode} onClick={toggleViews} style={{ color: isDarkMode ? "#FFFFFF" : "", textDecoration: 'underline' }}>{isOrderList ? "Default View" : "Orders List"}</NavbarStyles.NavbarCrumbs>
      </NavbarStyles.NavbarLeftWrap>
      <NavbarStyles.NavbarRightWrap>

        <NavbarStyles.SearchBarWrap>
          <NavbarStyles.SearchIcon src={isDarkMode ? SearchIconImgDark : SearchIconImg} alt='search' />
          <NavbarStyles.SearchBar
            isDarkMode={isDarkMode}
            ref={searchRef}
            type='text'
            placeholder='Search'
          />
          <NavbarStyles.ShortcutDisplay isDarkMode={isDarkMode}>⌘ /</NavbarStyles.ShortcutDisplay>
        </NavbarStyles.SearchBarWrap>
        <NavbarStyles.NavbarIcons onClick={handleDarkMode} src={isDarkMode ? ThemeIconDark : ThemeIcon} alt='nav-icon' />
        <NavbarStyles.NavbarIcons onClick={handleRightPanelToggle} src={isDarkMode ? RecentIconDark : RecentIcon} alt='nav-icon' />
        <NavbarStyles.NavbarIcons onClick={handleRightPanelToggle} src={isDarkMode ? NotificationIconDark : NotificationIcon} alt='nav-icon' />
        <NavbarStyles.NavbarIcons onClick={handleRightPanelToggle} src={isDarkMode ? LeftPanelViewDark : LeftPanelView} alt='nav-icon' />
      </NavbarStyles.NavbarRightWrap>
    </NavbarStyles.NavbarWrap>
  )
}

export default Navbar