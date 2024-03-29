import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {fas} from "@fortawesome/free-solid-svg-icons";
import {TaskList} from "./components/TaskList";
import {History} from "./components/History";
import {useState} from "react";
import {ModalWindow} from "./components/ModalWindow";
import {BrowserRouter as Router, useNavigate} from "react-router-dom";

function App() {
    const navigate = useNavigate();
    const [ifShowHistory, setIfShowHistory] = useState(false);
    const [ifShowModal, setIfShowModal] = useState(true);
    const history =  {
        operations: [
            {
                action: "lorem ipsum dolor sit lorem ipsum dolor sit lorem ipsum dolor sit\n" +
                    "                                lorem ipsum dolor sit lorem ipsum dolor sit lorem ipsum dolor sit",
                dateTime: 'Mar 5 at 5:10pm'
            }
        ]
    }
    const tasksList = [
        {
            title: "To do",
            number: 45,
            tasks: [
                {
                    title: "Task 1",
                    content: "Замовте наші послуги таксі, щоб швидко та комфортно дістатися до\n" +
                        "                вашого пункту призначення. Наші досвідчені водії та зручні автомобілі зроблять ваш поїздку приємною та\n" +
                        "                безпечною. Дзвоніть зараз, щоб замовити таксі!",
                    date: "Wed, 19 Apr",
                    priority: {
                        value: "Medium",
                        color: "grey"
                    },
                    status: "InProgress",
                    history: []
                },
                {
                    title: "Task 1",
                    content: "Замовте наші послуги таксі, щоб швидко та комфортно дістатися до\n" +
                        "                вашого пункту призначення. Наші досвідчені водії та зручні автомобілі зроблять ваш поїздку приємною та\n" +
                        "                безпечною. Дзвоніть зараз, щоб замовити таксі!",
                    date: "Wed, 19 Apr",
                    priority: {
                        value: "Medium",
                        color: "grey"
                    },
                    history: []
                }
            ],

        },
        {
            title: "To do",
            number: 45,
            tasks: [
                {
                    title: "Task 1",
                    content: "Замовте наші послуги таксі, щоб швидко та комфортно дістатися до\n" +
                        "                вашого пункту призначення. Наші досвідчені водії та зручні автомобілі зроблять ваш поїздку приємною та\n" +
                        "                безпечною. Дзвоніть зараз, щоб замовити таксі!",
                    date: "Wed, 19 Apr",
                    priority: {
                        value: "Medium",
                        color: "grey"
                    },
                    history: []
                }
            ],

        },
        {
            title: "To do",
            number: 45,
            tasks: [

            ],

        },
        {
            title: "To do",
            number: 45,
            tasks: [
                {
                    title: "Task 1",
                    content: "Замовте наші послуги таксі, щоб швидко та комфортно дістатися до\n" +
                        "                вашого пункту призначення. Наші досвідчені водії та зручні автомобілі зроблять ваш поїздку приємною та\n" +
                        "                безпечною. Дзвоніть зараз, щоб замовити таксі!",
                    date: "Wed, 19 Apr",
                    priority: {
                        value: "Medium",
                        color: "grey"
                    },
                    history: []
                }
            ],

        }
    ];

    const handleHistoryClicked = () => {
        setIfShowHistory(true);
    }
    return (
        <div>
            <div className={"flex flex-row justify-between my-4 align-middle"}>
                <div id={'header-title'} className={"font-bold text-3xl text-center"}>
                    My Task Board
                </div>
                <div id={'options'} className={'flex align-middle'}>
                    <button
                        className={"mr-5 text-black border-solid border-2 border-gray-500 rounded px-3 py-2"}
                        onClick={handleHistoryClicked}
                    >
                        <FontAwesomeIcon className={'px-1'} icon={fas.faArrowRotateLeft}/>
                        History
                    </button>
                    <button
                        className={"mr-5 text-white bg-blue-950 rounded px-3 py-2"}
                        onClick={() => {
                            setIfShowModal(true);
                            navigate('task/1')
                        }}
                    >
                        <FontAwesomeIcon className={'px-1'} icon={fas.faPlus}/>
                        Create new list
                    </button>
                </div>
            </div>

            <div id={"tasks-lists"} className={'flex flex-wrap w-100'}>
                {tasksList && tasksList.map(list =>
                    <TaskList list={list}></TaskList>
                )}

            </div>
            {
                ifShowHistory && <History history={history} close={() => setIfShowHistory(false)}>
                </History>
            }

            {
                ifShowModal && <ModalWindow close={() => setIfShowModal(false)}/>
            }
        </div>
    );
}

export default App;
