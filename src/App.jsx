import './App.scss';
import ClockStage from './components/ClockStage';
import Theme from './components/Theme';
import TimezoneDropdown from './components/TimezoneDropdown';

function App() {
  return (
    <div className="app">
      <TimezoneDropdown/>
      <ClockStage/>
      <Theme/>
    </div>
  )
}

export default App
