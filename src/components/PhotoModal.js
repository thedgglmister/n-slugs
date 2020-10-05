import React from 'react';


class PhotoModal extends React.Component {


  render() {
    const { url, closePhotoModal } = this.props;


    const modalContainerStyle = {
      position: 'fixed',
      top: '0',
      left: '0',
      width: '100vw',
      height: '100vh',
      backgroundColor: 'rgb(0, 0, 0, 0.5)',
      zIndex: '4',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      cursor: 'default',
    };
    const modalStyle = {
      width: '940px',
      margin: '50px',
      backgroundColor: 'blue',
      height: '400px',
      display: 'flex',
    };
    const photoContainerStyle = {
      flexGrow: '1',
      backgroundColor: '#000',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    };
    const imgStyle={
      maxWidth: '100%',
      maxHeight: '100%',
    };
    const infoContainerStyle = {
      minWidth: '250px',
      backgroundColor: '#fff',
      display: 'flex',
      flexDirection: 'column',
    };
    const topInfoContainer = {
      borderBottom: '1px solid #ccc',
      padding: '10px'
    };
    const flexParent = {
      display: 'flex',
      alignItems: 'center',
    }

    const photoStyle = {
      width: '40px',
      height: '40px',
      borderRadius: '50%',
      cursor: 'pointer',
      backgroundImage: `url(${url})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    };

    const timeAgoStyle = {
      fontSize: '10px',
    };
    const usernameStyle = {
      flexGrow: '1',
      fontSize: '12px',
      margin: '0px 10px',
      overflowX: 'scroll',
    };
    const pointerStyle = {
      cursor: 'pointer',
    };
    const dotdotdotStyle = {
      cursor: 'pointer',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '5px',
    };
    const bottomInfoContainerStyle = {
      flexGrow: '1',
    };

    //TODO TO DO what is username is like 16 Ws? it wont fit. I added scroll already. DONE?
    return (
      <div style={modalContainerStyle} class="closeOnClick" onClick={closePhotoModal}>
        <div style={modalStyle}>
          <div style={photoContainerStyle}>
            <img src={url} style={imgStyle} />
          </div>
          <div style={infoContainerStyle}>

          </div>
        </div>
      </div>
    );
  }
}

export default PhotoModal;
