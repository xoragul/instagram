import '../styles/asideLeft.scss'
import  home from'../assets/image/home.png'
import search from'../assets/image/search.png'
import explore from'../assets/image/direction.png'
import reel from'../assets/image/reel.png'
import message from'../assets/image/message.png'
import notification from'../assets/image/notification.png'
import create from'../assets/image/create.png'
import profile from'../assets/image/profile.png'
import menu from'../assets/image/menu.png'
import { Link } from 'react-router-dom'
import Create from "./create"
import { useState } from 'react'

export function AsideLeft(){
    const [createComponent, setCreateComponent]= useState(false)

    const handleCreate=()=>{
        setCreateComponent(!createComponent)
    }
    return(
        <div className="fixed">

        <aside className="aside-left">
            <div className="logo">
                <h1>Instagram</h1>
            </div>
            <div className="titles">
                <Link to="/"><p><img src={home} /> Home</p></Link>
                <p><img src={search} />Search</p>
                <p><img src={explore} />Explore</p>
                <p><img src={reel} />Reels</p>
                <p><img src={message} />Messages</p>
                <p><img src={notification} />Notification</p>
                <p onClick={handleCreate}><img src={create}  />Create</p>
                <Link to={"profile"}><p><img src={profile} /> Profile</p></Link>
                <p><img src={menu}></img>more</p>        
            </div>
        </aside>
{/* 
        <div className="create" style={{display: `${!createComponent ? 'none':'block'}`}}>
            <Create display={createComponent} displayFunction={setCreateComponent}/>
        </div> */}
        </div>
    )
}