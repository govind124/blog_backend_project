
// import { hover } from '@testing-library/user-event/dist/hover';
import React from 'react'
import { Link } from 'react-router-dom'
import '../Article/singlePage.css'

const Nav = () => {
  
  return (
      <div>
        
        <div className='nav'>
         <ul>
             <h4><li><Link style={{color : "brown",border:"2px solid green", textDecoration : "none"}} to ="/">Home</Link></li></h4>
             <h4><li><Link style={{color : "brown",border:"2px solid green", textDecoration : "none"}} to="/bollywood" >Bollywood</Link></li></h4>
             <h4><li><Link style={{color : "brown",border:"2px solid green", textDecoration : "none"}} to="/technology">Technology</Link></li></h4>
             <h4><li><Link style={{color : "brown",border:"2px solid green", textDecoration : "none"}} to="/hollywood">Hollywood</Link></li></h4>
             <h4><li><Link style={{color : "brown",border:"2px solid green", textDecoration : "none"}} to="/fitness">Fitness</Link></li></h4>
             <h4><li><Link style={{color : "brown",border:"2px solid green", textDecoration : "none"}} to="/food">Food</Link></li></h4>
         </ul>
     </div>
    
    </div>
  )
}

export default Nav;