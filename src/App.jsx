import './App.scss';
import ClockStage from './components/ClockStage';
import Theme from './components/Theme';
import TimezoneDropdown from './components/TimezoneDropdown';

function App() {
  return (
    <div className="app">
      <div className='top-nav'>
        <TimezoneDropdown/>
        <Theme/>
      </div>
      <ClockStage/>
      <div></div>
    </div>
  )
}

export default App
