import React from 'react'
import { useTheme } from '../Context/ThemeContext'
import { ThemeContext } from '../Context/ThemeContext'
function Footer() {
  const {values}=useTheme(ThemeContext)
  return (
  <footer style={values('rgb(44, 49, 56)','#072F60','','')}>
<div class="footer">
<div class="row">
<a href="#"><i className="fa-brands fa-facebook"></i></a>
<a href="#"><i className="fa-brands fa-instagram"></i></a>
<a href="#"><i className="fa-brands fa-youtube"></i></a>
<a href="#"><i className="fa-brands fa-twitter"></i></a>
</div>

<div class="row">
<ul>
<li><a href="#">Contact us</a></li>
<li><a href="#">Our Services</a></li>
<li><a href="#">Privacy Policy</a></li>
<li><a href="#">Terms & Conditions</a></li>
<li><a href="#">Career</a></li>
</ul>
</div>

<div class="row">
HassooDev Copyright © 2021 Inferno - All rights reserved || Designed By: Hassoo
</div>
</div>
</footer>
  )
}

export default Footer