import React from 'react';

import PhotoModal from './PhotoModal';

class Photo extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      hovered: false,
      modalOpen: false,
    };

    this.handleMouseEnter = this.handleMouseEnter.bind(this);
    this.handleMouseLeave = this.handleMouseLeave.bind(this);
    this.openPhotoModal = this.openPhotoModal.bind(this);
    this.closePhotoModal = this.closePhotoModal.bind(this);

  }

  handleMouseEnter() {
    this.setState({
      hovered: true,
    });
  }

  handleMouseLeave() {
    this.setState({
      hovered: false,
    });
  }


  openPhotoModal(event) {
    if (event.target.classList.contains('openOnClick')) {
      this.setState({
        modalOpen: true,
      });
    }
  }

  closePhotoModal(event) {
    if (event.target.classList.contains('closeOnClick')) {
      this.setState({
        modalOpen: false,
      });
    }
  }

  render() {
    const { url } = this.props;
    const { modalOpen, hovered } = this.state;




    const imgStyle = {
      objectFit: 'cover',
      borderRadius: '5px',
      cursor: 'pointer',
    };





     return (
       <noscript class="loading-lazy">
          <img src={url} style={imgStyle} className="photo" loading="lazy"/>
       </noscript>
     );



  }
}

export default Photo;
