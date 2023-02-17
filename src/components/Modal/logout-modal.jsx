import { Fragment } from 'react';
import ReactDOM from 'react-dom';

const BackDrop = (props) => {
    return <div className="fixed inset-0 bg-gray-500 opacity-30 z-10"></div>;
};

const ModalOverlay = (props) => {
    return (
        <div className="z-10 fixed w-[400px] h-[200px] inset-0 m-auto bg-white text-black flex flex-col items-center justify-center">
            <p>Is this work really done?</p>
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
