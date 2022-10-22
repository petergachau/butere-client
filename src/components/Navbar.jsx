import { CartIcon } from '../icons';
import { useSelector } from 'react-redux';
import {BsFacebook ,BsTwitter,BsInstagram} from 'react-icons/bs'
import {MdAddIcCall,MdOutgoingMail} from 'react-icons/md'
const Navbar = () => {
  

  return (
    <>
      <nav>
        <div className='nav-center'>
        <div className='icon'>
       <MdAddIcCall/> 0722291695
          
        <MdOutgoingMail/>  butereboys@yahoo.com
          </div>
          <div className='social-media'>
          <a href="https://web.facebook.com/profile.php?id=100067064439839">
<BsFacebook/>
          </a>
          <a href="https://web.facebook.com/profile.php?id=100067064439839">
<BsTwitter/>
          </a>
          <a href="nstagram.com/explore/locations/257256154/boys-high-school/">
<BsInstagram/>
          </a>
          </div>
        </div>
      </nav>
    </>
  );
};
export default Navbar;
