import React from 'react'

const Footer = () => {
  return (
    <footer className="w-full py-4 mt-8 text-center text-xs text-gray-500 dark:text-gray-400 bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 transition-colors duration-300">
      © {new Date().getFullYear()} MeTube. All rights reserved.
    </footer>
  )
}

export default Footer