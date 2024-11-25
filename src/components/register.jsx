import '../styles/register.scss'
import face from '../assets/face.png'
import playstore from '../assets/playstore.png'
import msStore from '../assets/msStore.png'
import { Link } from 'react-router-dom'

function Register() {
    return (
        <div id="style">
            <div className="total">
                <h1>Instagram</h1>
                <p class="width">Sign up to see photos and videos from your friends.</p>
                <div className='button'>
                    <button className='as'><img className='size' src={face} alt="" /> log in with facebook</button>
                </div>
                <div class="or">
                    <hr />
                    <p>OR</p>
                    <hr />
                </div>
                <div className="user">
                    <input type="text" placeholder='mobile number or email' className='a' />
                    <input type="text" placeholder='password' className='b' />
                    <input type="text" placeholder='fullname' className='c' />
                    <input type="text" placeholder='username' className='d' />
                </div>
                <p className='ps'>
                    People who use our service may have uploaded your contact information to Instagram. Learn More
                </p>
                <p className='psd'>
                    By signing up, you agree to our Terms , Privacy Policy and Cookies Policy .
                </p>
                <div className='signin'>
                    <button className='sign'>sign up</button>
                </div>
            </div>
            <div className='log'>
                <p className='have'>have on account?<Link to="/login"> <span>log in</span></Link></p>
            </div>
            <span className='get'>Get tha app</span>
            <div>
                <img src={playstore} alt="" className='pic' />
                <img src={msStore} alt="" className='pics' />
            </div>

            <div className="footer">

                <ul>
                    <li>Meta</li>
                    <li>About</li>
                    <li>Blog</li>
                    <li>Jobs</li>
                    <li>Help</li>
                    <li>API</li>
                    <li>Privacy</li>
                    <li>Terms</li>
                    <li>Locations</li>
                    <li>Instagram Lite</li>
                    <li>Threads</li>
                    <li>Contact Uploading & Non-Users</li>
                    <li>Meta Verified</li>
                </ul>
                <div className="copy">
                    <span>English</span>
                    <span>© 2024 Instagram from Meta</span>
                </div>
            </div>








        </div>
    )
}
export default Register;