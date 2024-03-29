import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {fas} from "@fortawesome/free-solid-svg-icons";
import {Task} from "./Task";
import {useState} from "react";
import {OptionsMenu} from "./OptionsMenu";


export const TaskList = ({list}) => {
    const [optionsSelected, setOptionsSelected] = useState(false);

    const options = [
        {
            value: "Edit",
            icon: fas.faEdit,
            iconColor: 'gray-500',
            event: () => console.log('Editing')
        },
        {
            value: "Add New Card",
            icon: fas.faPlus,
            iconColor: 'gray-500',
            event: () => console.log('Adding')
        }, {
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
        <div className={'box-border w-1/4 flex flex-col px-4'}>
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
                    className={'w-full text-black text-xl border-dashed border-2 rounded text-center p-2'}
                >

                    <FontAwesomeIcon className={'pr-2'} icon={fas.faPlus}/>Add new card

                </button>


            </div>

            {list.tasks && list.tasks.map(task => (<Task task={task}></Task>))}
        </div>
    );
}