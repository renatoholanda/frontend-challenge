import React, {Component} from 'react'
import {connect} from 'react-redux'

import {REPOS} from '../../actions'

class PageRepos extends Component {
    componentWillMount() {
        let {match, dispatch, history} = this.props;
        let {user, name} = match.params;
        
        dispatch({type: REPOS.getByName, name: `${user}/${name}`, history})
    }

    render() {
        let {repos} = this.props;

        return (
            <div id="page-repos">
                {repos.full_name}
            </div>
        );
    }
}

function mapStateToProps(state){
    return {repos: state.root.repos}
}

export default connect(mapStateToProps)(PageRepos)