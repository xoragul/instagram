import'../styles/suggestions.scss'
import ramesh from'../assets/box/ramesh.jpg'
import rexi from'../assets/box/rexi.jpg'
import suresh from'../assets/box/suresh.jpg'
import close from'../assets/box/close.png'

function Suggestions(){
    const suggestionData= [
        {
            img:ramesh,
            name:"ramesh"
        },
        {
            img:rexi,
            name:"rexi"
        },
        {
            img:suresh,
            name:"suresh"
        },
    ]
    return(
        <div className='suggestions'>
            <div className="title">
                <p>Suggestions</p>
                <p>See all</p>
                
            </div>
            <div className="profiles">
                {
                    suggestionData.map((data, index)=>(
                        <div className="suggestion-profile" key={index}>
                            <div className="top">
                                <img src={close} alt="" />
                            </div>
                            <div className="middle">
                                <img src={data.img} alt="" />
                                <p>{data.name}</p>
                            </div>
                            <div className="bottom">
                                <p>Follow</p>
                            </div>
                        </div>
                    ))
                }
            </div>

            


        </div>
    )
}
export default Suggestions;