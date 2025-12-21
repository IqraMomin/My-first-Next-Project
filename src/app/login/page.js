"use client"
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'

function LoginPage() {

    const router = useRouter()
    const [formValues,setFormValue] = useState({email:"",password:""})

    const validate = ()=>{
        let err={}
        if(!formValues.email){
            err.email="Email is Required"
        }
        if(!formValues.password){
            err.password="Password is Required"
        }
        else{
            if(formValues.password.length<6){
                err.password="Password should be atleast 6 characters long"
            }
        }
        return err;
    }
    const formSubmitHandler=async (e)=>{
        e.preventDefault();
        let err=validate();
        if(Object.keys(err).length>0){
            return;
        }
        const res= await fetch("/api/login",{
            method:"POST",
            body:JSON.stringify({email:formValues.email,password:formValues.password}),
            headers:{
                "Content-Type":"application/json"
            }
        })
        if(res.ok){
            router.push("/dashboard")
        }else{
            alert("Login Failed");
        }
    }
    return (
        <div style={{display:"flex",justifyContent:"center",alignItems:"center", width:"100%", flexDirection:"column" ,gap:"2rem",width:"50%"}}>
            
            <h2>Login</h2>
            <form style={{display:"flex",flexDirection:"column" ,alignItems:"center",gap:"2rem",width:"100%"}}>
            <label htmlFor='email'>Email</label>
            <input style={{width:"200px",height:"2rem"}} id='email' type='email' value={formValues.email} onChange={(e)=>{setFormValue({...formValues,email:e.target.value})}}/>
            <label htmlFor='password'>Password</label>
            <input style={{width:"200px",height:"2rem"}} id='password' type='password' value={formValues.password} onChange={(e)=>{setFormValue({...formValues,password:e.target.value})}}/>
            <button style={{width:"200px",height:"2rem"}} type='submit' onClick={formSubmitHandler}>LOGIN</button>           
            </form>
             
        </div>
    )
}

export default LoginPage
