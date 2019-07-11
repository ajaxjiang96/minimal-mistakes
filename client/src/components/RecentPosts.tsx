import React, { RefObject } from 'react';
import './RecentPosts.css';
import RecentPost from './RecentPost';
import Article from './Article';
import sample from '../assets/markdown/sample.md';
import { Post, PostArticle, PostsState } from "./models/posts";
function ConstructPost(title: string, excerpt: string, date: Date, teaser: string, _id: string): Post {
    return {
        title: title,
        excerpt: excerpt,
        teaser: teaser,
        date: date,
        _id: _id
    }
}

type RecentPostProps = {
    expanded: boolean,
    expandFunction: Function
}

class RecentPosts extends React.Component<RecentPostProps, PostsState> {
    private articleDiv = React.createRef<HTMLDivElement>()

    constructor(props: RecentPostProps) {
        super(props);
    }
    showArticle(_id: string) {
        this.props.expandFunction();
        let url = (process.env.SERVER ? process.env.SERVER : "http://localhost:8333") + "/post/" + _id;
        this.setState(
            { articleDisplayed: true },

            () => fetch(url)
                .then(response => response.json())
                .then((post: PostArticle) => {
                    console.log(post)
                    this.setState({
                        currentArticle: post,
                    }, ()=> this.articleDiv.current!.scrollTo({
                        top:0,
                        behavior: 'smooth'
                    }));
                }).catch((err) => console.error(err))
        )

        // this.setState({
        //     articleDisplayed: true
        // })
    }
    componentWillMount() {
        this.setState({
            articleDisplayed: false
        })
    }
    componentDidMount() {
        console.log(this.props)

        let url = (process.env.SERVER ? process.env.SERVER : "http://localhost:8333") + "/posts";
        console.log(url)
        fetch(url)
            .then(response => response.json())
            .then((posts: [Post]) => {
                // let posts = [];
                // for (let i = 0; i < 10; i++) {
                //     posts.push(ConstructPost(`Article ${i}`, `excerpt`, new Date(), "https://pixel.nymag.com/imgs/daily/vulture/2019/01/28/book-covers/28-books-colorful.w700.h700.jpg"))
                // }
                this.setState({
                    posts: posts
                });
            }).catch((err) => console.error(err));
    }
    render() {
        return (
            <div className="home">

                <div className="recent-posts">
                    <div className="post-list">
                        {this.state.posts ? this.state.posts.map((post, i) => <RecentPost key={i} excerpt={post.excerpt} title={post.title} teaser={post.teaser} date={post.date} onClick={() => this.showArticle(post._id)} />) : null}
                        {/* <RecentPost article={}/>
                        <RecentPost />
                        <RecentPost />
                        <RecentPost />
                        <RecentPost />
                        <RecentPost />
                        <RecentPost /> */}
                    </div>
                    {
                        this.state.articleDisplayed ? <div className="article-container" ref={this.articleDiv}>
                            <Article
                                article={this.state.currentArticle}></Article>
                        </div> : null
                    }

                </div>

            </div>

        );
    }

}

export default RecentPosts;
