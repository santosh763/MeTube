import React from 'react'
import { useSelector } from 'react-redux';
import ButtonList from './ButtonList'
import VedioContainer from './VedioContainer'

const MainContainer = () => {
  const butoonNames = [
    "All", "Trending", "Music", "Live", "Gaming", "News", "Movies", "Fashion", "Learning", "Sports", "Comedy", "Technology", "Podcasts", "Recently Uploaded", "Watched", "Mixes", "Shorts", "Shopping", "Travel", "Education", "Science", "Health", "History", "Documentary"
  ];
    const suggestionNames = [
      "All", "Trending", "Music", "Live", "Gaming", "News", "Movies", "Fashion", "Learning", "Sports", "Comedy", "Technology", "Podcasts", "Recently Uploaded", "Watched", "Mixes", "Shorts", "Shopping", "Travel", "Education", "Science", "Health", "History", "Documentary"
    ];
    const [selected, setSelected] = React.useState('All');
    // Dynamically get sidebar state
    const isSideBarOpen = useSelector(store => store.app.isSlideBarOpen);
  return (
      <div className="flex flex-col m-0 gap-1 overflow-hidden max-w-full">
        {/* Sticky, horizontally scrollable suggestion crumbs */}
        {/* Sticky suggestion bar below header, always visible, horizontally scrollable */}
        <div
          className="fixed z-20 bg-white dark:bg-gray-900 py-2 px-1 md:px-2 border-b border-gray-200 dark:border-gray-800 shadow-sm transition-colors duration-300 max-w-full crumbs-bar"
          style={{
            left: '0',
            right: '0',
            marginLeft: '0',
            width: '100vw',
            maxWidth: '100vw',
            boxSizing: 'border-box',
            // On desktop, offset for sidebar (expanded/collapsed)
            ...(window.innerWidth >= 768 ? (
              isSideBarOpen
                ? { left: '240px', width: 'calc(100vw - 240px)', maxWidth: 'calc(100vw - 240px)', }
                : { left: '64px', width: 'calc(100vw - 64px)', maxWidth: 'calc(100vw - 64px)',  }
            ) : {})
          }}
        >
          <div className="relative">
            {/* Fade left */}
            <div className="pointer-events-none absolute left-0 top-0 h-full w-6 bg-gradient-to-r from-white dark:from-gray-900 to-transparent z-10" />
            {/* Fade right */}
            <div className="pointer-events-none absolute right-0 top-0 h-full w-6 bg-gradient-to-l from-white dark:from-gray-900 to-transparent z-10" />
            <div className="flex flex-row gap-2 w-full max-w-full overflow-x-auto no-scrollbar pl-1 pr-2 md:pr-6" style={{ WebkitOverflowScrolling: 'touch', maxWidth: '100vw' }}>
              {suggestionNames.map((item) => (
                <button
                  key={item}
                  className={`flex items-center rounded-lg px-4 py-1 font-medium text-sm border transition-colors duration-200 whitespace-nowrap
                    ${selected === item
                      ? 'bg-gray-900 text-white dark:bg-gray-100 dark:text-gray-900 border-gray-900 dark:border-gray-100 shadow'
                      : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-200 border-gray-200 dark:border-gray-700 hover:bg-gray-200 dark:hover:bg-gray-700'}
                  `}
                  onClick={() => setSelected(item)}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>
        <div className='flex mt-[48px] md:mt-[56px]'>
          <VedioContainer />
        </div>
      </div>
    );
}

export default MainContainer