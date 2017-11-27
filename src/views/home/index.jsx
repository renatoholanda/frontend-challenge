import React, {Component} from 'react'
import SearchArea from './search-area'

class PageHome extends Component {
    render() {
        return (
            <div id="page-home">
                <div className="container">
                    <SearchArea history={this.props.history} />
                </div>
            </div>
        );
    }
}

export default PageHome;