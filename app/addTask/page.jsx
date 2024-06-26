// Make this a client component:
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation"; // used so we can redirect back to homepage

export default function AddTask(){
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault(); // prevent page from refreshing when button clicked
        if (!title || !description) {
            alert("Title and description are required.");
            return;
        }
        
          try {
            const res = await fetch("http://localhost:3000/api/tasks", {
              method: "POST",
              headers: {
                "Content-type": "application/json",
              },
              body: JSON.stringify({ title, description }),
            });
      
            if (res.ok) { // USE ROUTER HERE to send to homepage
              router.push("/");
            } else {
              throw new Error("Failed to create a task");
            }
          } catch (error) {
            console.log(error);
          }
        };

    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-3">       
             <input 
             onChange={(e) => setTitle(e.target.value)}
             value={title}
             type="text" placeholder="Topic Title" className="border border-rslate-500 px-8 py-2"></input>
             <input 
             onChange={(e) => setDescription(e.target.value)}
             value={description}
             type="text" placeholder="Topic Description" className="border border-rslate-500 px-8 py-2"></input>
            <button  className="bg-green-600 font-bold text-white py-3 px-6 w-fit">Add Task</button>
        </form>
    );
}