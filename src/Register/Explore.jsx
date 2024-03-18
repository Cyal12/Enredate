import React from 'react'
import { Link } from 'react-router-dom'

const Explore = () => {
  return (
    <div>
      <body>
        <div class="circle-container">
            <div class="circle large"></div>
            <div class="circle small"></div>
        </div>

        <div class="content">
            <div className='enredate'>
              <h1>ENRÉDATE</h1>
              <small>RED DE NEGOCIOS ENTRE PADRES DE FAMILIA</small>
            </div>

        <div className='text'>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi moecenas quis interdum enim anim molestie faucibus. Pretium non non massa eros, nunc, urna. Ac lorem sagittis donec vel. Amet, duis justo, quam quisque egestas. Quam enim at dictum condimentum. Suspendisse.</p>
        </div>
          
        <Link to="/createAccount">
          <button>Comencemos</button>
        </Link>
        </div>
      </body>
    </div>
  )
}

export default Explore
