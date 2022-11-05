import {useState} from "react";

export const DataBinding = () => {


    const [data, setData] = useState({
        user :{
            username:'',
            password:''
        }
    });

    const handleInputChange = (event)=>{
        setData((data)=>({
           user :{
               ...data.user,
               [event.target.name] : event.target.value
           }
        }))
    }

    const handleSubmit = (event) =>{
        event.preventDefault()
        console.log(data);
    }

    let {user} =data;

    return (
        <>
            <div className='container col-md-5 mt-5 '>
                <pre>{JSON.stringify(data)}</pre>
                <div className='card shadow-lg'>
                    <div className='card-header bg-warning'>
                        <p className='h4'>Register Here</p>
                    </div>
                    <div className='card-body bg-light'>
                        <form onSubmit={handleSubmit}>
                            <input type='text' className='form-control' placeholder='UserName'   name='username' value={user.username} onChange={handleInputChange}/>
                            <input type='password' className='form-control mt-2' placeholder='Password'  name='password' value={user.password} onChange={handleInputChange}/>
                            <p className='mt-2 text-secondary h5'>{user.username} :: {user.password}</p>
                            <input type='submit' className='btn btn-warning mt-2'/>

                        </form>

                    </div>

                </div>

            </div>
        </>
    )
}