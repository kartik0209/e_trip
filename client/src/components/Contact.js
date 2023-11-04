
import Addhotel from '../Admin/Addhotel'
import { Link, useNavigate } from 'react-router-dom';
import Signup from './Signup';
const  Contact =()=>{
  
    const history = useNavigate();
    const reg=()=>{
      history("./Signup.js");
    }
    return (
      <div><Addhotel/>
      <Link to="/signup">new</Link>
      </div>
    )
  }



export default Contact