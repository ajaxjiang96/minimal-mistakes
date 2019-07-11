import React from 'react';
import './Editor.css'
import '../Article.css'

import CodeMirror from "react-codemirror";
import 'codemirror/lib/codemirror.css';
import 'codemirror/mode/markdown/markdown';
import 'codemirror/mode/javascript/javascript';

import ReactMarkdown from 'react-markdown';
// import ReactMde, {commands} from "react-mde";
// import "react-mde/lib/styles/css/react-mde-all.css";
// import { Editor, EditorState } from 'draft-js';
import 'draft-js/dist/Draft.css'
import {
    // BrowserRouter as Router,
    // Route,
    // Link,
    match
} from 'react-router-dom';
import { Post, PostArticle, PostsState } from "../models/posts";
import Article from '../Article';

type MyEditorState = {
    text: string,
    title: string,
    excerpt: string,
    date?: Date,
    cover: string,
    loading: boolean,
    updatePost: boolean
    // editorState: EditorState
}

type EditorProps = {
    postId?: string
}

interface PostRouterParams { post?: string; }

class MyEditor extends React.Component<EditorProps, MyEditorState> {
    constructor(props: EditorProps) {
        super(props);

        // this.state = {editorState: EditorState.createEmpty()};
        // this.onChange = (editorState) => ;

        this.updateCode = this.updateCode.bind(this);
        this.updateTitle = this.updateTitle.bind(this);
        this.updateExcerpt = this.updateExcerpt.bind(this);
        this.send = this.send.bind(this);
        // this.onChange = this.onChange.bind(this);
    }

    // onChange(editorState: EditorState) {
    //     this.setState({ editorState });
    //     console.log(this.state.editorState)
    // }

    componentWillMount() {
        if (this.props.postId) {
            let url = (process.env.SERVER ? process.env.SERVER : "http://localhost:8333") + "/post/" + this.props.postId;

            this.setState({
                loading: true
            }, () => fetch(url)
                .then(response => response.json())
                .then((post: PostArticle) => {
                    console.log(post)
                    this.setState({
                        text: post.body,
                        title: post.title,
                        date: post.date,
                        cover: post.cover,
                        excerpt: post.excerpt,
                        loading: false,
                        updatePost: true
                    }, () => this.updateCode(post.body));
                }).catch((err) => {
                    console.error(err);
                    this.setState({
                        text: "",
                        title: "",
                        loading: false,
                        updatePost: false
                        // editorState: EditorState.createEmpty()
                    })
                }))

        } else {
            this.setState({
                text: "",
                title: "",
                loading: false,
                updatePost: false
                // editorState: EditorState.createEmpty()
            })
        }
    }
    componentDidMount() {

    }

    updateCode(newCode: string) {
        this.setState({
            text: newCode,
        });
    }

    updateTitle(e: React.ChangeEvent<HTMLInputElement>) {
        this.setState({
            title: e.target.value,
        });
    }

    updateExcerpt(e: React.ChangeEvent<HTMLInputElement>) {
        this.setState({
            excerpt: e.target.value,
        });
    }

    send() {
        const url = (process.env.REACT_APP_SERVER ? process.env.REACT_APP_SERVER : "http://localhost:8333")
                        + "/post/" + (this.state.updatePost ? this.props.postId : "");
                        console.log(process.env)
        console.log(url)
        fetch(url, {
            method: this.state.updatePost ? "put" : "post",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              },
            body: JSON.stringify({
                title: this.state.title,
                cover: this.state.cover,
                date: this.state.date ? this.state.date : new Date(),
                excerpt: this.state.excerpt,
                author: "Jiacheng Jiang",
                body: this.state.text,

            })
        }).then((res: Response) => {
            console.log(res);
            this.setState({
                text: "",
                title: "",
                excerpt: "",
                date: undefined,
                cover: "",
                loading: false,
                updatePost: false
            });
        }).catch((err: Error) => console.error(err))
    }



    render() {
        let options: CodeMirror.EditorConfiguration = {
            lineNumbers: false,
            autofocus: true,
            mode: 'markdown',
            indentWithTabs: true,
            smartIndent: true,
            placeholder: "Enter here",
            tabSize: 2,
            lineWrapping: true,
        };
        return (
            <div className="editor-container">
                {this.state.loading ? null:<div className="editor-view">
                    <input type="text" className="title-input" value={this.state.title} placeholder="Title" onChange={this.updateTitle} />
                    <input type="text" className="excerpt-input" value={this.state.excerpt} placeholder="Excerpt" onChange={this.updateExcerpt} />
                    <CodeMirror value={this.state.text} onChange={this.updateCode} options={options} />
                </div>}
                

                <div className="preview-view">
                    <Article article={{
                        title: this.state.title,
                        cover: this.state.cover,
                        date: this.state.date ? this.state.date: new Date(),
                        excerpt: this.state.text,
                        body: this.state.text
                    }} />
                    <div className="action-bar">
                        <button onClick={this.send}>
                            Send
                        </button>
                    </div>
                </div>

            </div>

        );
    }

}

export default MyEditor;
