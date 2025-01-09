import { FaRegCalendarPlus } from "react-icons/fa";
import { TodoItems } from "./TodoItems";
import { useEffect, useRef, useState } from "react";


export const Todo = () => {
    const [todoList, setTodoList] = useState(localStorage.getItem("todos")
        ? JSON.parse(localStorage.getItem("todos")) : [])

    const InputRef = useRef()
    const Add = () => {
        const inputText = InputRef.current.value.trim();//baştaki ve sondaki boşlukları kaldırmak için trim()
        if (inputText === "") {
            return null
        }
        const newTodo = {
            id: Date.now(),
            text: inputText,
            isComplete: false,
        }
        setTodoList((e) => [...e, newTodo])
        InputRef.current.value = ""
    }

    const deleteTodo = (id) => {
        setTodoList((prvTodos) => prvTodos.filter((todo) => todo.id !== id));
    }

    const toggle = (id) => {
        setTodoList((prevTodos) =>
            prevTodos.map((todo) =>
                todo.id === id ? { ...todo, isComplete: !todo.isComplete } : todo
            )
        )
    }

    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todoList))
    }, [todoList])

    return (
        <div className="bg-orange-100 place-self-center w-11/12 max-w-md  flex flex-col p-7 min-h-[550px] rounded-xl">
            <div className="flex  items-center mt-7 gap-2">
                <FaRegCalendarPlus size={30} />
                <h1 className="text-3xl font-semibold">TO-DO-LİST</h1>
            </div>

            <div className="flex gap-2 items-center my-7 bg-gray-200 rounded-full">
                <input ref={InputRef} className="bg-transparent border-0 outline-none flex-1 h-14 pl-6 pr-5 " type="text" placeholder="Add your task" />
                <button onClick={Add} className="border-none rounded-full bg-slate-800  w-32 h-14 text-white text-lg cursor-pointer font-medium">ADD</button>
            </div>

            <div>
                {todoList.map((items, index) => {
                    return <TodoItems key={index}
                        text={items.text} id={items.id} isComplete={items.isComplete}
                        deleteTodo={deleteTodo} toggle={toggle} />
                })}
            </div>
        </div>
    )
}