import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {fas} from "@fortawesome/free-solid-svg-icons";
import {Task} from "./Task";
import {useState} from "react";
import {OptionsMenu} from "./OptionsMenu";
import {
    useDeleteTaskListMutation
} from "../store/apis/task.api";
import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {uiActions} from "../store/slices/ui.slice";
import {taskFormActions} from "../store/slices/task.form.slice";
import {setErrorAction} from "../store/slices/error.slice";
import {taskListFormActions} from "../store/slices/task.list.form.slice";


export const TaskList = ({list}) => {
    const navigate = useNavigate();
    const dispatcher = useDispatch();
    const [optionsSelected, setOptionsSelected] = useState(false);
    const [taskListDelete] = useDeleteTaskListMutation();
    const handleAddNewCard = () => {
        dispatcher(taskFormActions.taskPropertyChange({
            property: 'tasksListId',
            value: list.id
        }))
        dispatcher(uiActions.setModalOpenState(true));
        navigate('task/create');
    }
    const handleOptionsClicked = () => {
        setOptionsSelected(!optionsSelected);
    }

    const handleTaskListEdit = () => {
        navigate('task-list/edit');
        dispatcher(taskListFormActions.setEditTaskList(list))
        dispatcher(uiActions.setModalOpenState(true));
    }

    const handleTaskListDelete = async () => {
        try {
            await taskListDelete(list.id).unwrap();
            setOptionsSelected(false);
        }
        catch (e) {
            console.log(e);
            dispatcher(setErrorAction({message: e.data.message, mills: 5000}))
        }
    }


    const options = [
        {
            value: "Edit",
            icon: fas.faEdit,
            iconColor: 'gray-500',
            event: handleTaskListEdit
        },
        {
            value: "Add New Card",
            icon: fas.faPlus,
            iconColor: 'gray-500',
            event: handleAddNewCard
        }, {
            value: "Delete",
            icon: fas.faTrash,
            iconColor: 'red-500',
            event: handleTaskListDelete
        }
    ]


    return (
        <div className={'box-border w-1/4 flex flex-col px-4 flex-shrink-0'}>
            <div id={'list-options'}
                 className={'mb-3 py-2 flex flex-row justify-between font-bold text-lg border-solid border-b-2 border-t-2'}>
                <div id={'list-name'}>{list.title}</div>

                <div id={'list-options-operations'} className={'flex flex-row'}>
                    <div className={'pr-2'}>{list.number}</div>
                    <div className={'cursor-pointer relative'}
                         onClick={handleOptionsClicked}>
                        <FontAwesomeIcon className={'px-1'} icon={fas.faEllipsisVertical}/>
                        {optionsSelected &&
                            <OptionsMenu options={options}></OptionsMenu>
                        }
                    </div>

                </div>

            </div>
            <div className={'mb-3'}>
                <button
                    onClick={handleAddNewCard}
                    className={'w-full text-black text-xl border-dashed border-2 rounded text-center p-2'}
                >
                    <FontAwesomeIcon className={'pr-2'} icon={fas.faPlus}/>Add new card

                </button>


            </div>

            {list.tasks && list.tasks.map(task => (<Task key={task.id} task={task} taskListId={list.id}></Task>))}
        </div>
    );
}