import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {fas} from "@fortawesome/free-solid-svg-icons";
import {OptionsMenu} from "./OptionsMenu";
import {useState} from "react";
import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {uiActions} from "../store/slices/ui.slice";
import {
    useDeleteTaskMutation,
    useEditTaskMutation,
    useGetAllTasksListsQuery
} from "../store/apis/task.api";
import {taskFormActions} from "../store/slices/task.form.slice";


export const Task = ({task, taskListId}) => {
    const dispatcher = useDispatch();
    const navigate = useNavigate();
    const [optionsSelected, setOptionsSelected] = useState(false);
    const [deleteTask] = useDeleteTaskMutation();
    const [editTask] = useEditTaskMutation();
    const {data: tasksList } = useGetAllTasksListsQuery();

    const handleTaskEdit = () => {
        dispatcher(taskFormActions.setEditTask(task))
        dispatcher(uiActions.setModalOpenState(true));
        navigate('task/edit');
    }
    const handleTaskDelete = () => {
        deleteTask(task.id);
        setOptionsSelected(false);
    }
    const handleMoveToChange = async (e) => {
        const tasksListId = e.target.value;
        await editTask({id: task.id, tasksListId}).unwrap();
    }
    const handleOptionsClicked = () => {
        setOptionsSelected(!optionsSelected);
    }
    const handleTaskClicked = () => {
        dispatcher(uiActions.setModalOpenState(true));
        navigate(`/task/${task.id}`)
    }

    const options = [
        {
            value: "Edit",
            icon: fas.faEdit,
            iconColor: 'gray-500',
            event: handleTaskEdit
        },
        {
            value: "Delete",
            icon: fas.faTrash,
            iconColor: 'red-500',
            event: handleTaskDelete
        }
    ]

    return (
        <div className={'flex flex-col mb-3 p-5 w-full border border-solid rounded border-gray-300'}

        >
            <div className={'flex flex-row justify-between font-medium text-lg mb-2'}>
                <div onClick={handleTaskClicked} className={'break-all'}>{task.title}</div>

                <div className={'cursor-pointer relative'}
                     onClick={handleOptionsClicked}>
                    <FontAwesomeIcon className={'px-1'} icon={fas.faEllipsisVertical}/>
                    {optionsSelected &&
                        <OptionsMenu options={options}></OptionsMenu>
                    }
                </div>

            </div>
            <div className={'text-black text-sm mb-3 break-words'}>
                {task.content}
            </div>
            <div className={'text-lg text-black mb-3'}>
                <FontAwesomeIcon icon={fas.faCalendar} className={"mr-2"}/>
                {task.date}
            </div>
            <div id={'task-priority'} className={"border rounded-full bg-gray-100 w-fit px-2 py-1 text-sm mb-3"}>
                <FontAwesomeIcon icon={fas.faCircle}
                                 className={`mr-1 text-sm w-2 h-3 mb-0.5 text-${task.priority}`}/>
                {task.priority}
            </div>
            <div >
                <select className={'border rounded bg-gray-600 text-white text-sm w-full px-3 py-1'}
                        value={taskListId}
                        onChange={handleMoveToChange}>

                    {tasksList && tasksList.map(task => {
                        return { title : task.title, id : task.id}
                    }).map(({title,id}) => (
                        <option key={id} value={id}>{title}</option>
                    ))}
                </select>
            </div>
        </div>
    );
}