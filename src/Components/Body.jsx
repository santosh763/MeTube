import React from 'react'
import MainContainer from './MainContainer'
import SideBar from './SideBar'
import { Outlet } from 'react-router-dom'


const Body = () => {
  // Responsive: add left margin to main content so header/crumbs/content never hide under sidebar
  // Use CSS classes to match sidebar width in both expanded and collapsed states
  // Use flex row, sidebar is static width, main content fills remaining space, never overlaps
  return (
    <div className="flex flex-row min-h-[calc(100vh-64px)] w-full bg-gray-50 dark:bg-gray-900 transition-colors duration-300 overflow-x-hidden">
      {/* Sidebar only on md and up */}
      <div className="hidden md:block">
        <SideBar />
      </div>
      <main className="flex-1 px-1 md:px-3 pt-0 transition-all duration-300 w-full min-w-0">
        <Outlet />
      </main>
    </div>
  )
}

export default Body