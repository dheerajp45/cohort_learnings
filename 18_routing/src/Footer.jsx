import {Link} from 'react-router-dom'

      function Footer() {
        return <div style={{ backgroundColor:'red'}}>
        <b><center>this is the footer
        go to home <br />
        <Link to="/">Go to Home</Link></center></b>   </div>     
      }

      export {Footer}