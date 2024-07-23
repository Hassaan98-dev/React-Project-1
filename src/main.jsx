import React, { Children, Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
const Home=React.lazy(()=>import ('./assets/Components/Home.jsx'))
const Form=React.lazy(()=>import ('./assets/Components/Form'));
const Courses=React.lazy(()=> import ('./assets/Components/Courses.jsx'))
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Components from './assets/Components/Components.jsx'
import Fee from './assets/Components/Fee.jsx'
// const router=createBrowserRouter([
//   {path:'/',
//     element:<App/>,
//     children:[
      
//      {
//       path:'/',
//       element:<Components/>
//      },
//      {
    
//       path:'Courses',
//       element:<Courses/>
//       },
//      {
//       path:'Home',
//       element:<Home/>
//      },{
//       path:'Contact',
//       element:<Form/>,
//      },{
//       path:'About',
//       element:<Home/>,
//      }
//     ]
//   }
// ])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
{/* <RouterProvider router={router}/> */}
<App/>
  </React.StrictMode>,
)
