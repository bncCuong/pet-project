import useTimer from '../../hooks/useTimer';
const TimeAndDate = (props) => {
    const { toDay, time, currentDay, currentYear } = useTimer();
    return (
        <div className=" px-4 ">
            <div className="flex items-center gap-2">
                <p className="text-xl text-[#3721b4] font-bold">{currentYear} - </p>
                <div className="text-xl font-bold text-white pb-[1px]">{toDay}</div>
            </div>
            <div className="flex gap-3">
                <div>{currentDay}</div>
                <div>{time}</div>
            </div>
        </div>
    );
};
export default TimeAndDate;
