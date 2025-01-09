import { FaRegCheckCircle, FaRegCircle } from "react-icons/fa";
import { MdOutlineDeleteOutline } from "react-icons/md";
import classNames from "classnames";

export const TodoItems = ({ text, id, isComplete, deleteTodo, toggle }) => {
    const className = classNames({
        "text-[20px] ml-4": true,
        "line-through opacity-50": isComplete
    })
    return (
        <div className="flex items-center gap-2 my-3">
            <div onClick={() => toggle(id)} className="flex flex-1 items-center cursor-pointer">
                {isComplete ? <FaRegCheckCircle size={20} /> : <FaRegCircle size={20} />}
                <p className={className}>{text}</p>
            </div>
            <MdOutlineDeleteOutline size={20} className="cursor-pointer" onClick={() => { deleteTodo(id) }} />
        </div >
    )
}