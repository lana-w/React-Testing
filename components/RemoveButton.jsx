"use client";

import { HiOutlineTrash } from "react-icons/hi";
import { useRouter } from "next/navigation";

export default function RemoveButton({id}){
    const router = useRouter();
    const removeTask = async () => {
      const confirmed = confirm("Are you sure?");
  
      if (confirmed) {
        const res = await fetch(`http://localhost:3000/api/tasks?id=${id}`, {
          method: "DELETE",
        });
  
        if (res.ok) {
          router.refresh();
        }
    }
    }



    return(
        <button onClick={removeTask} className="text-red-400">
            <HiOutlineTrash size={24}></HiOutlineTrash>
        </button>
    );
}