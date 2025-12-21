"use client"
import { useRouter } from "next/navigation";

export default function Dashboard(){
    const router = useRouter();

   async function logoutHandler(e){
        e.preventDefault();
        let res = await fetch("/api/logout",{
            method:"POST"
        })
        if(res.ok){
            router.push("/login")
        }else{
            alert("Logout Failed");
        }
    }
    return (
        <div>
            <h1>This is the Dashboard</h1>
            <button onClick={logoutHandler}>Logout</button>
        </div>
    )
}