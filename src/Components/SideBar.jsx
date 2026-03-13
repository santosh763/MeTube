import React, { useState } from 'react'
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import Home from '@mui/icons-material/OtherHouses';
import { useSelector, useDispatch } from 'react-redux';
import { toggleSideBar } from '../utils/appSlice';
import { Link } from 'react-router-dom';


import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import HistoryIcon from '@mui/icons-material/History';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import MovieIcon from '@mui/icons-material/Movie';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import SettingsIcon from '@mui/icons-material/Settings';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';

const SideBar = () => {
  const isSideBarOpen = useSelector(store => store.app.isSlideBarOpen);
  const isSideMenuClose = useSelector(store => store.app.isSideMenuClose);
  const dispatch = useDispatch();
  if (isSideMenuClose) return null;

  // Button data for sidebar
  const mainButtons = [
    { icon: <Home />, label: 'Home', to: '/' },
    { icon: <WhatshotIcon />, label: 'Trending' },
    { icon: <SubscriptionsIcon />, label: 'Subscriptions' },
  ];
  const libraryButtons = [
    { icon: <VideoLibraryIcon />, label: 'Library' },
    { icon: <HistoryIcon />, label: 'History' },
    { icon: <WatchLaterIcon />, label: 'Watch later' },
    { icon: <ThumbUpIcon />, label: 'Liked videos' },
  ];
  const exploreButtons = [
    { icon: <MusicNoteIcon />, label: 'Music' },
    { icon: <SportsEsportsIcon />, label: 'Gaming' },
    { icon: <MovieIcon />, label: 'Movies' },
    { icon: <LiveTvIcon />, label: 'Live' },
  ];

  return (
    <>
      {/* Overlay for mobile only */}
      <div
        className={`fixed inset-0 z-10 bg-black bg-opacity-40 transition-opacity duration-300 md:hidden ${isSideBarOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        aria-hidden="true"
        onClick={() => dispatch(toggleSideBar())}
      />
      <aside
        className={`
          ${isSideBarOpen ? 'w-[240px]' : 'w-[64px]'}
          h-screen pt-16 bg-white dark:bg-gray-900 z-20 border-r border-gray-200 dark:border-gray-800 shadow-lg transition-all duration-300 flex flex-col items-stretch
          md:static md:relative
          ${isSideBarOpen ? '' : ''}
          ${isSideBarOpen ? '' : ''}
          fixed md:relative left-0 top-0
        `}
        style={{ minWidth: isSideBarOpen ? 240 : 64, height: '100vh' }}
      >
        <nav className="flex flex-col gap-2 py-4 w-full">
          {mainButtons.map(btn => btn.to ? (
            <Link to={btn.to} key={btn.label} className="flex items-center gap-4 h-11 px-4 rounded-lg text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
              {btn.icon}
              {isSideBarOpen && <span className="ml-2 text-base font-medium">{btn.label}</span>}
            </Link>
          ) : (
            <div key={btn.label} className="flex items-center gap-4 h-11 px-4 rounded-lg text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors cursor-pointer">
              {btn.icon}
              {isSideBarOpen && <span className="ml-2 text-base font-medium">{btn.label}</span>}
            </div>
          ))}
        </nav>
        {isSideBarOpen && <hr className="my-2 border-gray-200 dark:border-gray-700" />}
        <nav className="flex flex-col gap-2 w-full">
          {isSideBarOpen && libraryButtons.map(btn => (
            <div key={btn.label} className="flex items-center gap-4 h-11 px-4 rounded-lg text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors cursor-pointer">
              {btn.icon}
              <span className="ml-2 text-base font-medium">{btn.label}</span>
            </div>
          ))}
        </nav>
        {isSideBarOpen && <hr className="my-2 border-gray-200 dark:border-gray-700" />}
        <nav className="flex flex-col gap-2 w-full mb-2">
          {isSideBarOpen && exploreButtons.map(btn => (
            <div key={btn.label} className="flex items-center gap-4 h-11 px-4 rounded-lg text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors cursor-pointer">
              {btn.icon}
              <span className="ml-2 text-base font-medium">{btn.label}</span>
            </div>
          ))}
        </nav>
        {isSideBarOpen && <hr className="my-2 border-gray-200 dark:border-gray-700" />}
        <div className="flex-1" />
        {isSideBarOpen && (
          <div className="px-4 pb-4 text-xs text-gray-500 dark:text-gray-400">
            <div className="mb-2">© {new Date().getFullYear()} MeTube</div>
            <div className="flex items-center gap-2"><SettingsIcon className="text-base" /> Settings</div>
          </div>
        )}
      </aside>
    </>
  );
}

export default SideBar