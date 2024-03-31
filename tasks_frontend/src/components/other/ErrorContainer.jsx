import {useSelector} from "react-redux";


export const ErrorContainer = () => {
    const {error} = useSelector(state => state.error);
    return (
            <div className={'bg-red-500 w-full text-white text-center text-3xl py-5 fixed left-0 top-0'}>
            {error.message}
        </div>
    )
}