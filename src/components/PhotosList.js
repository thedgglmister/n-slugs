import React from 'react';

import Photo from './Photo';



class PhotosList extends React.Component {




  render() {

    const backgroundUrl = 'img/a.jpg';

    const urls = [];
    for (let i = 1; i < 306; i++) {
      urls.push(`img/${i}.jpeg`);
    }


    const photosContainerStyle = {
      paddingTop: '100px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      // backgroundImage: `url(${backgroundUrl})`,
      // backgroundSize: 'cover',
      // backgroundPosition: 'center',
      // backgroundRepeat: 'no-repeat',
      // backgroundAttachment: 'fixed',

    };

    const test = {
      backgroundImage: `url(${backgroundUrl})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundAttachment: 'fixed',
      height: '100vh',
      width: '100vw',
      position: 'fixed',
      zIndex: '-5',
      opacity: '0.6',
    };



    console.log('urls');
    console.log(urls);


    return (
        <div>
          <div style={test}></div>
          <div style={photosContainerStyle}>
            {urls.map((url) => (
              <Photo
                key={url}
                url={url}/>
            ))}
          </div>
        </div>

    );
  }
}

export default PhotosList;
