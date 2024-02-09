import { createPortal } from "react-dom";
import { Backdrop, Wrapper } from "./Modal.styled";
import { useCallback, useEffect } from "react";

export const Modal = ({ toggle, children }) => {

    // const modalRoot = document.querySelector('#modal-root');
    // console.log(modalRoot);
    

    const handleKeyDown = useCallback(e => {
        if(e.code === 'Escape') {
            toggle();
        };
    }, [toggle]);

    useEffect(() => {
        window.addEventListener('keydown', handleKeyDown);

        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [handleKeyDown]);

    const handleBackdrop = e => {
        if(e.currentTarget === e.target) {
            toggle();
        };
    };

    return (
        

    // createPortal( 
        <Backdrop onClick={handleBackdrop}>
            <Wrapper>
                {children()}
            </Wrapper>
        </Backdrop>
    // , 
    //     modalRoot);
    )
};

export default Modal;