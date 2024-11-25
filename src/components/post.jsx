import'../styles/post.scss'
import like from "../assets/heart.png"
import more from "../assets/more.png"
import comment from "../assets/chat.png"
import save from "../assets/bookmark.png"
import share from "../assets/send.png"
import {ProfileStory} from "./storytop"
import {postDatas} from "../data"


function Post(){
    return(
        <div className='posts'>
            {
                postDatas.map((data, index)=>(
                    <div className="post" key={index}>
                        <div className="top">
                            <div className="left">
                                <ProfileStory  img={data.profile} size={"50"}/>
                                <h4>{data.name}<p><span> - </span>{data.postDate}</p></h4>  
                            </div>
                            <img src={more} alt="" />
                        </div>
                        <div className="mid">
                            <img src={data.img} alt="" />
                        </div>
                        <div className="bottom">
                            <div className="icons">
                                <div className="left">
                                    <img src={like} alt="" />
                                    <img src={comment} alt="" />
                                    <img src={share} alt="" />
                                </div>
                                <img src={save} alt="" />
                            </div>
                            <p>{data.likes} likes</p>
                            <div className="descrp">
                                <p><span>{data.name}</span> {data.desription}</p>
                            </div>
                            <p id="comments">View all {data.comments} comments</p>
                            <input type="text" placeholder='Add a comment...'/>
                        </div>
                    </div>
                ))
            }
        </div>
        


    )
}
export default Post;