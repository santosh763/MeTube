import './App.css'
import Footer from './Components/Footer'
import Header from './Components/Header'
import Body from './Components/Body'
import { Provider } from 'react-redux'
import {store} from "./utils/store"
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import WatchPage from './Components/WatchPage'
import MainContainer from './Components/MainContainer'
import React, { useState, useEffect } from 'react';


function App() {
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('theme') === 'dark';
    }
    return false;
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Body />,
      children: [
        {
          path: "/",
          element: <MainContainer />
        },
        {
          path: "watch",
          element: <WatchPage />
        }
      ]
    }
  ]);

  return (
    <Provider store={store}>
      <div
        className="min-h-screen px-0 flex flex-col bg-gray-50 dark:bg-gray-900 transition-colors duration-300"
        style={{
          // Responsive sidebar width: 240px expanded, 64px collapsed
          '--sidebar-width': window.innerWidth >= 768 ? (JSON.parse(localStorage.getItem('sidebarOpen') ?? 'true') ? '240px' : '64px') : '64px'
        }}
      >
        <Header darkMode={darkMode} setDarkMode={setDarkMode} />
        <RouterProvider router={appRouter} />
        <Footer />
      </div>
    </Provider>
  );
}

export default App
