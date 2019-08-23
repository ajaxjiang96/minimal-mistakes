import React from 'react';
import TeaserPlaceholder from '../assets/images/site/teaser-placeholder.png';
import './RecentPost.css';

interface RecentPostProps {
    title: string;
    excerpt: string;
    teaser: string;
    date: Date;
    onClick: Function
}
const RecentPost: React.FC<RecentPostProps> = (props) => {
    console.log(props)
    let date = new Date(props.date)
    // console.log(process.env.REACT_APP_IMG_SERVER)
    return (

        <div className="RecentPostContainer" onClick={() => props.onClick()}>
            <div className="RecentPost">
                <img src={process.env.REACT_APP_IMG_SERVER + props.teaser} alt={props.title + " cover photo"} className="Teaser"/>
                <div className="RecentPostBody">
                    <h1>
                        {props.title}
                    </h1>
                    <div className="PostDate">
                        {date.getFullYear()} / {date.getMonth()} / {date.getDate()} 
                    </div>
                    <div className="ExcerptContainer">
                        <div className="Excerpt">{props.excerpt}</div>
                    </div>
                </div>
            </div>

            <hr/>
        </div>
    );
}

export default RecentPost;
