import React from 'react';
import { Link } from 'react-router-dom';
// import { useNavigate } from 'react-router-dom';
import backgroundVideo from '../assets/background.mp4';
import { BrowserRouter } from 'react-router-dom';


const DisplayLayer = () => {
    return (
        <>
            
              <div className="relative w-full min-h-screen overflow-hidden" 
            >

                {/* Background Video */}
                <Link to="/Home">
                <video
                    className="absolute  w-[100vw] h-[100vh] object-fill mt-1"
                    src={backgroundVideo}
                    autoPlay
                    loop
                    muted
                    playsInline
                />
                 </Link>

      {/* Dark overlay */}
      {/* <div className="absolute inset-0 bg-black/40"></div> */}

      {/* Page content */}
      {/* <div className="relative z-10 min-h-screen flex items-center justify-center">
        <div className="text-white text-center">
          <h1 className="text-5xl font-bold">
            Welcome to My Website
          </h1>

          <p className="mt-4 text-xl">
            This content appears over the video.
          </p>
        </div>
      </div> */}

    </div>
           
        </>
    );
}

export default DisplayLayer;