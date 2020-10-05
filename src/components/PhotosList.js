import React from 'react';

import Div100vh from 'react-div-100vh';

import Photo from './Photo';




class PhotosList extends React.Component {

  // constructor(props) {
  //   super(props);
  //
  //   const urls = [];
  //   for (let i = 1; i < 306; i++) {
  //     urls.push(`#`);
  //   }
  //   urls[0] = 'img/1.jpeg';
  //
  //   this.state = {
  //     urls
  //   };
  //
  //   this.handleLoad = this.handleLoad.bind(this);
  // }
  //
  // handleLoad(i) {
  //   console.log(i);
  //
  //   const oldUrls = this.state.urls;
  //   const newUrls = JSON.parse(JSON.stringify(oldUrls));
  //   newUrls[i + 1] = `img/${i + 2}.jpeg`;
  //   this.setState({
  //     urls: newUrls
  //   });
  // }

  render() {

    // const { urls } = this.state;

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
      // backgroundImage: `url(${backgroundUrl})`,
      // backgroundSize: 'cover',
      // backgroundPosition: 'center',
      // backgroundRepeat: 'no-repeat',
      // backgroundAttachment: 'scroll',
      height: '100vh',
      width: '100vw',
      objectFit: 'cover',
      position: 'fixed',
      zIndex: '-5',
      opacity: '0.6',
      minHeight: '100vh',
      minHeight: '-webkit-fill-available',
    };




    return (
        <div>
          <Div100vh>
            <img src={backgroundUrl} style={test} />
            <div style={photosContainerStyle}>
              {urls.map((url, i) => (
                <Photo
                  key={i}
                  index={i}
                  url={url}
                  handleLoad={this.handleLoad}/>
              ))}
            </div>
          </Div100vh>
        </div>

    );
  }
}

export default PhotosList;
