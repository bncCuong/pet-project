import { Fragment } from 'react';
import ReactDOM from 'react-dom';

const BackDrop = (props) => {
    return <div className="absolute top-0 left-0 right-0 bottom-0 bg-gray-500 opacity-30 ">hello</div>;
};

const ModalOverlay = (props) => {
    return (
        <div className="w-[800px] h-[400px] bg-white text-white flex flex-col items-center justify-center">
            <p>Is this job really done?</p>
            <p>this will be moved to the integrated page</p>
            <button>Confirm</button>
        </div>
    );
};

const LogoutModal = () => {
    return (
        <Fragment>
            {ReactDOM.createPortal(<BackDrop />, document.getElementById('backdrop-root'))}
            {ReactDOM.createPortal(<ModalOverlay />, document.getElementById('modal-root'))}
        </Fragment>
    );
};

export default LogoutModal;
