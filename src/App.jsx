import Header from './assets/Components/Header'
import React, { Suspense } from 'react'
import './App.css'
import Layout from './assets/Components/Layout.jsx';
const Footer =React.lazy(()=>import ('./assets/Components/Footer.jsx'));
import { BrowserRouter, BrowserRouter as Router } from 'react-router-dom'
import { ThemeContextProvider } from './assets/Context/ThemeContext'
const Components=React.lazy(()=>import ('./assets/Components/Components.jsx'));
const Home=React.lazy(()=>import ('./assets/Components/Home.jsx'))
const Form=React.lazy(()=>import ('./assets/Components/Form'));
const Courses=React.lazy(()=> import ('./assets/Components/Courses.jsx'))
import { useState } from 'react'
import {ToastContainer} from 'react-toastify'
import { Routes } from 'react-router-dom'
import { Route } from 'react-router'
function App(){
  const [DarkTheme,setDarkTheme]=useState(false);
  function values(color1,color2,color3,color4){
  return {
    backgroundColor:DarkTheme ? color1 : color2,
    color:DarkTheme ? color3 : color4
  }
  }
  const toggleTheme=()=>{
    setDarkTheme(!DarkTheme)
  }

  return (
<>
<ThemeContextProvider value={{values,DarkTheme,toggleTheme}} >
<Router>
  <Suspense fallback={<div className='Loader'><div aria-label="Orange and tan hamster running in a metal wheel" role="img" class="wheel-and-hamster">
	<div class="wheel"></div>
	<div class="hamster">
		<div class="hamster__body">
			<div class="hamster__head">
				<div class="hamster__ear"></div>
				<div class="hamster__eye"></div>
				<div class="hamster__nose"></div>
			</div>
			<div class="hamster__limb hamster__limb--fr"></div>
			<div class="hamster__limb hamster__limb--fl"></div>
			<div class="hamster__limb hamster__limb--br"></div>
			<div class="hamster__limb hamster__limb--bl"></div>
			<div class="hamster__tail"></div>
		</div>
	</div>
	<div class="spoke"></div>
</div></div>}>
       <ToastContainer theme='colored'/>
<Routes>
<Route path='/Home' element={<Layout/>}> 
<Route index element={<Home/>}/>
</Route>
<Route path='/' element={<Layout/>}>
<Route index element={<Components/>}/>
</Route>
<Route path='/Courses' element={<Layout/>}>
<Route index element={<Courses/>}/>
</Route>
<Route path='/Contact' element={<Layout/>}>
<Route index element={<Form/>}/>
</Route>
<Route path='/About' element={<Layout/>}>
<Route index element={<Home/>}/>
</Route>
</Routes>
</Suspense>
  </Router>
  </ThemeContextProvider>
    </>
  )
}
export default App;
