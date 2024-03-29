import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {fas} from "@fortawesome/free-solid-svg-icons";

export const OptionsMenu = ({options}) => {

    return (
        <div className={"absolute top-7 left-1 bg-white border rounded border-solid border-gray-500 "}>
            <div
                className={'px-5 py-3  font-normal flex flex-col'}
            >
                {options.map(option => (
                    <div className={`mb-2 whitespace-nowrap text-sm text-${option.iconColor}`} onClick={option.event}>
                        <FontAwesomeIcon className={'pr-2'}
                                         icon={option.icon}/>{option.value}
                    </div>
                ))}

            </div>

        </div>
    );
}