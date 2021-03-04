import React from 'react';
import Video from './Video';

import './App.css';

function App() {
  return (
    <div className='app'>
      <div className='app__videos'>
        <Video
          url='https://v19-us.tiktokcdn.com/68df685953544fb829c8a778ca63e120/60419b04/video/tos/useast2a/tos-useast2a-ve-0068c002/ea4bb8c34fd1429f961f07af54d26b35/?a=1233&br=2880&bt=1440&cd=0%7C0%7C1&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&l=2021030420440401019019213119465D72&lr=tiktok_m&mime_type=video_mp4&pl=0&qs=0&rc=amlsZXMzZm1yMzMzOTczM0ApOGQzOTZnZWVmNzNlMzs3aGdxcy5qNl9mcWRgLS0wMTZzc2E2LzQyNTYyXzBgM18yMjI6Yw%3D%3D&vl=&vr='
          // channel=''
          // description=''
          // song=''
          // likes=''
          // message=''
          // shares=''
        />
        <Video />
      </div>
    </div>
  );
}

export default App;
