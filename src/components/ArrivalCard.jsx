import React from 'react'
// import Stranger from '../assets/images/stranger.png'
import IMDbIcon from '../assets/icons/imdbIcon.png'
import tomatoIcon from '../assets/icons/tomatoIcon.png'
// import Wick from '../assets/images/Wick.png'

const ArrivalCard = ({a}) => {
      // console.log('almighty gpt', a)

      // https://images.tmdb.org/t/p/w500/
      return(
            <div className="card-container">
                  <div className="movie-img-container" style={{ backgroundImage: `url(https://images.tmdb.org/t/p/w500/${a.poster_path})` }}>
                        
                  </div>
                  <div className="movie-details-container">
                        <p className="place-genre">
                              {a.production_countries[0].iso_3166_1} {a.release_date}
                              {/* US 2016 - Current */}
                        </p>
                        <h3>
                              {/* {(a.original_title.length >= 20) ? a.original_title.slice(0, 20) + '...' : a.original_title} */}
                              {a.original_title}
                        </h3>
                        <div className="movie-ratings-container">
                              <div className="movie-ratings">
                                    <img src={IMDbIcon} style={{height: '10px', width: '18px'}} alt="IMDb icon" />
                                    <p className="rating-value">{a.vote_average}/100</p>
                              </div>
                              <div className="movie-ratings">
                                    <img src={tomatoIcon} style={{height: '10px', width: '10px'}} alt="IMDb icon" />
                                    <p className="rating-value">{a.popularity}</p>
                              </div>
                        </div>
                        <p className="place-genre">
                              {a.genres.map((g) => <p className='place-genre'>{g.name}</p>)}
                              {/* Action, Comic */}
                        </p>
                  </div>
            </div>
      )
}

export default ArrivalCard;