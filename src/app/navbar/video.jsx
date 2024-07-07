import React from 'react';


function VideoContainer() {
  return (
    <div className=" pt-20 flex items-center bg-white justify-center h-screen m-0 overflow-hidden">
      <div className="relative w-full h-full">
        <iframe
          className="absolute  w-full h-full "
          src="https://www.kisanlink.in/wp-content/uploads/admin-panel-video.mp4?mute=1"
          title="Full Screen Video"
         
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}

export default VideoContainer;