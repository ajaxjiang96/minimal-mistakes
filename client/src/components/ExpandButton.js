import React from 'react';
import "./ExpandButton.css";
import {Link} from 'react-router-dom'

class ExpandButton extends React.Component {
    defaultOnClick;

    constructor(props) {
        super(props);
        this._expandHome = this._expandHome.bind(this);
        this._onHover = this._onHover.bind(this);
        this._onMouseLeave = this._onMouseLeave.bind(this);
    }

    componentWillMount() {
        this.setState({
            buttonExpanded: false,
            homeExpanded: false
        })
    }

    static _EmptyFunction() {
        console.log(null)
    }

    _expandHome() {
        this.setState({
            homeExpanded: !this.state.homeExpanded
        });
        return this.props.defaultOnClick ? this.props.defaultOnClick() : ExpandButton._EmptyFunction();
    }

    _onHover() {
        // console.log("hover")
        this.setState({
            buttonExpanded: true
        })
    }

    _onMouseLeave() {
        // console.log("hover")
        this.setState({
            buttonExpanded: false
        })
    }


    render() {
        return <div className="ExpandButton"
                    onMouseOver={this._onHover}
                    onMouseLeave={this._onMouseLeave}
        >
            <div className={`ChevronContainer ${this.state.homeExpanded ? "Rotated" : ""}`} onClick={this._expandHome}>
                <i className={`fa fa-chevron-left`}/>
            </div>

            <ul className={`nav-bar ${this.state.buttonExpanded ? "" : "hidden"}`}>
                <Link to="/">Home</Link>
                <Link to="/portfolio">Portfolio</Link>
                <Link to="/about">About</Link>
            </ul>
        </div>;
    }
}

export default ExpandButton;
