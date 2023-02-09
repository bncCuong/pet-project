import { useSelector } from 'react-redux';

import bgImg from '../../../assets/important-bg.jpg';
import Cart from '../../UI/Cart';
function ImpotantPage() {
    const listJob = useSelector((state) => state.addTodo.todoList);
    const impotantJob = listJob.filter((job) => job.important === true);

    console.log(impotantJob);
    return (
        <div className="relative">
            <div className="absolute h-screen z-0">
                <img src={bgImg} alt="bgImg" className=" h-[100%] " />
            </div>
            <div className="absolute w-full px-10 py-20">
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
