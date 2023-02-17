import { useDispatch } from 'react-redux';
import { todoActions } from '../../redux/store/actions/todo-slice';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckSquare, faCircle, faSquare } from '@fortawesome/free-regular-svg-icons';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
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
            {important && (
                <p className="border border-violet-400 w-[120px] py-1 flex items-center justify-center rounded-lg bg-violet-300 text-white animate-slideright ">
                    Impotarnt
                </p>
            )}

            <div className="absoluter w-[240px] h-[240px] border border-transparent rounded-md 
                mb-3 flex flex-col items-start  gap-2 pb-[2px] px-5 bg-gradient-to-bl from-[#3721b4] to-[#0b1d66] bg-opacity-20 animate-slideup 
                ">
                <div className="w-full border-b-[1px] border-b-gray-400 justify-center flex  text-yellow-50">{timeAdd}</div>

                <div className="flex gap-4">
                    <p onClick={importantHanler} className="flex items-center">
                        {important ? (
                            <FontAwesomeIcon
                                icon={faCheck}
                                className="border-[2px] border-violet-700 rounded-full shadow-xl shadow-indigo-400/75 text-violet-700"
                            />
                        ) : (
                            <FontAwesomeIcon icon={faCircle} className="" />
                        )}
                    </p>
                    <p>{name}</p>
                </div>
                
                <button onClick={deleteJob}> delete job</button>

                <div onClick={completedHanler} className="mt-1 text-xl flex items-center gap-5">
                    {!completed ? (
                        <FontAwesomeIcon icon={faSquare} />
                    ) : (
                        <FontAwesomeIcon icon={faCheckSquare} className="text-violet-700  " />
                    )}
                </div>
            
                 
            <div className=' box relative z-10 w-20 h-20 rounded-[4px] flex items-center justify-center text-sm px-6 py-1 cursor-pointer
               ]
            '>
                   {/*   before:absolute before:w-[98px] before:h-[98px] before:top-[-12%] before:left-[-14%] before:bg-gradient-to-b from-red-600/8 to-[#000] before:animate-buttonSpin before:z-0
                after:absolute after:w-[75px] after:h-[75px] after:bg-transparent after:top-[3%] after:left-[3%    */}
            </div>
            </div>
        </Fragment>
    );
};

export default Cart;
