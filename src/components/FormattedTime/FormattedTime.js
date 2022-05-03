import styles from './FormattedTime.module.scss';

const FormattedTime = ({ time }) => {
   const formatTime = millseconds => {
     const zeroPad = (num) => String(num).padStart(2, '0');
     let msec = String(millseconds).slice(-3);
     let sec = zeroPad(Math.floor(millseconds / 1000));
     let min = zeroPad(Math.floor(sec / 60));
     let h = zeroPad(Math.floor(min / 60));

     return (`${h}:${min}:${sec}.${msec}`);
   };

  return (
      <h2 className={styles.stopwatch}>{formatTime(time)}</h2>
  );
};

export default FormattedTime;
