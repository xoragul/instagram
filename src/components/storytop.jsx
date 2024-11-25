import '../styles/storyTop.scss'
import { storiesData } from '../data';

function StoryTop(){
    
    return(
        <div className='stories'>
            <div className="story">
                {
                    storiesData.map((data, index)=>(
                        // <div className="profiles" key={index}>
                        //     <div className="imgborder">
                        //         <img src={data.img} alt="" />
                        //     </div>
                        //     <p>{data.name}</p>
                        // </div>
                        <div key={index} className='story-profile'>
                            <ProfileStory img={data.img} size={"65"}/>
                            <p>{data.name}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export function ProfileStory({img, size}){
    return (
        <div id="story-profiles">
            <div className="imgborder" style={{height:`${size}px`, width:`${size}px`}}>
                <img src={img} alt="" />
            </div>
        </div>
    )
}
export default StoryTop;    