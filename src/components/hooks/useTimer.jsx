import { useTime } from 'react-timer-hook';

const useTimer = () => {
    const { minutes, hours, ampm } = useTime({ format: '12-hour' });
    const d = new Date();

    const currentDate = d.getDate();
    const currentYear = d.getFullYear();
    const currentDay = ['Sunday', 'Monday', 'Tuseday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'][d.getDay()];
    const currentMonth = [
        'January',
        'Ferbuary',
        'March',
        'April',
        'May',
        'June',
        'Jully',
        'August',
        'September',
        'Octuber',
        'November',
        'December',
    ];
    const toDay = `${currentDate}, ${currentMonth[d.getMonth()]}`;
    const time = `${hours}: ${minutes} ${ampm}`;
    return { toDay, time, currentYear, currentDay };
};
export default useTimer;
