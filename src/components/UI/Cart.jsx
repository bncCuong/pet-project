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

            <div
                className="absoluter w-full h-10 bg-slate-200 border border-transparent rounded-md 
            mb-3 flex items-center justify-between gap-2 pb-[2px] px-5 bg-opacity-75 animate-slideup "
            >
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
                    <div className="">{timeAdd}</div>
                    {!completed ? (
                        <FontAwesomeIcon icon={faSquare} />
                    ) : (
                        <FontAwesomeIcon icon={faCheckSquare} className="text-violet-700  " />
                    )}
                </div>
            </div>
        </Fragment>
    );
};

export default Cart;
