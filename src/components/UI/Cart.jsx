import { Fragment, useState } from 'react';
import { useDispatch } from 'react-redux';
import { todoActions } from '../../redux/store/actions/todo-slice';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarDays, faCheckSquare, faSquare } from '@fortawesome/free-regular-svg-icons';
import { faCheck, faSquareXmark } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react/headless';
import TippyStyles from './TippyStyle';
import { DeleJobModal } from '../Modal/logout-modal';
const Cart = (props) => {
    const { id, important, completed, timeAdd, name } = props;
    const [deleModal, setdeleModal] = useState(false);
    const dispatch = useDispatch();

    const completedHanler = () => {
        dispatch(
            todoActions.setCompleted({
                id: id,
                completed: !completed,
            }),
        );
    };
    const importantHanler = () => {
        dispatch(
            todoActions.setImpotant({
                id: id,
                important: !important,
            }),
        );
    };

    const showModal = () => {
        setdeleModal(true);
    };

    const hideModal = () => {
        setdeleModal(false);
    };

    return (
        <Fragment>
            {deleModal && <DeleJobModal hideModal={hideModal} id={id} important={important} completed={completed} />}
            <div
                className={`${
                    important ? 'box' : ''
                } overflow-hidden relative absoluter w-[240px] h-[240px] border border-transparent rounded-md  
                     flex flex-col items-start bg-gradient-to-bl from-[#3721b4] to-[#0b1d66]  animate-slideup 
            `}
            >
                <div className="absolute w-[94%] h-[94%] bg-[#210e91] top-[3%] left-[3%] flex flex-col px-2 py-1 ">
                    <div className="w-full pb-1 border-b-[1px] border-b-gray-400 justify-center flex items-center  text-yellow-50">
                        <FontAwesomeIcon icon={faCalendarDays} className="mr-2" />
                        {timeAdd}

                        <Tippy
                            visible={completed}
                            render={(attrs) => (
                                <TippyStyles>
                                    <p className="text-xs">{!completed ? 'Done ?' : 'Done !'}</p>
                                </TippyStyles>
                            )}
                        >
                            <div
                                onClick={completedHanler}
                                className="cursor-pointer mt-1 text-xl flex items-center gap-5 ml-14"
                            >
                                {!completed ? (
                                    <FontAwesomeIcon icon={faSquare} />
                                ) : (
                                    <FontAwesomeIcon icon={faCheckSquare} className="text-white " />
                                )}
                            </div>
                        </Tippy>
                    </div>

                    <p className="text-white text-sm mt-2 break-words leading-[26px]">{name}</p>

                    <Tippy
                        render={(attrs) => (
                            <TippyStyles {...attrs}>
                                <p className="text-xs">{!important ? 'Important !' : 'Not important'}</p>
                            </TippyStyles>
                        )}
                    >
                        <label className="absolute w-14 h-6 bg-fuchsia-200 cursor-pointer rounded-full bottom-1 ">
                            <input onClick={importantHanler} type="checkbox" id="check" className="sr-only peer" />
                            <span
                                htmlFor="check"
                                className="absolute w-[36%] h-4/5 bg-rose-500/90 rounded-full left-1 top-[2px] peer-checked:bg-rose-700/90 peer-checked:left-8 transition-all duration-500"
                            >
                                {important && (
                                    <FontAwesomeIcon
                                        icon={faCheck}
                                        className=" absolute bottom-0 left-[2px] font-bold  text-violet-700 "
                                    />
                                )}
                            </span>
                        </label>
                    </Tippy>

                    <button onClick={showModal} className="absolute bottom-0 right-2 text-red-500 text-xl ">
                        <FontAwesomeIcon icon={faSquareXmark} />
                    </button>
                </div>
            </div>
        </Fragment>
    );
};

export default Cart;
