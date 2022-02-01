import React , { useEffect} from 'react';
import ReactDOM from 'react-dom';
import Aos from 'aos';
import "aos/dist/aos.css" ;
import './style.scss';


const Animation = () => {
	
	useEffect(()=>{
		Aos.init({duration:1500});
	},[]);
	
return(
  <div>
   <div class="col-1 haeder">
 
    <img src="undraw_Online_learning_re_qw08.png"></img>

    <ul>
     <li><a href="index.html" target="_self">Homepage</a></li>
     <li><a href="" target="_blank">SignUP</a></li>
     <li><a href="" target="_blank">SignIn</a></li>
     <li><a href="#">Help</a></li>
	 
    </ul>
	
	<ul id="smallDeviceMenu">
     <li><a  class="icon" class="dropbtn">
      <i class="fa fa-bars"></i>
         </a>
	 
      <ul>
       <li><a href="#"  target="_self">Homepage</a></li>
       <li><a href="#">SignUP</a></li>
       <li><a href="#">SignIn</a></li>
       <li><a href="#">Help</a></li>
      </ul>
	  
  </li>
  
  </ul>
 
  
   <div class="serchContainer">
   
    <input type="search" name="filter" placeholder="what whould you like to learn.."/> 
	<button type="submit" class="searchButton"><i class="bi bi-search"></i></button>
   </div>
  
  </div>


  <div class="col-2">
 
   <h2>learn have never been this easy</h2>
   
   <div>
    <h3>Search</h3>
    <p>Find skilled tutor according to your criteria</p>
   </div>
  
   <div data-aos="fade-left">
    <h3>Contact</h3>
    <p>Tutor will get back to you within hours</p>
   </div>
  
   <div>
    <h3>Orgnize</h3>
    <p>Easily schedule your lesson with your tutor</p>
   </div>
   
  </div>
  
  
 <div class="col-3">
 
 <h2>Become a greate toutor too</h2>
 
  <div>
   <p>share your knowledge</p>
   <button data-aos="zoom-in">find out more</button>
  </div>
  
  <img src="undraw_teaching_f1cm.svg"></img>
  
 </div>
 
 <div class="col-4">
 
  <p>You can learn anthing</p>
 
  <div>
   <div data-aos="fade-up">
    <h3>languges</h3>
    <a>French</a>
    <a>English</a>
    <a>Spanish</a>
  
    <h3>Homeworks</h3>
    <a>Homeork help</a>
  
    <h3>Sbjects</h3>
    <a>Chemistry</a>
    <a>Algebra</a>
    <a>Mathematics</a>
    <a>Physics</a>
  </div>
  
  <div data-aos="fade-down">
   <h3>Computer</h3>
   <a nowrap>computer basics</a>
   <a>computer programming</a>
  
   <h3>Art</h3>
   <a>Fine art</a>
   <a>drawing</a>
  
   <h3>Sports</h3>
   <a>Sport coach</a>
  </div>
  
   </div>
   
  </div>
  
  
  <div class="col-5">
  
   <div>
   
    <div>
     <h3>About</h3>
     <a href="">Who we are?</a><br></br>
     <a href="">Our values</a><br></br>
     <a href="">Terms & Conditions</a><br></br>
     <a href="">Privacy policy</a><br></br>
     <a href="">Careers</a>
    </div>

    <div>
     <h3>Blog</h3>
     <a href="">blogs</a>
    </div>

    <div>
     <h3>Help</h3>
     <a href="">Help</a><br></br>
     <a href="">Contact</a>
    </div>

  </div>

<hr></hr>

  <div class="icon">
   <i class="bi bi-facebook"></i>
   <i class="bi bi-instagram"></i>
   <i class="bi bi-linkedin"></i>
   <i class="bi bi-telegram"></i>
   <i class="bi bi-twitter"></i>
   <i class="bi bi-whatsapp"></i>
  </div>

 </div>



</div>

);
}

ReactDOM.render( <Animation/> , document.getElementById("row"));


