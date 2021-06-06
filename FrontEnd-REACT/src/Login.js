import React,{useState, useEffect} from 'react';
import { useHistory} from 'react-router-dom'



function Login()
{

    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const history = useHistory();
    useEffect(() => {
        if(localStorage.getItem('user-info')){
            history.push("/add")
        }
    }, [])

    async function login()
    {
        console.warn(email,password);
        let item = {email,password};
        let result = await fetch("http://localhost:3000/api/login",{
            method:'POST',
            headers:{
                "Content-Type":"application/json",
                "Accept":'application/json'
            },
            body:JSON.stringify(item)
        });
        result = await result.json();
        localStorage.setItem("user-info" ,JSON.stringify(result))
        history.push("/add")
    }

    return (

        <div className="col-sm-6 offset-sm-3">
            <h1>Login Page</h1>
            <input type="text" placeholder="Email" 
            onChange={(e)=>setEmail(e.target.value)} 
            className="form-control"/>
            <br/>
            <input type="password" 
            placeholder="Password" 
            onChange={(e)=>setPassword(e.target.value)} 
            className="form-control"/>
            <br/>
            <button onClick={login} className="btn btn-primary">Login</button>

        </div>
    )
}

export default Login