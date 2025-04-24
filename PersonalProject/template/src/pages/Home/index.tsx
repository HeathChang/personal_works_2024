import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setHeader } from "../../store/slices/uiSlice";


const HomePage = () => {
    const dispatch = useDispatch()

    useEffect(() => {

    }, []);

    return (
        <>Hello</>
    )
}

export default HomePage