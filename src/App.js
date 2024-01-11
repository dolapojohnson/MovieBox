import './App.scss';
import Header from './components/Header';
import MovieCard from './components/MovieCard';
import SimpleSlider from './components/SimpleSlider';

const App = () => {
  return(
    <div className='app'>
      <Header />
      {/* <MovieCard /> */}
      <SimpleSlider />
    </div>
  )
}

export default App;
