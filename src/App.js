import './App.scss';
import Header from './components/Header';
import MovieCard from './components/MovieCard';


const App = () => {
  return(
    <div className='app'>
      <Header />
      <MovieCard />
    </div>
  )
}

export default App;
