import "../styles/home.scss"
import { AsideLeft } from "./aside";
import { AsideRight } from "./asideRight";
import  StoryTop  from "./storytop";
import Suggestions from "./suggestions";
import Post from"./post";
import { Outlet } from "react-router-dom";
import accountPost from"./accountPost";

export function Layout(){
    return(
        <div className="layout">
                
            <div className="layout-right">
                <AsideLeft/>
            </div>
            <div className="layout-center">
                <Outlet />
            </div>
        </div>
    )
}

function Home(){
    return(
        <div className="home">
            <div className="center">
                <StoryTop/>
                <Suggestions/>
                <Post/>              
            </div>
            <AsideRight/>
        </div>
    )
}
export default Home;    