import Link from "next/link";

export default function Navbar(){
    return(
        <nav className="flex justify-between items-center bg-slate-400 px-8 py-3">
            <Link href={"/"} className="text-white font-bold">To Do List</Link>
            <Link href={"/addTask"} className="bg-white p-2 text-slate-400 font-bold">Add Task</Link>
        </nav>
    );
}