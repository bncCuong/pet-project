import { useSelector } from 'react-redux';
import Cart from '../../../UI/Cart';

const ListJobs = () => {
    const listJob = useSelector((state) => state.addTodo.todoList);

    return (
        <div className="absolute top-[150px] h-[58%] w-[89%] overflow-y-auto ">
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
    );
};
export default ListJobs;
