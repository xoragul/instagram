import '../styles/sign.scss'
import facebookIcon from '../assets/facebook.png'
import playstore from '../assets/playstore.png'
import msStore from '../assets/msStore.png'
import { Link } from 'react-router-dom'

function Login() {
    return (
        <div id="sign">
            <div className="top">
                <div className="form">

                    <h1>Instagram</h1>
                    <div className="elements">
                        <input type="text" placeholder='Phone number, username, or email' name="" id="" />
                        <input type="text" placeholder='Password' name="" id="" />
                        <button>Log in</button>

                        <div className="or">
                            <hr />
                            <span>or</span>
                            <hr />
                        </div>

                        <div className="login">

                            <img src={facebookIcon} alt="" />
                            <span>Login in with Facebook</span>
                        </div>
                    </div>
                    <span id='forgot'>Forgot password?</span>

                </div>

                <p id='noAccount'>Don't have an account? <Link to="/register"> <span>Sign up</span></Link></p>

                <div className="download">
                    <p>Get the app.</p>
                    <img src={playstore} alt="" className='one' />
                    <img src={msStore} alt="" />

                </div>
            </div>

            <div className="bottom">

                <ul>
                    <li>Meta</li>
                    <li>About</li>
                    <li>Blog</li>
                    <li>Jobs</li>8
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
                <div className="copy-rights">
                    <span>English</span>
                    <span>© 2024 Instagram from Meta</span>
                </div>
            </div>
        </div>
    )
}
export default Login;


