import { useDispatch } from 'react-redux';
import { todoActions } from '../../redux/store/actions/todo-slice';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar, faCalendarDays, faCheckSquare, faCircle, faSquare } from '@fortawesome/free-regular-svg-icons';
import { faCheck, faX } from '@fortawesome/free-solid-svg-icons';
import { Fragment } from 'react';

const Cart = (props) => {
    const { id, important, completed, timeAdd, name } = props;

    const dispatch = useDispatch();
    const completedHanler = () => {
        dispatch(
            todoActions.setCompleted({
                id: id,
                jobName: name,
                completed: true,
                timeAdd: timeAdd,
            }),
        );
    };
    const importantHanler = () => {
        dispatch(
            todoActions.setImpotant({
                id: id,
                important: !important,
            }),
        );
    };

    const deleteJob = () => {
        dispatch(
            todoActions.deleteTodo({
                id: id,
            }),
        );
    };

    return (
        <Fragment>
            <div
                className={`${
                    important ? 'box' : ''
                } overflow-hidden relative absoluter w-[240px] h-[240px] border border-transparent rounded-md  
                mb-3 flex flex-col items-start  gap-2 pb-[2px] px-5 bg-gradient-to-bl from-[#3721b4] to-[#0b1d66] bg-opacity-20 animate-slideup 
            `}
            >
                <div className="absolute w-[94%] h-[94%] bg-[#210e91] top-[3%] left-[3%] flex flex-col px-2 py-1 ">
                    <div className="w-full pb-1 border-b-[1px] border-b-gray-400 justify-center flex items-center  text-yellow-50">
                        <FontAwesomeIcon icon={faCalendarDays} />
                        {timeAdd}
                    </div>

                    <p className="text-white text-sm mt-2 break-words leading-[26px]">{name}</p>

                    <div onClick={completedHanler} className="mt-1 text-xl flex items-center gap-5">
                        {!completed ? (
                            <FontAwesomeIcon icon={faSquare} />
                        ) : (
                            <FontAwesomeIcon icon={faCheckSquare} className="text-violet-700  " />
                        )}
                    </div>

                    <label className="absolute w-14 h-6 bg-fuchsia-200 cursor-pointer rounded-full bottom-1 ">
                        <input onClick={importantHanler} type="checkbox" id="check" className="sr-only peer" />
                        <span
                            for="check"
                            className="absolute w-[36%] h-4/5 bg-rose-500/90 rounded-full left-1 top-[2px] peer-checked:bg-rose-700/90 peer-checked:left-8 transition-all duration-500"
                        >
                            {important && (
                                <FontAwesomeIcon
                                    icon={faCheck}
                                    className=" absolute bottom-0 left-[2px] font-bold  text-violet-700 "
                                />
                            )}
                        </span>
                    </label>

                    <button onClick={deleteJob} className="absolute bottom-0 right-0 text-red-500 p-3">
                        <FontAwesomeIcon icon={faX} />
                    </button>
                </div>
            </div>
        </Fragment>
    );
};

export default Cart;
