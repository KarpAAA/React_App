import {Route, Routes} from "react-router-dom";
import {TaskDetailed} from "./TaskDetailed";
import {useEffect, useRef, useState} from "react";


export const ModalWindow = ({close}) => {
    const modalRef = useRef(null);
    const [modalContainer, setModalContainer] = useState(null)
    useEffect(() => {
        setModalContainer(modalRef.current)
    }, [modalRef]);
    return (
        <div className={"fixed w-full h-full rounded"} ref={modalRef}>
            <Routes>
                <Route path={'task/:id'} element={<TaskDetailed modalContainer={modalContainer} close={close}/>}></Route>
                <Route path={'task/delete/:id'} element={"delete"}></Route>
                <Route path={'task/edit/:id'} element={"edit"}></Route>
                <Route path={'task/create/:id'} element={"create task"}></Route>
            </Routes>
        </div>
    );
}