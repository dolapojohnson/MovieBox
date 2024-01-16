import React, {useEffect, useState} from "react";
import Slider from "react-slick"
import "./slick.css";
import "./slick-theme.scss";

// import IMDbIcon from '../../assets/icons/IMDB.png'
// import tomatoIcon from '../../assets/icons/tomatoIcon.png'
// import Stranger from '../../assets/images/stranger.png'

import ArrivalCard from "../ArrivalCard";

const ArrivalSlider = ({sectionTitle, numberOfSlides}) => {
      const settings = {
            dots: false,
            infinite: false,
            speed: 900,
            slidesToShow: numberOfSlides,
            slidesToScroll: 4,
            initialSlide: 0,
            responsive: [
                  {
                    breakpoint: 1024,
                    settings: {
                      slidesToShow: 3,
                      slidesToScroll: 3,
                      infinite: true,
                      dots: true
                    }
                  },
                  {
                    breakpoint: 600,
                    settings: {
                      slidesToShow: 2,
                      slidesToScroll: 2,
                      initialSlide: 2
                    }
                  },
                  {
                    breakpoint: 480,
                    settings: {
                      slidesToShow: 1,
                      slidesToScroll: 1
                    }
                  }
            ]
      }

      const more = "See more >"

      const [allArrivals, setAllArrivals] = useState([]);
      const [newArrivals, setNewArrivals] = useState([]);

      useEffect(() => {
            const fetchArrivals = async () => {
                  const response = await fetch('https://api.themoviedb.org/3/movie/upcoming?api_key=98c4ef5b2dc9e5742da5ddd3b9816b9f');
                  const resToJson = await response.json();
                  const results = await resToJson.results;
                  // console.log(results)
                  setAllArrivals(results)
            }
            fetchArrivals();
      }, []);

      const  fetchMovieDetails = async (movieId) => {
            try {
                  const response = await fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=98c4ef5b2dc9e5742da5ddd3b9816b9f`);
                  if (!response.ok) {
                        throw new Error(`Failed to fetch details for movie ID ${movieId}`);                  
                  }
                  const movieDetails = await response.json();
                  //Handle movie details as needed
                  // console.log('Movie details: ', movieDetails)
                  setNewArrivals(movieDetails)
            } catch (error) {
                  console.error(error);
            }
      };

      useEffect(() => {
            allArrivals.forEach((movie) => fetchMovieDetails(movie.id));
      }, [allArrivals]);

      return(
            <div className="carousel-container">
                  <div className="section-title-container">
                        <h4>{sectionTitle}</h4>
                        <h3> {more}
                              {/* <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none">
                                    <path d="M7.5 4.66668L13.3333 10.5L7.5 16.3333" stroke="#B91C1C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                              </svg> */}
                        </h3>
                  </div>
                  {console.log(allArrivals)}
                  <Slider {...settings}>
                        {
                              allArrivals.map((a) => {
                                    return(
                                          <ArrivalCard key={a.id} a={a} />
                                    )
                              })
                        }
                  </Slider>
            </div>
      )
}

export default ArrivalSlider;