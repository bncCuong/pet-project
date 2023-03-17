import { faSquareCheck } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Cart from '../../UI/Cart';
import { useSelector } from 'react-redux';

import completedImage from '../../../assets/completed.jpg';

function CompletedPage() {
    const listJob = useSelector((state) => state.addTodo.todoList);
    const completedJob = listJob.filter((job) => job.completed === true);
    return (
        <div>
            <div className="relative">
                <div className="absolute h-screen z-0 object-contain">
                    <img src={completedImage} alt="bgImg" className="w-full " />
                </div>
                <div className="absolute top-10 left-10 border-[1px] border-red-600 rounded-lg w-[90%] h-20 text-red-600 font-medium text-xl flex gap-4 items-center pl-5 shadow-lg">
                    <span>
                        <FontAwesomeIcon icon={faSquareCheck} />
                    </span>
                    <p>Completed</p>
                </div>
                <div className="absolute w-full px-10 py-20 mt-20 flex-wrap flex gap-4">
                    {completedJob.map((item) => (
                        <Cart
                            name={item.name}
                            key={item.id}
                            important={item.important}
                            id={item.id}
                            completed={item.completed}
                            timeAdd={item.time}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default CompletedPage;
