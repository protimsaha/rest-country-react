import './App.css';
import Countries from './components/Countries/Countries';
// import Country from './components/Countries/Country/Country';

function App() {
  return (
    <div className="App">

      <Countries></Countries>

    </div>
  );
}


// function CountryInfo() {
//   const [countries, setCountries] = useState([]);
//   useEffect(() => {
//     fetch('https://restcountries.com/v3.1/all')
//       .then(res => res.json())
//       .then(data => setCountries(data))
//   }, [])
//   return (
//     <div>
//       <h1>Visiting My Favourite Country</h1>
//       <h4>Available countries to visit : {countries.length}</h4>
//       <hr />
//       {
//         countries.map(country => <Country name={country.name.common} population={country.population} capital={country.capital} flags={country.flags.png}></Country>)
//       }
//     </div>
//   )
// }

// function Country(props) {
//   return (
//     <div className='country'>
//       <h2>Country Name: {props.name}</h2>
//       <h5> Population: {props.population}</h5>
//       <h5>Capital:  {props?.capital ? props?.capital : 'not found'}</h5>
//       <img src={props.flags} alt="" />
//     </div>
//   )
// }
export default App;
