import { faStar } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useSelector } from 'react-redux';

import bgImg from '../../../assets/important-bg.jpg';
import Cart from '../../UI/Cart';
function ImpotantPage() {
    const listJob = useSelector((state) => state.addTodo.todoList);
    const impotantJob = listJob.filter((job) => job.important === true);

    return (
        <div className="relative">
            <div className="absolute h-screen z-0">
                <img src={bgImg} alt="bgImg" className=" h-[100%] " />
            </div>
            <div className="absolute top-10 left-10 border-[1px] border-white rounded-lg w-[90%] h-20 text-white font-medium text-xl flex gap-4 items-center pl-5 shadow-lg">
                <span>
                    <FontAwesomeIcon icon={faStar} />
                </span>
                <p>Important</p>
            </div>
            <div className="absolute w-full px-10 py-20 mt-20 flex-wrap flex gap-4">
                {impotantJob.map((item) => (
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
    );
}

export default ImpotantPage;
