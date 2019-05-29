import React from 'react';
import TeaserPlaceholder from '../assets/images/site/teaser-placeholder.png';
import './RecentPost.css';

function RecentPost() {
    return (

        <div className="RecentPostContainer">
            <div className="RecentPost">
                <img src={TeaserPlaceholder} alt="" className="Teaser"/>
                <div className="RecentPostBody">
                    <h1>
                        One Calendar
                    </h1>
                    <div className="PostDate">
                        2019 / 05 / 10
                    </div>
                    <div className="ExcerptContainer">
                        <div className="Excerpt">
                            A simple calendar with lunar calendar information implemented with Flutter
                        </div>
                    </div>
                </div>
            </div>

            <hr/>
        </div>
    );
}

export default RecentPost;
