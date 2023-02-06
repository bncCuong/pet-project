import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { todoActions } from '../../../stores/store/actions/todo-slice';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faNeuter } from '@fortawesome/free-solid-svg-icons';
import { faPlusSquare, faCircle } from '@fortawesome/free-regular-svg-icons';
import backgroundImg from '../../../assets/bgimage.jpg';
import Tippy from '@tippyjs/react/headless';

import TippyStyles from '../../UI/TippyStyle';
import Cart from '../../UI/Cart';

function MyDayPage() {
    const [job, setJob] = useState('');
    const [showIcon, setShowIcon] = useState(true);
    const [showText, setShowText] = useState(true);
    const dispatch = useDispatch();

    const listJob = useSelector((state) => state.addTodo.todoList);

    const getTime = () => {
        const d = new Date();
        const currentHours = d.getHours();
        const currentMinutes = d.getMinutes();

        return `${currentHours}:${currentMinutes} - ${d.getDate()}/${d.getMonth()}`;
    };
    const keydownHanler = (e) => {
        setShowText(false);

        if (e.target.value.trim().length === 0) {
            return;
        }
        const keyPress = e.keyCode;
        if (keyPress === 13) {
            dispatch(
                todoActions.addToDo({
                    name: job,
                    time: getTime(),
                    important: false,
                    completed: false,
                }),
            );
            setJob('');
        }
    };

    const mouseOutHanler = () => {
        setShowIcon(true);
        setShowText(true);
    };

    const mouseUpHanler = () => {
        setShowIcon(false);
        if (job.length > 0) {
            setShowText(false);
        }
    };

    const changeInputHanler = (e) => {
        setJob(e.target.value);
    };

    return (
        <div className="p-10 h-[100%] relative">
            <div className="absolute  top-0 bottom-0 right-0 left-0 z-0">
                <img src={backgroundImg} alt="userAvatar" className="object-cover  " />
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

            <Tippy
                placement="top-start"
                delay={[200, 200]}
                render={(attrs) => <TippyStyles {...attrs}>Add a task in My day</TippyStyles>}
            >
                <input
                    className="absolute bottom-[100px] border w-[89%] bg-neutral-300 hover:bg-white outline-none pl-10 pr-20 py-2 rounded-md"
                    onChange={changeInputHanler}
                    value={job}
                    onBlur={mouseOutHanler}
                    onMouseUp={mouseUpHanler}
                    onKeyDown={keydownHanler}
                />
            </Tippy>
            <div className="absolute text-2xl bottom-[106px] ml-3 pointer-events-none ">
                {showIcon ? (
                    <FontAwesomeIcon icon={faPlusSquare} />
                ) : (
                    <div className="">
                        <FontAwesomeIcon icon={faCircle} className="text-[20px] pb-[2px]" />
                        {showText && (
                            <span className="absolute text-sm ml-3 bottom-1 w-[300px] ">
                                Try typing'buy lamborghini today'
                            </span>
                        )}
                    </div>
                )}
            </div>
            <button className="absolute bottom-[110px] right-[50px]">
                <FontAwesomeIcon icon={faNeuter} />
            </button>
        </div>
    );
}

export default MyDayPage;
