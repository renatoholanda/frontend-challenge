import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

import {USER} from '../../actions'

class PageUser extends Component {
    componentWillMount() {
        let {match, dispatch, history} = this.props;
        let {username} = match.params;
        
        dispatch({type: USER.getByUsername, username, history})
        dispatch({type: USER.getRepos, username})
    }

    render() {
        let user = this.props.user;

        return (
            <div id="page-user">
                <div className="info">
                    <div className="avatar">
                        <img src={user.avatar_url} alt={user.name} />
                    </div>
                    <div className="name">
                        <h2>{user.name}</h2>
                        <p>{user.email}</p>
                        <p>{user.followers} followers | {user.following} following</p>
                    </div>
                </div>
                <div className="bio">
                    <h2>Bio</h2>
                    <p>{user.bio || "Não há informações"}</p>
                </div>
                <div className="repos">
                    <h2>Repositories</h2>
                    {user.repos && user.repos.map((r, key) => 
                        <a href={r.html_url} className="repo-item" key={key} target="_blank" rel="nofollow">
                            <div>
                                <h2>
                                    {r.name}
                                </h2>
                                <p>
                                    {r.description}
                                </p>
                                {r.language && <span className="language">{r.language}</span>}
                            </div>
                        </a>
                    )}
                </div>
                <div className="search">
                    <Link className="btn" to="/">Nova Busca</Link>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state){
    return {user: state.root.user}
}

export default connect(mapStateToProps)(PageUser)