import { Fragment } from 'react';
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
            {impotantJob.map((item) => (
                <Cart
                    className="absolute z-10"
                    name={item.name}
                    key={item.id}
                    important={item.important}
                    id={item.id}
                    completed={item.completed}
                    timeAdd={item.timeAdd}
                />
            ))}
        </div>
    );
}

export default ImpotantPage;
