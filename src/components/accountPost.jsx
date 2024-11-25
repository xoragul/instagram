import "../styles/accountPost.scss"
import camera from "../assets/divs/camera.png"
import phone from "../assets/divs/phone.png"

function AccountPost(){
    const accountData=[
        {
            img:camera,
            title:"Share Photos",
            desc:"When you share photos, they will appear on your profile.",
            button:"Share your first photo"
        },
        {
            img:phone,
            title:"Add phone number",
            desc:"Add your phone number so you can reset your password, find friends and more.",
            button:"Add phone number",
        },
        {
            img:camera,
            title:"Add profile photos",
            desc:"Add a profile photo so your friends know it's you.",
            button:"Add profile photo",
        }
    ]
    return(
        <div className="accountPost">
            <div className="divs">
                <h3>Getting Started</h3>

                <div className="account-empty-content">
                    {
                        accountData.map((data, index)=>(
                            <div className="container">
                                <div className="con-top">
                                    <img src={data.img} alt="" />
                                    <h4>{data.title}</h4>
                                    <p>{data.desc}</p>
                                </div>
                                <button>{data.button}</button>
                          </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )

}
export default AccountPost;