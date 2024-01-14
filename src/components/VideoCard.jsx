import React from "react";
import Thumbnail from '../assets/images/Thumbnails.png'

const VideoCard = ({v}) => {
      return(
            <div style={{margin: '50px'}} className="video-container">
                  <div className="video-img-container" style={{ backgroundImage: `url(https://images.tmdb.org/t/p/w500/${v.backdrop_path})` }}>
                        <svg className="pointer" xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 60 60" fill="none">
                              <path d="M36.8798 27.9199L28.8867 22.5912C27.2254 21.4836 25 22.6746 25 24.6713V35.3287C25 37.3254 27.2254 38.5164 28.8867 37.4088L36.8798 32.0801C38.3641 31.0906 38.3641 28.9094 36.8798 27.9199Z" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                              <path d="M52.5 30C52.5 42.4264 42.4264 52.5 30 52.5C17.5736 52.5 7.5 42.4264 7.5 30C7.5 17.5736 17.5736 7.5 30 7.5C42.4264 7.5 52.5 17.5736 52.5 30Z" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                  </div>
                  <div className="video-details-container">
                        <h3 style={{fontSize: '16px', fontWeight: '700', color: '#111827'}}>
                              {v.original_title}
                        </h3>
                  </div>
            </div>
      )
}

export default VideoCard;