import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
const MenuItem = (props) => {
    const totalJob = useSelector((state) => state.addTodo.totalJob);
    const totalImpotant = useSelector((state) => state.addTodo.totalImpotant);
    const totalCompleted = useSelector((state) => state.addTodo.totalCompleted);

    return (
        <NavLink
            to={props.to}
            className={({ isActive }) => (isActive ? 'bg-gradient-to-r from-yellow-400 to-orange-400' : undefined)}
            end
        >
            <div
                className={`relative flex gap-2 items-center mb-2 text-xl  py-2 pl-4 cursor-pointer hover:bg-gradient-to-r from-yellow-400 to-orange-400
                mt-2 after:absolute  after:content-[''] after:left-1  after:w-1 after:h-4 after:rounded-lg hover:after:bg-white after:animate-bounce`}
            >
                <span className="text-white">{props.icon}</span>
                <p className="font-semibold text-white checked:bg-black">{props.title}</p>
                <div className={`absolute left-2 top-[-5px] text-sm text-[#3721b4] font-bold `}>
                    {totalJob > 0 && props.title === 'Today' ? totalJob : ''}
                </div>

                <div className="absolute left-2 top-[-5px] text-sm text-[#3721b4] font-bold">
                    {totalImpotant > 0 && props.title === 'Important' ? totalImpotant : ''}
                </div>

                <div className={`absolute left-2 top-[-5px] text-sm text-[#3721b4] font-bold `}>
                    {totalCompleted > 0 && props.title === 'Completed' && totalCompleted}
                </div>
            </div>
        </NavLink>
    );
};
export default MenuItem;
