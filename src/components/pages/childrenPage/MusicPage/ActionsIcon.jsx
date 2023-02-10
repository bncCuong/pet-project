import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleRight, faHeart } from '@fortawesome/free-regular-svg-icons';
import { faEllipsis } from '@fortawesome/free-solid-svg-icons';

import Tippy from '@tippyjs/react/headless';
import TippyStyles from '../../../UI/TippyStyle';

const ActionIcon = () => {
    return (
        <div className="mt-4 flex gap-5">
            <Tippy
                delay={[0, 200]}
                render={(attrs) => (
                    <TippyStyles {...attrs}>
                        <p className="text-sm text-black">Like</p>
                    </TippyStyles>
                )}
            >
                <p className="w-10 h-10 rounded-full bg-[#55495f] text-white flex items-center justify-center hover:bg-gray-500 cursor-pointer">
                    <FontAwesomeIcon icon={faHeart} />
                </p>
            </Tippy>

            <Tippy
                interactive
                render={(attrs) => (
                    <TippyStyles>
                        <p className="text-sm text-black">
                            Another <FontAwesomeIcon icon={faArrowAltCircleRight} />
                        </p>
                    </TippyStyles>
                )}
            >
                <div className=" w-10 h-10 rounded-full bg-[#55495f] text-white flex items-center justify-center hover:bg-gray-500 cursor-pointer">
                    <FontAwesomeIcon icon={faEllipsis} />
                </div>
                {/* <div className="absolute w-52 h-52 rounded-lg bg-slate-600/50  "></div> */}
            </Tippy>
        </div>
    );
};

export default ActionIcon;
