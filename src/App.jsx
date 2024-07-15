import './App.css'
import Footer from './Components/Footer'
import Header from './Components/Header'
import Body from './Components/Body'
import { Provider } from 'react-redux'
import {store} from "./utils/store"
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import WatchPage from './Components/WatchPage'
import MainContainer from './Components/MainContainer'
function App() {
const appRouter=createBrowserRouter([
  {
    path:"/",
    element:<Body/>,
    children:[
      {
        path:"/",
        element:<MainContainer />
      },
      {
        path:"watch",
        element:<WatchPage />
      }
    ]
  }
])
  return (
    <Provider store={store}>
    <div className='px-5 flex flex-col'>
     <Header/>
     <RouterProvider router={appRouter}/>
     <Footer/>
    </div>
    </Provider>
  )
}

export default App
