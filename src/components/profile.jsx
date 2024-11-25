import'../styles/profile.scss'
import user from'../assets/profile/user.png'
import camera from'../assets/profile/camera.png'
import settings from'../assets/profile/settings.png'
import add from'../assets/profile/add.png'
import gird from'../assets/profile/gird.png'
import save from'../assets/profile/save.png'
import profile from'../assets/profile/profile.png'
import { Outlet, Link } from 'react-router-dom'

function Profile(){
    return(
        <div  className='profile'>
            <div className="profile-Top">
                <div className="profile-Card">
                    <div className="leftphoto">
                        <img src={user} />
                        <img id='camera'src={camera}/>
                    </div>
                    <div className="rightphoto">
                        <div className="profile_line1 profile_lines">
                            <p>ragul692024</p>
                            <p className='btn'><b>Edit profile</b></p>
                            <p className='btn'><b>view archive</b></p>
                            <img src={settings} alt="" />
                        </div>
                        <div className="profile_line2 profile_lines">
                            <p><b>10</b> post</p>
                            <p><b>1m</b> followers</p>
                            <p><b></b>folloing</p>
                        </div>
                        <div className="profile_line3 profile_lines">
                            <p><b>Ragul</b></p>
                        </div>
                    </div>
                </div>
                <div className="add-Story-highlights">
                  <div className="border">
                    <img src={add} alt="" />
                    <p>New</p>
                  </div>
                </div>
           
            </div>
            <div className="profile-bottom">
                <p><img src={gird} alt="" /><b><Link to={""}>Post</Link></b></p>
                <p><img src={save} alt="" /><b><Link to={"save"}>Saved</Link></b></p>
                <p><img src={profile} alt="" /><b><Link to={"tagged"}>Tagged</Link></b></p>

            </div>
            <div className="profile-outlet">
                <Outlet />
            </div>
            <div className="profile-footer">
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
            </div>
            <div className="profile-footers">
                    <span>English</span>
                    <span>© 2024 Instagram from Meta</span>
                </div>
        </div>


    )
}
export default Profile;











