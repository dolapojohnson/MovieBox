import React from "react";
import Reynolds from '../assets/images/reynolds.png'

const CastCard = () => {
      return(
            <div style={{margin: '50px'}} className="card-container">
                  <div className="movie-img-container" style={{ backgroundImage: `url(${Reynolds})` }}>
                        
                  </div>
                  <div className="movie-details-container">
                        <h3 style={{fontSize: '16px', fontWeight: '700', color: '#111827'}}>
                              Keanu Reeves
                        </h3>
                  </div>
            </div>
      )
}

export default CastCard;