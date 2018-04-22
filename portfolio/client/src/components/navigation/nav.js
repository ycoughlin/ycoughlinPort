import React, { Component } from 'react';

import webNav from './webNav';
import mobileNav from './mobileNav';

class nav extends Component {

    state = {
        mobileToggle: false,
        mobileView: true
    }

    updateDimensions = () => {
        if (window.innerWidth > 500) {
            this.setState({ mobileView: false })
        } else {
            this.setState({ mobileView: true })
        }
    }

    handleClick = () => {
        this.setState(prevState => ({
            mobileToggle: !prevState.mobileToggle
        }))
    }

    componentDidMount() {
        this.updateDimensions();
        window.addEventListener("resize", this.updateDimensions)
    }


    render() {
        return (
            <div>
                <webNav toggleBtn={this.handleClick} />
                <mobileNav toggleBtn={this.handleClick}
                    mobileToggle={this.state.mobileToggle}
                    mobileView={this.state.mobileView} />
            </div>
        );
    }
}


export default nav;