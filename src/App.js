import './App.css';
import React,{useState} from 'react';
import $ from 'jquery'
import "bootstrap/dist/css/bootstrap.min.css"
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckSquare } from '@fortawesome/free-solid-svg-icons'


function App() {

 const [Show,setShow] = useState(false)
  // console.log('dropdown',$dropdown)
  // console.log('dropdown',$dropdownToggle)
  // console.log('dropdown',$dropdownMenu)
  
  $(window).on("load resize", function() {

  const $dropdown = $('.dropdown')
  const $dropdownToggle = $(".dropdown-toggle");
  const $dropdownMenu = $(".dropdown-menu");


  // if (this.matchMedia("(max-width: 1000px)").matches) {
 
  //   $dropdown.on("click", function(){
   


       
  //      if($this.hasClass('show') === true) {
                  
  //                 console.log('hit')
  //                    const $this = $(this);
  //                 $this.removeClass('show')
  //                 $this.find($dropdownToggle).attr("aria-expanded", "false");
  //                 $this.find($dropdownMenu).removeClass('show');
 
  //      }

  //      else{

  //            console.log('f') 
  //                    $this.addClass('show')
  //       $this.find($dropdownToggle).attr("aria-expanded", "true");
  //       $this.find($dropdownMenu).addClass('show');       
  //      }
      //  else{
     
      //   $this.addClass('show')
      //   $this.find($dropdownToggle).attr("aria-expanded", "true");
      //   $this.find($dropdownMenu).addClass('show');
         
      //  }

  // })


  // }



  if (this.matchMedia("(min-height: 400px)").matches) {

   console.log('crossing')

  }

  else{

    console.log('not crossing')

  }


  

    if (this.matchMedia("(min-width: 768px)").matches) {
      console.log('outside 768px')
      //  const fn1=()=>{
      //  }

      //  const fn2=()=>{
      //  }
      const $dropdown = $(".dropdown");
      $dropdown.on("mouseenter", function(){
        const $this = $(this);
        $this.addClass('show')
        $this.find($dropdownToggle).addClass('rotate')
        $this.find($dropdownToggle).attr("aria-expanded", "true");
        $this.find($dropdownMenu).addClass('show');
      }).on("mouseleave", function(){
        const $this = $(this);
        $this.removeClass('show');
        $this.find($dropdownToggle).removeClass('rotate')
        $this.find($dropdownToggle).attr("aria-expanded", "false");
        $this.find($dropdownMenu).removeClass('show');
      })

    }

     else {
      $dropdown.off("mouseenter mouseleave");
    }


  })

      // console.log('inside',$dropdown)



           
      // $dropdown.addClass('show')
      // $dropdown.find($dropdownToggle).attr("aria-expanded", "true");
      // $dropdown.find($dropdownMenu).addClass('show');

        // function1() {
        //   const $this = $(this);
        //   $this.addClass(showClass);
        //   $this.find($dropdownToggle).attr("aria-expanded", "true");
        //   $this.find($dropdownMenu).addClass(showClass);
        // },
        // function() {
        //   const $this = $(this);
        //   $this.removeClass(showClass);
        //   $this.find($dropdownToggle).attr("aria-expanded", "false");
        //   $this.find($dropdownMenu).removeClass(showClass);
        // }
      // );

    // } else {
    //   $dropdown.off("mouseenter mouseleave");
    // }
  // });


  return (
    <div className="App">
         <div className="navigation-wrapper">
                <div className={Show ? 'navigation show' : 'navigation'}>
                     <div className="first-box">
                
                  
                       <div onClick={()=>setShow(!Show)}  className={Show  ?'navbar-toggle-icon show' : 'navbar-toggle-icon'}>
                            <div className="line"></div>
                            <div className="line"></div>
                            <div className="line"></div>
                       </div>
                
               
                     <div className="input">
                       <input type="text" name="" id="" placeholder="what would you like to learn?" />
                     </div>
                     </div> 
                     <div className="second-box">
                       <div className="links">  
                        <li class="nav-item dropdown" >
                       <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown2" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                       All courses
                       </a>
                       <div class="dropdown-menu" aria-labelledby="navbarDropdown2">
                         <a class="dropdown-item" href="#">Action action action action</a>
                         <a class="dropdown-item" href="#">Another action action action</a>
                         <a class="dropdown-item" href="#">Action action action</a>
                         <a class="dropdown-item" href="#">Another action action action</a>
                         <a class="dropdown-item" href="#">Action action action</a>
                         <div class="dropdown-divider"></div>
                         <a class="dropdown-item" href="#">Something else here</a>
                       </div>
                     </li>
                        <li class="nav-item dropdown" >
                       <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown2" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                       All courses
                       </a>
                       <div class="dropdown-menu" aria-labelledby="navbarDropdown2">
                         <a class="dropdown-item" href="#">Overview</a>
                         <a class="dropdown-item" href="#">Compare plans</a>
                         <a class="dropdown-item" href="#">Our products</a>
                         <a class="dropdown-item" href="#">Team Pricing</a>
          
                       </div>
                     </li>

                     <li class="nav-item"> <a href="" class="nav-link"> Log in </a> </li>  <button className="get-started">Get started</button></div>
                     </div>
                </div>
                <div className="header-content text-center">  
                    <h1>Matching order</h1>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus tempore similique itaque laboriosam labore!</p>
                </div>
         </div>
          <div className="my-breadcrumb">
          <div className="sharing">  <a href=""><div className="icon"><FontAwesomeIcon  icon={faCheckSquare}/></div></a> <a href=""><div className="icon"><FontAwesomeIcon  icon={faCheckSquare}/></div></a> <a href=""><div className="icon"><FontAwesomeIcon  icon={faCheckSquare}/></div></a> <a href=""><div className="icon"><FontAwesomeIcon  icon={faCheckSquare}/></div></a> <a href=""><div className="icon"><FontAwesomeIcon  icon={faCheckSquare}/></div></a>
          </div>
          <div className="box">
          <nav className="style" aria-label="breadcrumb">
          <ol class="breadcrumb">
            <li class="breadcrumb-item"><a href="#">Home</a></li>
            <li class="breadcrumb-item" aria-current="page"><a href=""> Resources</a></li>
            <li class="breadcrumb-item"><a href="#">Knowledge</a></li>
            <li class="breadcrumb-item" aria-current="page"><a href="">Trading and Investing</a></li>
            <li class="breadcrumb-item active" aria-current="page"><a href="">Matching order</a></li>
          </ol>
        </nav>
          </div>
          <div className="content">
              <h2>what is matching order?</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam dicta tenetur dignissimos expedita a totam. Aliquam hic, voluptatum voluptatem quos accusantium at impedit ad exercitationem! Quo quasi aperiam facere voluptate?</p>
              <div className="img-box">
                 <img src="" alt="" />
              </div>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta natus odit quam vel est, autem perferendis! Quos atque eaque alias nemo corrupti ipsum molestias, tenetur aut exercitationem quaerat aperiam tempora.
              Repellat, enim distinctio quasi dolore praesentium explicabo, aliquam quam aliquid, et rem nesciunt a maxime perferendis molestias reprehenderit quidem maiores labore quod unde obcaecati ipsam totam? Provident officiis ducimus placeat.</p>
         
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta natus odit quam vel est, autem perferendis! Quos atque eaque alias nemo corrupti ipsum molestias, tenetur aut exercitationem quaerat aperiam tempora.
              Repellat, enim distinctio quasi dolore praesentium explicabo, aliquam quam aliquid, et rem nesciunt a maxime perferendis molestias reprehenderit quidem maiores labore quod unde obcaecati ipsam totam? Provident officiis ducimus placeat.</p>
         
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>

              <div className="summary-box">
                 <h3>Summary</h3>
                 <ul>
                   <li><strong>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est sit perspiciatis enim quasi accusamus?</strong></li>
                
                   <li><strong>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est sit perspiciatis enim quasi accusamus?</strong></li>
                
                   <li><strong>Lorem ipsum dolor sit amet <span><a href=""> link</a> </span> adipisicing elit. Est sit perspiciatis enim quasi accusamus?</strong></li>
                
                   </ul>
              </div>

              <h3>process of matching order</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi eum esse placeat est pariatur laudantium dignissimos tenetur. Quia eligendi necessitatibus, magni atque natus corporis!</p>
            
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi eum esse placeat est pariatur laudantium dignissimos tenetur. Quia eligendi necessitatibus, magni atque natus corporis!</p>
            
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi eum esse placeat est pariatur laudantium dignissimos tenetur. Quia eligendi necessitatibus, magni atque natus corporis!</p>
            
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum eligendi, sequi unde sit ipsa tempora pariatur.</p>
             
               <h3>Matching oder algoriths</h3>

               <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis nostrum laudantium quidem. Officia doloribus perspiciatis alias debitis corporis ab in voluptas, exercitationem accusamus qui maiores inventore velit animi modi vitae, similique doloremque amet repellat?</p>
                
               <p>Lorem ipsum dolor, sit amet consectetur <span><a href=""> link</a> </span> adipisicing elit. At, asperiores.</p>
               

               <h4>1 .First in first out</h4>

               <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos accusantium harum impedit magnam quidem temporibus accusamus et earum, aspernatur unde modi molestiae. Quisquam, fuga deleniti fugit ut blanditiis officia modi.</p>
              
               <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores quas atque soluta temporibus recusandae fugit harum ex aspernatur.</p>
             
               <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, cum?</p>
              
               <h4>2 .First in first out</h4>

               <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos accusantium harum impedit magnam quidem temporibus accusamus et earum, aspernatur unde modi molestiae. Quisquam, fuga deleniti fugit ut blanditiis officia modi.</p>
              
               <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores quas atque soluta temporibus recusandae fugit harum ex aspernatur.</p>
             
               <p>Lorem ipsum dolor sit amet <span><a href=""> link</a> </span> consectetur adipisicing elit. Dolores, cum?</p>
              
               <strong><span>Related Readings</span></strong>

               <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam tenetur eligendi quod suscipit totam eos deserunt, ullam fugiat delectus qui ratione nisi deleniti repellendus!</p>
              
                <ul >
                  <li><a href="">link</a></li>
                  <li> <a href="">link</a></li>
                  <li><a href="">link</a></li>
                  <li><a href="">link</a></li>
                </ul>

                <h3>Corporate finance training</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque architecto quo recusandae sint deleniti at voluptatibus.</p>
                 <div className="animated-image">
                 
                 </div>

                 <p> <a href="" class="text-decoration">Enroll in CfI's Finance Courses</a></p>
                 <p> to take your career in next level</p>
            

                 <div className="bottom-icon">
                 
                 </div>
                </div>
      
          </div>


          <section className="footer-section">
                <div className="footer-box">
                  <div className="row">
                      <div className="col-lg-3 col-12 col-sm-6"><div className="box">
                      <a rel="stylesheet" href="" >company</a>
                      <a rel="stylesheet" href="" >about</a>
                      <a rel="stylesheet" href="" >meet our team</a>
                      <a rel="stylesheet" href="" >Careers</a>
                      <a rel="stylesheet" href="" >CFI Merch Store</a>
                      <a rel="stylesheet" href="" >Student Reviews</a>
                      <a rel="stylesheet" href="" >Affiliates</a>
                      <a rel="stylesheet" href="" >For Teams</a> </div></div>
                      <div className="col-lg-3 col-12 col-sm-6"><div className="box">
                      <a rel="stylesheet" href="" >certification</a>
                      <a rel="stylesheet" href="" >Financial Modeling & Valuation Analyst (FMVA)®
                      </a>
                      <a rel="stylesheet" href="" >Commercial Banking & Credit Analyst (CBCA)™
                      </a>
                      <a rel="stylesheet" href="" >Capital Markets & Securities Analyst (CMSA)®</a>
                      <a rel="stylesheet" href="" >Commercial Real Estate Finance Specialist</a>
                      <a rel="stylesheet" href="" >Business Intelligence & Data Analyst (BIDA)™</a></div></div>
                     
                      <div className="col-lg-2 col-12 col-sm-4"><div className="box">
                      <a rel="stylesheet" href="" >courses</a>
                      <a rel="stylesheet" href="" >Accounting</a>
                      <a rel="stylesheet" href="" >Excel</a>
                      <a rel="stylesheet" href="" >Finance</a>
                      <a rel="stylesheet" href="" >Finance Modeling</a>
                      </div></div>
                      <div className="col-lg-2 col-12 col-sm-4"><div className="box">
                      <a rel="stylesheet" href="" >support</a>
                      <a rel="stylesheet" href="" >Financial aid</a>
                      <a rel="stylesheet" href="" >1% Pledge</a>
                      <a rel="stylesheet" href="" >Help | faq</a>
                      <a rel="stylesheet" href="" >Contact us</a>
                      <a rel="stylesheet" href="" >Scholarships</a>
                      </div></div>
                      <div className="col-lg-2 col-12 col-sm-4"><div className="box">
                      <a rel="stylesheet" href="" >resources</a>
                      <a rel="stylesheet" href="" >Knowledge Library</a>
                      <a rel="stylesheet" href="" >Templats</a>
                      <a rel="stylesheet" href="" >Jobs and Careers</a>
                      <a rel="stylesheet" href="" >Excel skills</a>
                      <a rel="stylesheet" href="" >eBooks</a>
                      </div></div>
                  </div>
                   <div className="footer-bottom-1">
                     <div className="footer-icons"><div className="icon">logo</div>
                     <div className="icon">logo</div>
                     <div className="icon">logo</div>
                     <div className="icon">logo</div>
                     <div className="icon">logo</div></div>
                   </div>
                   <div className="footer-bottom-2">
                     <div className="copyright">© 2015 to 2021 CFI Education Inc.</div>
                     <div className="wrap-second-box">
                     <div className="social-icons"><a>logo</a><a>logo</a><a>logo</a><a>logo</a></div>
                     <div className="footer-links"><a>Privacy policy </a><a>Terms of use</a><a>Terms of Service</a><a>Legal</a></div>
                 
                     </div>
                  
                     </div>
                </div>
          </section>
     
    </div>
  );
}

export default App;
