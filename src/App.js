import './App.scss';
// import CastCard from './components/CastCard';
import Header from './components/Header';
// import MovieCard from './components/MovieCard';
import SimpleSlider from './components/Sliders/SimpleSlider';
import Footer from './components/Footer';
import ArrivalSlider from './components/Sliders/ArrivalSlider';
import VideoSlider from './components/Sliders/VideoSlider';
import CastSlider from './components/Sliders/CastsSlider';

const App = () => {
  return(
    <div className='app'>
      <Header />
      {/* <MovieCard /> */}
      <SimpleSlider sectionTitle="Featured Movies" numberOfSlides="5" />
      <div style={{marginTop: '80px'}}>
            <ArrivalSlider sectionTitle="New Arrival" numberOfSlides="5" />
      </div>
      <div style={{marginTop: '80px'}}>
            <VideoSlider sectionTitle="Exclusive Videos" numberOfSlides="2" />
      </div>
      <div style={{marginTop: '80px'}}>
            <CastSlider sectionTitle="Featured Casts" numberOfSlides="4" />
      </div>

      <Footer />
    </div>
  )
}

export default App;
