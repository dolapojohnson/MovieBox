import React from "react";
import WickImage from '../assets/images/Poster.png'
import IMDb from '../assets/icons/IMDB.png'
import Tomato from '../assets/icons/Tomatoes.png'
import PlayBtn from '../assets/icons/Play.svg'
import NavBar from "./Navigation";

const Header = () => {
      return(
            <header className="header-container" style={{ backgroundImage: `url(${WickImage})` }}>
                  <NavBar />
                  <div className="trailer-container">
                        <div>
                              <h1>
                                    John Wick 3 : <br/>
                                    Parabellum
                              </h1>
                              <div className="movie-source-layout">
                                    <img src={IMDb} alt="IMDb" style={{ width: '80px'}} />
                                    <img src={Tomato} alt="Tomato" style={{ width: '40px'}} />
                              </div>
                              <p>
                                    John Wick is on the run after killing a member <br/>
                                    of the international assassins' guild, and with <br/>
                                    a $14 million price tag on his head, he is the <br/>
                                    target of hit men and women everywhere.
                              </p>
                              <div className="watch-btn">
                                    <img src={PlayBtn} />
                                    <>
                                          WATCH TRAILER
                                    </>
                              </div>
                        </div>
                        <div></div>
                  </div>
            </header>
      )
}

export default Header;