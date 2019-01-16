import React, { Component } from 'react';
import './Not404.css'

class Not404 extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="not404">
                <h1>404错误页面</h1>
                <section className="error-container">
                    <span>4</span>
                    <span><span className="screen-reader-text">0</span></span>
                    <span>4</span>
                </section>
            </div>
        )
    }
}


export default Not404;