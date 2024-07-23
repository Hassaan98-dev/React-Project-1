import { Suspense } from "react"
import React from "react"
const  Home=React.lazy(()=>  import ("./Home"))
const  Courses=React.lazy(()=> import ("./Courses"))
const Fee=React.lazy(()=> import ("./Fee"))
function Components() {
  return (
    <>
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
    <Home/>
    <Courses/>
    <Fee/>
    </Suspense>
    </>
  )
}

export default Components