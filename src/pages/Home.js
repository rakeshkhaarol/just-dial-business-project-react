//import area
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import Url from '../help/Url';


//definetion area
function Home() {
    //2.1 hooks area
    //const[varibleName,setVaribleName] = useState['iniatialValue']
    const [getBusiness_Category,setgetBusiness_Category] =useState([])


    //every hooks is a function 
    useEffect(()=>{
        fetch(`${Url}/api/business-categories?populate=*`)
        .then((res)=>{
            return res.json();
        })
        .then((data)=>{
            console.log(data.data)
            setgetBusiness_Category(data.data)
            
        })
        .catch(()=>{})
    },[])

    //2.2 function definetion arae




    //2.3 return statments
  return (
    <main>
      <ul className='box nav mt-4 ms-3'>
        {
          getBusiness_Category.map((cv,idx,arr)=>{
              return <li key={idx} className="me-3">
                        <Link>
                          <img  src ={Url+cv.attributes.image.data.attributes.url} alt=''/>
                          <br/>
                          {cv.attributes.name}
                        </Link>
                        
                      </li>
          })
        }
        
      </ul>
    </main>
  )
}

export default Home