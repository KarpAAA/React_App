import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {fas} from "@fortawesome/free-solid-svg-icons";
import {OptionsMenu} from "./OptionsMenu";
import {useState} from "react";


export const Task = ({task}) => {
    const [optionsSelected, setOptionsSelected] = useState(false);

    const options = [
        {
            value: "Edit",
            icon: fas.faEdit,
            iconColor: 'gray-500',
            event: () => console.log('Editing')
        },
        {
            value: "Delete",
            icon: fas.faTrash,
            iconColor: 'red-500',
            event: () => console.log('Deleting')
        }
    ]


    const handleOptionsClicked = () => {
        console.log("handleOptionsClicked");
        setOptionsSelected(!optionsSelected);
    }

    return (
        <div className={'flex flex-col mb-3 p-5 w-full border border-solid rounded border-gray-300'}
        >
            <div className={'flex flex-row justify-between font-medium text-lg mb-2'}>
                <div>{task.title}</div>

                <div className={'cursor-pointer relative'}
                     onClick={handleOptionsClicked}>
                    <FontAwesomeIcon className={'px-1'} icon={fas.faEllipsisVertical}/>
                    {optionsSelected &&
                        <OptionsMenu options={options}></OptionsMenu>
                    }
                </div>

            </div>
            <div className={'text-black text-sm mb-3'}>
                {task.content}
            </div>
            <div className={'text-lg text-black mb-3'}>
                <FontAwesomeIcon icon={fas.faCalendar} className={"mr-2"}/>
                {task.date}
            </div>
            <div id={'task-priority'} className={"border rounded-full bg-gray-100 w-fit px-2 py-1 text-sm mb-3"}>
                <FontAwesomeIcon icon={fas.faCircle}
                                 className={`mr-1 text-sm w-2 h-3 mb-0.5 text-${task.priority.color}`}/>
                {task.priority.value}
            </div>
            <div id={'move_task'}>
                <select className={'border rounded bg-gray-300 text-sm w-full px-3 py-1'}>
                    <option value="">Move to...</option>
                    <option value="">GitHub</option>
                    <option value="">Instagram</option>
                    <option value="">Facebook</option>
                </select>
            </div>
        </div>
    );
}