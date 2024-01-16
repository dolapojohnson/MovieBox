import React from "react";
// import Reynolds from '../assets/images/reynolds.png'

const CastCard = ({c}) => {
      return(
            <div style={{margin: '50px'}} className="card-container">
                  <div className="movie-img-container" style={{ backgroundImage: `url(https://images.tmdb.org/t/p/w500/${c.profile_path})` }}>
                        
                  </div>
                  <div className="movie-details-container">
                        <h3 style={{fontSize: '16px', fontWeight: '700', color: '#111827'}}>
                              {c.original_name}
                        </h3>
                  </div>
            </div>
      )
}

export default CastCard;