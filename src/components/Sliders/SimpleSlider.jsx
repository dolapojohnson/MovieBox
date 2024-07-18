import React,{useEffect, useState} from "react";
import Slider from "react-slick"
import "./slick.css";
import "./slick-theme.scss";
import MovieCard from "../MovieCard";

const SimpleSlider = ({sectionTitle, numberOfSlides}) => {

      const settings = {
            dots: false,
            infinite: false,
            speed: 1900,
            slidesToShow: numberOfSlides,
            slidesToScroll: 4,
            initialSlide: 1,
            responsive: [
                  {
                    breakpoint: 1024,
                    settings: {
                      slidesToShow: 3,
                      slidesToScroll: 3,
                      infinite: false,
                      dots: false
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

      const [allPopular, setAllPopular] = useState([]);
      const [newPopular, setNewPopular] = useState([]);

      useEffect(() => {
            const fetchPopular = async () => {
                  const response = await fetch('https://api.themoviedb.org/3/movie/popular?api_key=98c4ef5b2dc9e5742da5ddd3b9816b9f');
                  const resToJson = await response.json();
                  const results = await resToJson.results;
                  // console.log(results)
                  setAllPopular(results)
            }
            fetchPopular();
      }, []);

      useEffect(() => {
      const fetchMovieDetails = async () => {
            try {
            // Fetch details for all movies concurrently
            const promises = allPopular.map(async (movie) => {
            const response = await fetch(`https://api.themoviedb.org/3/movie/${movie.id}?api_key=98c4ef5b2dc9e5742da5ddd3b9816b9f`);
            if (!response.ok) {
                  return { error: `Failed to fetch details for movie ID ${movie.id}` };
            }
            const details = await response.json();
            return details;
            });
      
            // Wait for all promises to settle
            const results = await Promise.allSettled(promises);
      
            // Handle the movie details as needed
            const successfulResults = results
            .filter((result) => result.status === 'fulfilled')
            .map((result) => result.value);
      
      //     console.log('Successful Movie Details:', successfulResults);
            console.log('3')
            setNewPopular(successfulResults)
      
            // Update state or perform other actions with successfulResults
            } catch (error) {
            console.error(error);
            }
      };
      
      if (allPopular.length > 0) {
            // Only fetch details if there are movies in the list
            fetchMovieDetails();
      }
      }, [allPopular]);

      const more = "See more >"

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
                  <Slider {...settings}>
                        {
                              newPopular.map((p) => {
                                    return(
                                          <MovieCard key={p.id} p={p} />
                                    )
                              })
                        }
                  </Slider>
            </div>
      )
}

export default SimpleSlider;