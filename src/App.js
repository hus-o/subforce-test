import Games from './components/games';

function App() {
  return (
    <div className="App">
      <main>
        <section className="flex flex-col items-center mb-5 text-center">
          <h1 className="text-2xl text-white mb-5 md:text-4xl"><strong>Make new friends in your favorite games</strong></h1>
          <button className="bg-gray-400 mb-5 text-xl h-16 w-32 md:text-3xl md:h-20 md:w-48">Discover</button>
          <div className="bg-blue-300 h-28 w-10/12 lg:w-8/12 text-center pt-12 text-xl">ADVERT</div>
        </section>

        <section className="flex flex-col items-center text-center lg:flex-row justify-around" >
        <div className="bg-blue-300 h-28 w-10/12 ad-big text-center pt-12 text-xl mb-5 ">ADVERT</div>
          <Games />
        <div className="bg-blue-300 h-28 w-10/12 ad-big text-center pt-12 text-xl mt-5">ADVERT</div>
        </section>
      </main>
    </div>
  );
}

export default App;
