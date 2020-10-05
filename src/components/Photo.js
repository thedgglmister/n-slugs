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


    const containerStyle = {
      margin: '20px',
      minWidth: '25%',
      flexGrow: '1',
      // backgroundImage: `url(${url})`,
      // backgroundSize: 'cover',
      // backgroundPosition: 'center',
      cursor: 'pointer',
      position: 'relative',
    }
    const paddingStyle = {
      paddingTop: '100%',
      backgroundColor: '#000',
      opacity: (hovered ? '0.2' : '0'),
    };

    const imgStyle = {
      objectFit: 'cover',
      borderRadius: '5px',
      cursor: 'pointer',
    };





     return (
          <img src={url} style={imgStyle} className="photo" loading="lazy"/>

     );



  }
}

export default Photo;
