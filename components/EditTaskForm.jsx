export default function EditTaskForm(){
    return(
    <form className="flex flex-col gap-3">       
        <input type="text" placeholder="Topic Title" className="border border-rslate-500 px-8 py-2"></input>
        <input type="text" placeholder="Topic Description" className="border border-rslate-500 px-8 py-2"></input>
        <button  className="bg-green-600 font-bold text-white py-3 px-6 w-fit">Update Task</button>
    </form>
    );
}