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

    onClickSearch(){
        let {searcharea, username} = this.refs;
        searcharea.className += " open";
        username.focus();
    }

    render() {
        return (
            <div id="search-area">
                <div ref="searcharea" className="container">
                    <input ref="username" type="text" className="txt-rounded" placeholder="Username" onKeyUp={this.onKeyUp.bind(this)} />
                    <button className="btn-search" onClick={this.onClickSearch.bind(this)}>
                        <i class="fa fa-search" aria-hidden="true"></i>
                    </button>
                </div>
            </div>
        );
    }
}

export default connect()(SearchArea);