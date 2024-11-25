import "../styles/accountTagged.scss"
import profile from"../assets/profile/profile.png"

function AccountTagged(){
    return(
        <div className="account-Tagged">
            <div className="tagged">
                <div className="img-border">
                  <img src={profile} alt="" />
                </div>
                <div className="content">
                  <p className="para"><b>photos of you</b></p>
                  <p>When people tag you in photos, they'll appear here.</p>
                </div>
            </div>
        </div>
    )
}

export default AccountTagged;