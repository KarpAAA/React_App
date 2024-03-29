import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {fas} from "@fortawesome/free-solid-svg-icons";

export const TaskDetailed = ({modalContainer, close}) => {

    const operation = {
        action: "lorem ipsum dolor sit lorem ipsum dolor sit lorem ipsum dolor sit\n" +
            "                                lorem ipsum dolor sit lorem ipsum dolor sit lorem ipsum dolor sit",
        dateTime: 'Mar 5 at 5:10pm'
    };
    if(modalContainer){
        modalContainer.style.left = '10%';
        modalContainer.style.top = '10%';
    }

    return (
        <div className={"w-4/5 h-4/5 bg-white "} style={{left: '10%', top: "10%"}}>
            <div
                onClick={close}
                className={'flex justify-end bg-blue-950 text-white text-3xl px-5 py-2 -full rounded-t'}>
                <FontAwesomeIcon icon={fas.faXmark}/>
            </div>


            <div className={'flex flex-wrap h-full'}>
                <div className={'box-border w-3/5 bg-white  p-10'}>
                    <div className={'mt-5 flex flex-col'}>
                        <div className={'flex flex-row justify-between align-middle'}>
                            <div className={'font-bold text-3xl'}>Task name</div>
                            <div>
                                <button
                                    className={'font-medium border-solid border-gray-400 border rounded px-3 py-1'}>
                                    <FontAwesomeIcon icon={fas.faEdit} className={"mr-2 text-gray-400"}></FontAwesomeIcon>
                                    Edit task
                                </button>
                            </div>
                        </div>
                        <div className={'flex flex-row text-black text-md mt-5 font-medium'}>
                            <div className={'flex flex-col mr-10 text-gray-600'}>
                                <div className={'mt-2'}>
                                    <FontAwesomeIcon icon={fas.faCrosshairs} className={"mr-4 text-gray-600"}></FontAwesomeIcon>
                                    Status
                                </div>
                                <div className={'mt-2'}>
                                    <FontAwesomeIcon icon={fas.faCalendar} className={"mr-4 text-gray-600"}></FontAwesomeIcon>
                                    Due to
                                </div>
                                <div className={'mt-2'}>
                                    <FontAwesomeIcon icon={fas.faTag} className={"mr-4 text-gray-600"}></FontAwesomeIcon>
                                    Priority
                                </div>
                            </div>
                            <div className={'flex flex-col ml-10'}>
                                <div className={'mt-2'}>In progress</div>
                                <div className={'mt-2'}>Date</div>
                                <div className={'mt-2'}>Low</div>
                            </div>

                        </div>
                        <div className={'font-bold text-2xl mt-10 mb-5'}>Description</div>
                        <div className={''}>Проблема з переносом тексту може виникнути через використання класу flex для контейнера, який містить текстовий блок. Клас flex дозволяє контейнеру розтягуватися по ширині елементів, які містить, але не завжди автоматично переносити текст на новий рядок при досягненні максимальної ширини</div>
                    </div>
                </div>

                <div className={'box-border w-2/5 bg-gray-200 p-10'}>
                    <div className={'mt-5 flex flex-col'}>
                        <div className={'flex flex-row justify-between align-middle'}>
                            <div className={'font-bold text-3xl'}>Activity</div>

                        </div>

                        <div className={'px-5 text-gray-500 pt-5'}>
                            <div className={'flex'}>
                                <FontAwesomeIcon icon={fas.faCircle}
                                                 className={`mr-2 text-sm w-2 h-2 mt-2 text-gray-500`}/>
                                <div>
                                    {operation.action}
                                </div>
                            </div>
                            <div className={'italic mt-2 ml-3'}>
                                {operation.dateTime}
                            </div>
                        </div>

                        <div className={'px-5 text-gray-500 pt-5'}>
                            <div className={'flex'}>
                                <FontAwesomeIcon icon={fas.faCircle}
                                                 className={`mr-2 text-sm w-2 h-2 mt-2 text-gray-500`}/>
                                <div>
                                    {operation.action}
                                </div>
                            </div>
                            <div className={'italic mt-2 ml-3'}>
                                {operation.dateTime}
                            </div>
                        </div>
                        <div className={'px-5 text-gray-500 pt-5'}>
                            <div className={'flex'}>
                                <FontAwesomeIcon icon={fas.faCircle}
                                                 className={`mr-2 text-sm w-2 h-2 mt-2 text-gray-500`}/>
                                <div>
                                    {operation.action}
                                </div>
                            </div>
                            <div className={'italic mt-2 ml-3'}>
                                {operation.dateTime}
                            </div>
                        </div>

                       </div>
                </div>
            </div>
        </div>
    );
}