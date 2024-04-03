import Header from './components/header/Header';
import Planet from './pages/landing/planet/Planet';

const planetsData = [
  {
    name: 'Mercury',
    src: 'mercury.svg',
    text: 'Some text about Mercury',
    firstBtn: '/mercury/overview',
    secondBtn: '/mercury/internal-structure',
    thirdBtn: '/mercury/surface-geology'
  },
  {
    name: 'Venus',
    src: 'venus.svg',
    text: 'Some text about Venus',
    firstBtn: '/venus/overview',
    secondBtn: '/venus/internal-structure',
    thirdBtn: '/venus/surface-geology'
  },
  {
    name: 'Earth',
    src: 'earth.svg',
    text: 'Some text about Earth',
    firstBtn: '/earth/overview',
    secondBtn: '/earth/internal-structure',
    thirdBtn: '/earth/surface-geology'
  },
  {
    name: 'Mars',
    src: 'mars.svg',
    text: 'Some text about Mars',
    firstBtn: '/mars/overview',
    secondBtn: '/mars/internal-structure',
    thirdBtn: '/mars/surface-geology'
  },
  {
    name: 'Jupiter',
    src: 'jupiter.svg',
    text: 'Some text about Jupiter',
    firstBtn: '/jupiter/overview',
    secondBtn: '/jupiter/internal-structure',
    thirdBtn: '/jupiter/surface-geology'
  },
  {
    name: 'Saturn',
    src: 'saturn.svg',
    text: 'Some text about Saturn',
    firstBtn: '/saturn/overview',
    secondBtn: '/saturn/internal-structure',
    thirdBtn: '/saturn/surface-geology'
  },
  {
    name: 'Uranus',
    src: 'uranus.svg',
    text: 'Some text about Uranus',
    firstBtn: '/uranus/overview',
    secondBtn: '/uranus/internal-structure',
    thirdBtn: '/uranus/surface-geology'
  },
  {
    name: 'Neptune',
    src: 'neptune.svg',
    text: 'Some text about Neptune',
    firstBtn: '/neptune/overview',
    secondBtn: '/neptune/internal-structure',
    thirdBtn: '/neptune/surface-geology'
  }
];

function App() {
  return (
    <>
      <Header />
      {planetsData.map((planetData, index) => (
        <Planet key={index} {...planetData} />
      ))}
    </>
  );
}

export default App;
