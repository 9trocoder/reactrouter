import React, {useState} from 'react';
import { Link} from 'react-router-dom';

// import {Redirect} from 'react-router-dom;

const About = (props) => {
    const [redir,setRedirect] = useState(false);

    const redirect = () => {
        if(redir) {
            // note if you don't want to use redirect, you can use this
                props.history.push('/services');

            // use redirect.
            // return (
                
            //     // <Redirect  to="/services" />
            // )
        }
    }

    return (
      <>
        {redirect()}
        <Link to={{
            pathname:`${props.match.url}/services`
        }}>
            About our services
        </Link>
        <hr />
        <button type="button" className="btn btn-outline-primary" onClick={()=> setRedirect(true)}>
            Redirect
        </button>
      </>
    );
  }
  
  export default About;