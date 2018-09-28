import React, { Component } from 'react';
import {
  FacebookShareButton, TwitterShareButton, RedditShareButton, EmailShareButton,
  FacebookIcon, TwitterIcon, RedditIcon, EmailIcon,
} from 'react-share';

class ShareButtons extends Component {
  render() {
    const { cafe } = this.props;
    return (
      <React.Fragment>
        <FacebookShareButton url={`https://sipit-cafes.herokuapp.com/business/${cafe.id}`} style={{ margin: '0 1em 0 0' }}>
          <FacebookIcon size={24} />
        </FacebookShareButton>
        <TwitterShareButton url={`https://sipit-cafes.herokuapp.com/business/${cafe.id}`} style={{ margin: '0 1em 0 0' }}>
          <TwitterIcon size={24} />
        </TwitterShareButton>
        <RedditShareButton url={`https://sipit-cafes.herokuapp.com/business/${cafe.id}`} style={{ margin: '0 1em 0 0' }}>
          <RedditIcon size={24} />
        </RedditShareButton>
        <EmailShareButton url={`https://sipit-cafes.herokuapp.com/business/${cafe.id}`} style={{ margin: '0 1em 0 0' }}>
          <EmailIcon size={24} />
        </EmailShareButton>
      </React.Fragment>
    );
  }
}

export default ShareButtons;
