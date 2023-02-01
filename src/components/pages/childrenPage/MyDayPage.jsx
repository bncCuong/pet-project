import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { todoActions } from '../../../stores/store/actions/todo-slice';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faNeuter } from '@fortawesome/free-solid-svg-icons';
import { faPlusSquare, faCircle } from '@fortawesome/free-regular-svg-icons';
import backgroundImg from '../../../assets/bgimage.jpg';
import Tippy from '@tippyjs/react/headless';

import TippyStyles from '../../UI/TippyStyle';

function MyDayPage() {
    const [job, setJob] = useState('');
    const [showIcon, setShowIcon] = useState(true);

    const dispatch = useDispatch();

    const getTime = () => {
        const d = new Date();
        const currentHours = d.getHours();
        const currentMinutes = d.getMinutes();

        return `${currentHours}:${currentMinutes}`;
    };
    const keydownHanler = (e) => {
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
    };

    const mouseUpHanler = () => {
        setShowIcon(false);
        
    };
    return (
        <div className="p-10 h-[100%] relative">
            <div className="absolute  top-0 bottom-0 right-0 left-0 z-0">
                <img src={backgroundImg} alt="userAvatar" className="object-cover  " />
            </div>
            <div className="absolute border-[1px] px-2 py-1 rounded-md shadow-2xl ">
                <p className="text-3xl font-semibold text-black z-10">My Day </p>
                <p className="text-xl font-semibold">
                    Focus on your day: Get things done whit My day, a list that refreshes every day
                </p>
            </div>

            <Tippy
                placement="top-start"
                delay={[200, 200]}
                render={(attrs) => <TippyStyles {...attrs}>Add a task in My day</TippyStyles>}
            >
                <input
                    className="absolute bottom-[100px] border w-[90%] bg-neutral-300 hover:bg-white outline-none pl-10 pr-20 py-2 rounded-md"
                    onChange={(e) => setJob(e.target.value)}
                    onKeyDown={keydownHanler}
                    value={job}
                    onBlur={mouseOutHanler}
                    onMouseUp={mouseUpHanler}
                />
            </Tippy>
            <p className="absolute text-2xl bottom-[106px] ml-3 pointer-events-none ">
                {showIcon ? (
                    <FontAwesomeIcon icon={faPlusSquare} />
                ) : (
                    <div className="">
                        <FontAwesomeIcon icon={faCircle} className="text-[20px] pb-[2px]" />
                        <span className="absolute text-sm ml-3 bottom-1 w-[300px] ">
                            Try typing'buy lamborghini today'
                        </span>
                    </div>
                )}
            </p>
            <p></p>
            <button className="absolute bottom-[110px] right-[50px]">
                <FontAwesomeIcon icon={faNeuter} />
            </button>
        </div>
    );
}

export default MyDayPage;
