//1. import area
import React, { useEffect,useState } from 'react'
import { Button, Form } from 'react-bootstrap';
import Url from '../help/Url';


//2. definetion area
function BusinessRegister() {
    //2.1 hooks area
    const [city_Name,getCity_Name]=useState([])
    const [get_business,getGet_business]=useState([])


    let cid = document.querySelector('[name="city_id"]').value
    let bn = document.querySelector('[name="Business_name"]').value
    let bcn = document.querySelector('[name="busi_cat_id"]').value


    console.log('cid --->>>>>>>>>>>>>>>>',cid)
    let payload =   {
                        "data": {
                            "name": bn,
                            "business_categories": [
                                bcn
                            ],
                            "cities": [
                                cid
                            ]
                        }
                    }



    useEffect(()=>{

        //coll the city api 
        fetch(`${Url}/api/cities`)
        .then((res)=>{
            return res.json()
        })
        .then((data)=>{
            console.log('city---->>>>>>',data.data)
            getCity_Name(data.data)
        })
        .catch((err)=>{
            console.log(err)
        })


        //coll the business_catrgory api 
        fetch(`${Url}/api/business-categories`)
        .then((res)=>{
            return res.json()
        })
        .then((businessdata)=>{
            console.log('business category ----->>>>>>>',businessdata.data)
            getGet_business(businessdata.data)
        })
        .catch((err)=>{
            console.log(err)
        })
    },[])

    //2.2 function definetion arae
    let Bres=()=>{
        //alert('hhhh')

        //coll the business category (bres)api 

        fetch(`${Url}/api/businesses`,{
            method:'POST',
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(payload)
        })
        .then((res)=>{
            return res.json()
        })
        .then((data)=>{
            console.log('business  ----->>>>>>>',data.data)
            
        })
        .catch((err)=>{
            console.log(err)
        })

    }

    //2.3 return statments
  return (
    <>
        <main>
            <h1 className='text-center'>Business Registeretion Form</h1>
            <Form className='w-50 ' >
                <Form.Group>
                    <Form.Label>City</Form.Label>
                    <Form.Select name='city_id' aria-label="Default select example">
                        {
                            city_Name.map((cv,idx,arr)=>{
                                return <option key={idx}  value={cv.id}> {cv.attributes.City_name}</option>
                            })
                        }
                        
                        
                    </Form.Select>
                </Form.Group>
                <br/>
                <Form.Group>
                    <Form.Label>Business Category</Form.Label>
                    <Form.Select name="busi_cat_id" aria-label="Default select example">
                        {
                            get_business.map((cv,idx,arr)=>{
                                return <option key={idx}  value={cv.id}> {cv.attributes.name}</option>
                            })
                        }
                    </Form.Select>
                </Form.Group>
                <br/>
                <Form.Group className="mb-3 "  controlId="user">
                    <Form.Label>Business Register</Form.Label>
                    <Form.Control name='Business_name' type="text" placeholder="Enter Business_name" />
                
                </Form.Group>
                <Button variant="primary" type="button" onClick={()=>{Bres()}}>
                    Submit
                </Button>
            </Form>
        </main>
    </>
    )
}


//3. export area
export default BusinessRegister;