import React, { useState } from 'react';
import SlideShow from './SlideShow';

function App() {
  const images = [
    {
      url:
        'https://picsum.photos/200/300?random=1',
    },
    {
      url:
        'https://picsum.photos/200/300?random=2',
    },
    {
      url:
        'https://picsum.photos/200/300?random=3',
    },
    { url: 'https://picsum.photos/200/300?random=4' },
    { url: 'https://picsum.photos/200/300?random=5' },
  ];

  const [speed] = useState(2);
  const [imageHeight] = useState('300px');
  const [imageWidth] = useState('300px');

  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        alignItems: 'center',
      }}
    >
      <SlideShow
        images={images}
        speed={speed}
        imageHeight={imageHeight}
        imageWidth={imageWidth}
      />
      <div style={{ width: '300px' }}>
        <div
          style={{
            width: '100%',
            height: '50px',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            alignItems: 'center',
          }}
        >
        </div>
        <div
          style={{
            width: '100%',
            height: '50px',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            alignItems: 'center',
          }}
        >
        </div>
        <div
          style={{
            width: '100%',
            height: '50px',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            alignItems: 'center',
          }}
        >
        </div>
      </div>
    </div>
  );
 
}

export default App;