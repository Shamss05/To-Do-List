import { useState } from "react";

function Todo() {
    const [tasks, setTasks] = useState([]);
    const [title, setTitle] = useState("");
    const [duration, setDuration] = useState("");
    const [date, setDate] = useState("");
    const [open, setOpen] = useState(false);
    const monthNames = [
        "Jan", "Feb", "Mar", "Apr", "May", "June","July", "Aug", "Sept", "Oct", "Nov", "Dec"
    ];
    function openTodo() {
        setOpen(true);
    }
    function closeTodo() {
        setOpen(false);
    }
    function addTask(e) {
        e.preventDefault();
        const newTask = { title, duration, date };
        setTasks([...tasks, newTask]);
        setTitle("");
        setDuration("");
        setDate("");
    }
    function formatDate(dateString) {
        const date = new Date(dateString);
        const day = date.getDate();
        const month = monthNames[date.getMonth()];
        return (
            <div className="text-center px-1">
                <div>
                    <p>{day}</p>
                </div>
                <div>
                    <p>{month}</p>
                </div>
            </div>
        );
    }
    return (
        <div className="min-h-screen bg-neutral-200 flex justify-center items-center p-4">
            <div className="bg-slate-800 rounded-xl w-full max-w-4xl p-8">
                {open ? (
                    <div>
                        <form onSubmit={addTask}>
                            <div className="flex justify-center gap-x-10">
                                <div className="flex flex-col">
                                    <label htmlFor="title" className="text-neutral-200 font-bold text-xl">Title</label>
                                    <input
                                        required
                                        type="text"
                                        id="title"
                                        value={title}
                                        onChange={(e) => setTitle(e.target.value)}
                                        className="w-52 bg-gray-600 p-2 rounded-xl mt-2 text-neutral-200"
                                    />
                                </div>
                                <div className="flex flex-col">
                                    <label htmlFor="duration" className="text-neutral-200 font-bold text-xl">Duration (day)</label>
                                    <input
                                        required
                                        type="text"
                                        id="duration"
                                        value={duration}
                                        onChange={(e) => setDuration(e.target.value)}
                                        className="w-52 bg-gray-600 p-2 rounded-xl mt-2 text-neutral-200"
                                    />
                                </div>
                                <div className="flex flex-col">
                                    <label htmlFor="date" className="text-neutral-200 font-bold text-xl">Date</label>
                                    <input
                                        required
                                        type="date"
                                        id="date"
                                        value={date}
                                        onChange={(e) => setDate(e.target.value)}
                                        className="w-52 bg-gray-600 p-2 rounded-xl mt-2 text-neutral-200"
                                    />
                                </div>
                            </div>
                            <div className="flex justify-center gap-4 mt-8">
                                <button type="submit" className="text-neutral-200 bg-blue-500 p-2 px-10 rounded-xl">Add</button>
                                <button type="button" onClick={closeTodo} className="text-neutral-200 bg-blue-500 p-2 px-10 rounded-xl">Cancel</button>
                            </div>
                        </form>
<div className="mt-8 bg-slate-800 p-4 rounded-xl shadow-lg">
    {tasks.length > 0 && (
        <div className="flex justify-between items-center mb-4">
            <p className="text-neutral-200 font-bold">Filter by month</p>
            <select className="bg-neutral-200 text-black p-2 rounded-xl font-bold">
                <option value="">All</option>
                <option value="1">January</option>
                <option value="2">February</option>
                <option value="3">March</option>
                <option value="4">April</option>
                <option value="5">May</option>
                <option value="6">June</option>
                <option value="7">July</option>
                <option value="8">August</option>
                <option value="9">September</option>
                <option value="10">October</option>
                <option value="11">November</option>
                <option value="12">December</option>
            </select>
        </div>
    )}
    {tasks.length > 0 ? (
        tasks.map((task, index) => (
            <div key={index} className="bg-slate-700 p-4 rounded-xl mt-4 flex items-center gap-4">
                <p className="text-neutral-200 bg-blue-500 mr-20 p-2 rounded-xl font-bold border border-white">
                    {formatDate(task.date)}
                </p>
                <p className="text-neutral-200 text-2xl font-bold">{task.title}</p>
                <p className="text-neutral-200 bg-blue-500 p-2 rounded-xl font-bold ml-auto border border-white">
                    {task.duration} Days
                </p>
            </div>
        ))
    ) : null}
</div>
                    </div>
                ) : (
                    <div className="text-center bg-slate-800 p-8 rounded-xl">
                        <p className="text-neutral-200 text-4xl font-extrabold">To Do List</p>
                        <button onClick={openTodo} className="text-neutral-200 bg-blue-500 p-2 px-8 mt-8 rounded-xl">Add New Task</button>
                        <div className="mt-8 bg-slate-800 p-4 rounded-xl shadow-lg">
    {tasks.length > 0 && (
        <div className="flex justify-between items-center mb-4">
            <p className="text-neutral-200 font-bold">Filter by month</p>
            <select className="bg-neutral-200 text-black p-2 rounded-xl font-bold">
                <option value="">All</option>
                <option value="1">January</option>
                <option value="2">February</option>
                <option value="3">March</option>
                <option value="4">April</option>
                <option value="5">May</option>
                <option value="6">June</option>
                <option value="7">July</option>
                <option value="8">August</option>
                <option value="9">September</option>
                <option value="10">October</option>
                <option value="11">November</option>
                <option value="12">December</option>
            </select>
        </div>
    )}
    {tasks.length > 0 ? (
        tasks.map((task, index) => (
            <div key={index} className="bg-slate-700 p-4 rounded-xl mt-4 flex items-center gap-4">
                <p className="text-neutral-200 bg-blue-500 mr-20 p-2 rounded-xl font-bold border border-white">
                    {formatDate(task.date)}
                </p>
                <p className="text-neutral-200 text-2xl font-bold">{task.title}</p>
                <p className="text-neutral-200 bg-blue-500 p-2 rounded-xl font-bold ml-auto border border-white">
                    {task.duration} Days
                </p>
            </div>
        ))
    ) : null}
</div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Todo;