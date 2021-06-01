import './App.css';
import Games from './components/games';

function App() {
  return (
    <div className="App">
      <main>
        <section className="flex flex-col items-center mb-5">
          <h1 className="text-2xl mb-5 md:text-4xl"><strong>Make new friends in your favorite games</strong></h1>
          <button className="bg-gray-400 mb-5 text-xl h-16 w-32 md:text-3xl md:h-20 md:w-48">Discover</button>
          <div className="bg-blue-300 h-32 w-10/12 md:w-11/12 text-center pt-12 text-xl">ADVERT</div>
        </section>

        <section className="flex flex-col items-center md:flex-row justify-around" >
        {/* <div className="bg-blue-300 h-32 w-10/12 md:w-48 md:h-10/12 text-center pt-12 text-xl">ADVERT</div> */}
          <Games />
          {/* <div className="bg-blue-300 h-32 w-10/12 md:w-48 md:h-10/12 text-center pt-12 text-xl">ADVERT</div> */}
        </section>
      </main>
    </div>
  );
}

export default App;
