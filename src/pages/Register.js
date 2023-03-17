//1. import area

import { Button, Form } from 'react-bootstrap'
import Swal from 'sweetalert2'


//2. definetion area
function Register() {
  //2.1 Hooks Area


  //2.2 Function definetion Area
  let userRegisteretion = ()=>{
    //alert("okokokokkokokkokkokk")
    let user = document.querySelector('[name="name"]').value
    console.log(user)
    let email = document.querySelector('[name="email"]').value
    console.log(email)
    let password = document.querySelector('[name="password"]').value
    console.log(password)


    //coll the api
    fetch(`http://localhost:1337/api/auth/local/register`,{
      method:"POST",
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify((
        {
          "username": user,
          "email": email,
          "password": password
        }
      ))
    })
    .then(res=>res.json())
    .then((data)=>{
      console.log(data)
      //alert('user created  succefully ')
        if(data.data === null){
          Swal.fire("Bad job!",`${data.error.message}`, "error");
        }else{
          Swal.fire("Good job!", "User Created Successfully!", "success");    

      } 
    })
    .catch((arror)=>{

      console.log(arror)
    });
  }

 

  //2.3 Return Statments
  return (
    <main>
      <h1 className='text-center'>User Register</h1>
    
        <Form>
          <Form.Group className="mb-3" controlId="User Name">
            <Form.Label>User Name</Form.Label>
            <Form.Control name='name' type="text" placeholder="Enter Name" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control name='email' type="email" placeholder="Enter email" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control name='password' type="password" placeholder="Password" />
          </Form.Group>
          <Button variant="primary" type="button" onClick={()=>{userRegisteretion()}}>
            Submit
          </Button>
        </Form>
    </main>
  )
}


//3. export area
export default Register