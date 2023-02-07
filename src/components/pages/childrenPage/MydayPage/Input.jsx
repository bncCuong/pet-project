import { Fragment, useState } from 'react';
import { useDispatch } from 'react-redux';
import Tippy from '@tippyjs/react/headless';
import TippyStyles from '../../../UI/TippyStyle';
import { todoActions } from '../../../../stores/store/actions/todo-slice';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusSquare, faCircle } from '@fortawesome/free-regular-svg-icons';

const Input = () => {
    const [job, setJob] = useState('');
    const [showIcon, setShowIcon] = useState(true);
    const [showText, setShowText] = useState(true);
    const dispatch = useDispatch();
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
        <Fragment>
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
        </Fragment>
    );
};

export default Input;
