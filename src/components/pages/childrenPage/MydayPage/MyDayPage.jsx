import { useSelector } from 'react-redux';
import backgroundImg from '../../../../assets/bgimage.jpg';

import Cart from '../../../UI/Cart';
import Input from './Input';

function MyDayPage() {
    const listJob = useSelector((state) => state.addTodo.todoList);
    return (
        <div className="p-10 h-[100%] relative">
            <div className="absolute  top-0 bottom-0 right-0 left-0 z-0">
                <img src={backgroundImg} alt="userAvatar" className="" />
            </div>
            <div className="absolute border-[1px] px-2 py-1 rounded-md shadow-2xl ">
                <p className="text-3xl font-semibold text-black z-10">My Day </p>
                <p className="text-xl font-semibold">
                    Focus on your day: Get things done whit My day, a list that refreshes every day!!!
                </p>
            </div>

            <div className="absolute top-[150px] h-[58%] w-[89%] overflow-y-scroll">
                {listJob.map((job) => (
                    <Cart
                        key={job.id}
                        name={job.name}
                        id={job.id}
                        important={job.important}
                        completed={job.completed}
                        timeAdd={job.time}
                    />
                ))}
            </div>

            <Input />
        </div>
    );
}

export default MyDayPage;
