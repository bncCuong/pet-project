import { useDispatch, useSelector } from 'react-redux';
import { todoActions } from '../../stores/store/actions/todo-slice';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-regular-svg-icons';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

const Cart = (props) => {
    const jobList = useSelector((state) => state.addTodo.todoList);

    const isImportant = jobList.every((item) => item.important === true);

    const dispatch = useDispatch();
    const changeIconHanler = () => {
        dispatch(todoActions.setImpotant());
    };
    return (
        <div
            className="absoluter w-full h-10 bg-slate-200 border border-transparent rounded-md 
            mb-3 flex items-center gap-2 pb-[2px] px-4 bg-opacity-75"
        >
            <p onClick={changeIconHanler} className="flex items-center">
                {!isImportant ? (
                    <FontAwesomeIcon
                        icon={faCheck}
                        className="border-[2px] border-indigo-600 rounded-full shadow-xl shadow-indigo-400/75"
                    />
                ) : (
                    <FontAwesomeIcon icon={faCircle} />
                )}
            </p>
            <p>{props.name}</p>
        </div>
    );
};

export default Cart;
