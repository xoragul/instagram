import "../styles/accountSave.scss"
import profilesave from"../assets/profilesave/save.png"

function AccountPost(){
    return(
        <div className="Account-save">
            <div className="save">
                <div className="save-left">
                  <p>Only you can see what you've saved</p>
                </div>
                <div className="save-right">
                    <p>+New collection</p>
                </div>
            </div>

            <div className="save-center">
                <div className="img-border">
                 <img src={profilesave} alt="" />
                </div>
                <p className="save-paragraph"><b>Save</b></p>
                <p className="para">Save photos and videos that you want to see again. No one is notified, and only you can see what you've saved.</p>
            </div>
        </div>
    )
}

export default AccountPost;