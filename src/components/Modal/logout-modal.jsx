import { Fragment } from 'react';
import ReactDOM from 'react-dom';
import { useDispatch } from 'react-redux';
import { todoActions } from '../../redux/store/actions/todo-slice';

const BackDrop = (props) => {
    return <div className="fixed inset-0 bg-gray-500 opacity-30 z-10"></div>;
};

const SignInOverlay = (props) => {
    return (
        <div className="z-10 fixed w-[400px] h-[200px] inset-0 m-auto bg-white text-black flex flex-col items-center justify-center">
            <p>Accout or Password invalid, try again</p>
        </div>
    );
};

const SignInModal = () => {
    return (
        <Fragment>
            {ReactDOM.createPortal(<BackDrop />, document.getElementById('backdrop-root'))}
            {ReactDOM.createPortal(<SignInOverlay />, document.getElementById('modal-root'))}
        </Fragment>
    );
};

const DeleJobOverlay = ({ hideModal, id, important, completed }) => {
    const dispatch = useDispatch();
    const deleteJobHanler = () => {
        dispatch(
            todoActions.deleteTodo({
                id: id,
                completed: completed,
                important: important,
            }),
        );
    };

    return (
        <div className="absolute inset-0 m-auto bg-slate-50 w-64 h-fit z-10 px-4 py-2 rounded-xl">
            <p className="text-red-500 flex flex-col items-center">Are you sure DELETE JOB ?</p>
            <div className="flex justify-end gap-5 my-4">
                <button className="border-[1px] bg-slate-400 px-6 py-1 rounded-lg" onClick={hideModal}>
                    No
                </button>
                <button className="border-[1px] bg-slate-400 px-6 py-1 rounded-lg" onClick={deleteJobHanler}>
                    Yes
                </button>
            </div>
        </div>
    );
};

const DeleJobModal = ({ hideModal, completed, important, id }) => {
    return (
        <Fragment>
            {ReactDOM.createPortal(<BackDrop />, document.getElementById('backdrop-root'))}

            {ReactDOM.createPortal(
                <DeleJobOverlay hideModal={hideModal} completed={completed} important={important} id={id} />,
                document.getElementById('modal-root'),
            )}
        </Fragment>
    );
};

export { SignInModal, DeleJobModal };
