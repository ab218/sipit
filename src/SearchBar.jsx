import React, { Component } from 'react';

const footer = {
    backgroundColor: '#405d27',
    color: '#FFFAF0',
    marginBottom: '1.25rem',
    paddingBottom: '1.25rem',
}

const footerTitle = {
    width: '80rem',
    marginLeft: '50px',
    marginBottom: '20px',
    paddingTop: '15px',
    borderBottom: '1px solid #FFFAF0',
    letterSpacing: '2px',
}

const listBox = {
    marginTop: '20px',
    width: '30%',
    paddingLeft: '20rem',
    display: 'inline-box',
}

const listItem = {
    display: 'block',
    padding: '5px 0',
    letterSpacing: '1px',
    width: 'max-content',
}

class FooterComponent extends Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (
            <div style={footer} >
                <section>
                    <div style={footerTitle}>
                        <span><h2 style={{ paddingBottom: 20 + 'px' }}>Sip-it</h2>
                            <p>Find your best coffee.</p>
                        </span>
                    </div>
                    <ul style={listBox}>
                        <li style={listItem}>Home</li>
                        <li style={listItem}>Search</li>
                        <li style={listItem}>My Page</li>
                        <li style={listItem}>About Us</li>
                    </ul>

                </section>
            </div>
        );
    }
}

export default FooterComponent;
