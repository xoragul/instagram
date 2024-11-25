import "../styles/asideRight.scss" 
import avator from '../assets/logo/avator.png'
import arun from'../assets/logo/arun.jpg'
import ragul from'../assets/logo/ragul.jpg'
import rock from'../assets/logo/rock.jpg'
import priya from'../assets/logo/priya.jpg'


export function AsideRight(){

    const recommendedData = [
        {
            img:arun,
            userName:"Arun kumar"
        },
        {
            img:ragul,
            userName:"Ragul"
        },
        {
            img:rock,
            userName:"rock"
        },
        {
            img:priya,
            userName:"priya"
        },
        {
            img:arun,
            userName:"Arun kumar"
        },

    ]
    return (
        <div className="aside-right">
            <div className="top">
                <div className="profileCard">
                    <div className="leftSide">
                        <img src={avator} alt="" />
                        <div className="names">
                            <h5>ragul692024</h5>
                            <span>ragul</span>
                        </div>
                    </div>
                    <div className="rightSide">
                        <p>Switch</p>
                    </div>
                </div>
            </div>
        <div className="gap">
            <h4>Suggested for you</h4>
            <p>See all</p>
        </div>

        <div className="recommended">
            {
                recommendedData.map((data, index)=>(
                <div className="profileCard" key={index}>
                    <div className="leftSide">
                        <img src={data.img} alt="" />
                        <div className="names">
                            <h5>{data.userName}</h5>
                            <span id="recom">Instagram recommended</span>
                        </div>
                    </div>
                    <div className="rightSide">
                        <p>Follow</p>
                    </div>
                </div>
                ))
            }
        </div>
        <div className="detail">
            <ul>
                <li>About</li>
                <li>Help</li>
                <li>Press</li>
                <li>Api</li>
                <li>Job</li>
                <li>Privacy</li>
                <li>Terms</li>
                <li>Locations</li>
                <li>Language</li>
                <li>Meta Verified</li> 
            </ul>
            <div className="bottom">
                <span>© 2024 INSTAGRAM FROM META</span>
            </div>


        </div>




        </div>
    )
}
export default AsideRight;








