import React from 'react'
// import {useParams} from 'react-router-dom'
import Button from './shared/Button'
import {Navigate, useNavigate, Routes, Route} from 'react-router-dom'

function Post() {
  const status = 200;
  const navigate = useNavigate()
    const onClickRedirect = () => {
      // console.log('Hello')
      navigate('/about')
    }
    // const params = useParams()  //it returns an object of the url params
    if (status === 404) {
      return <Navigate to='/notfound' />
    }
    
    return (
    <div>
       {/* <h1>Post {params.id}</h1> 
       <p>Name {params.name}</p>  */}
       <h1>Post</h1>
       <Button version="secondary" onPress={onClickRedirect}>Redirect</Button>
       <Routes>
          <Route path='/show'element={<h1>Hello World</h1>} />
       </Routes>
    </div>
  )
}

export default Post