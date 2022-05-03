import {useEffect} from 'react';
import {useState} from 'react';
import styles from './Stopwatch.module.scss'
import Button from '../Button/Button'
import FormattedTime from '../FormattedTime/FormattedTime'

const Stopwatch = () => {

  const [time, setTime] = useState(0);
  const [Running, setRunning] = useState(false);

  useEffect(() => {
    let timer;

    if(Running) {
      timer = setInterval(() => {
        setTime((prevValue) => ++prevValue)
      }, 1);
    } else {
      clearInterval(timer);
    }
    return () => clearInterval(timer);
  }, [Running]);

  return (
    <div>
      <FormattedTime time={time} />
      <div className={styles.buttons_container}>
        <Button onClick={() => setRunning(true)}>Start</Button>
        <Button onClick={() => setRunning(false)}>Stop</Button>
        <Button onClick={() => setTime(0)}>Reset</Button>
      </div>
    </div>
  )
}

export default Stopwatch;
