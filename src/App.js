import Banner from './components/Banner';
import Navbar from './components/Navbar';
import Card from './components/Card';
import data from './data';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner />
      <div className='cards'>
        {data.map(card => {
          return <Card data={card} key={card.id}/>
        })}

        {/* <Card />
        <Card />
        <Card /> */}
      </div>
    </div>
  );
}

export default App;
