import './App.css';
import Button from '@material-ui/core/Button';
import HomeIcon from '@material-ui/icons/Home';
import AccAl from '@material-ui/icons/AccessAlarm';

const App = () => {
  return (
    <>
      <Button variant="contained" color="primary">
        Hello world
      </Button>
      <HomeIcon />
      <AccAl />
    </>
  );
};

export default App;
