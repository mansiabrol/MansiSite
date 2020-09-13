import React,{Component} from 'react'
class Header extends Component{
    render(){
return (
<div class="container-fluid">
	<nav class="navbar navbar-expand-lg navbar-light">
  <a class="navbar-brand" href="#">
    <img src="images/logo.png" alt=""/>

    </a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
<div class="collapse navbar-collapse" id="navbarTogglerDemo02">
    <ul class="navbar-nav ml-auto mt-2 mt-lg-0">
      <li class="nav-item active">
        <a class="nav-link" href="#">About us <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">How It Works</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Pricing</a>
      </li>
	   <li class="nav-item">
        <a class="nav-link loginBtn" href="#">LOGIN</a>
      </li>
    </ul>
    </div>
	</nav>
	</div>
 )   
}


}
export default Header