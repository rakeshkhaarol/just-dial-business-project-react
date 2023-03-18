//1. Import Area
import { Button ,Form} from 'react-bootstrap'
import React from 'react'


//2. definetion Area
function Login() {
    //2.1 Hooks Area


    //2.2 Function definetion Area
    let loginUser=()=>{
        //alert('hello')

        let u = document.querySelector("[type='text']").value
        console.log("uuuuuuuuuuuu",u)

        let p = document.querySelector('[name="password"]').value
        console.log("pppppp"+p)

        let payload =   {
                            "identifier":u,
                            "password": p
                        }

        fetch(`http://localhost:1337/api/auth/local`,{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(payload)
        })
        .then((res)=>{
            return res.json()
        })
        .then((data)=>{
            console.log(data)
            if(data["jwt"] !== undefined){

                
               // alert('good')
               window.location.href = '/business_register';


                window.localStorage.setItem("jwt_token",data["jwt"])
            }else{
                alert("bad")
            }
        })
        .catch(arr=>arr)
    }


    //2.3 Return Statments
  return (
    <main>
        <Form className='w-50'>
            <Form.Group className="mb-3 "  controlId="user">
                <Form.Label>username</Form.Label>
                <Form.Control name='user' type="text" placeholder="Enter user" />
               
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control name='password' type="password" placeholder="Password" />
            </Form.Group>
            <Button variant="primary" type="button" onClick={()=>{loginUser()}}>
                Submit
            </Button>
        </Form>

    </main>
  )
}


//Export Area
export default Login