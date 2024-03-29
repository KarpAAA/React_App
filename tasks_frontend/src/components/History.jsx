import {fas} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";


export const History = ({history, close}) => {

    return (
        <div className={"fixed h-100 right-0 top-0 z-10 h-full w-1/4"}>
            <div className={'flex flex-row justify-between p-4 text-white text-lg bg-blue-950  w-full'}>
                <div>History</div>
                <div onClick={close}><FontAwesomeIcon className={'px-1'} icon={fas.faXmark}/></div>
            </div>

            <div className={'bg-gray-100 h-full'}>
                {
                    history.operations && history.operations.length > 0
                    &&
                    history.operations.map(operation => (


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

                    ))
                }

            </div>

        </div>
    )
}
