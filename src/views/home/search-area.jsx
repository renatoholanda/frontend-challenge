import React, {Component} from 'react'
import {connect} from 'react-redux'


class SearchArea extends Component {
    onKeyUp(ev){
        if(ev.keyCode === 13 || ev.keyCode === 176){
            this.onSubmit(ev.target.value);
        }
    }

    onSubmit(username){
        let {history} = this.props;

        history.push(`/user/${username}`);
    }

    render() {
        return (
            <div className="search-area">
                <input type="text" placeholder="Username" onKeyUp={this.onKeyUp.bind(this)} />
            </div>
        );
    }
}

export default connect()(SearchArea);