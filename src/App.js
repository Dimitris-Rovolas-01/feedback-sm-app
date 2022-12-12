import React from "react";
// *Before State Management with Context API
// import { useState } from "react";
// import FeedbackData from "./data/feedBackData";
import Header from "./components/Header"
import FeedbackList from "./components/FeedbackList";
import FeedbackStats from "./components/FeedbackStats";
import "./App.css";
import FeedbackForm from "./components/FeedbackForm";
import AboutPage from "./components/pages/AboutPage";
import { FeedbackProvider } from "./context/FeedbackContext";
import {BrowserRouter as Router, Route ,Routes} from 'react-router-dom';
import AboutIconLink from "./components/AboutIconLink";
// import Card from "./components/shared/Card";
// import Post from "./components/Post";
function App() {
// *const [feedback, setFeedback] = useState(FeedbackData);





  return (
    <FeedbackProvider>
      <Router>
        <Header /> 
        <div className='container'> 
          <Routes>
            <Route exact path='/' element={
              <>
                <FeedbackForm  />
                <FeedbackStats  />          
                <FeedbackList />
                {/* <Card>
                  Hello World
                </Card> */}
              </>
            }/> 
            <Route path='/about' element={<AboutPage />} />
            {/* <Route path='/post/*' element={<Post />} /> */}
      </Routes>
      <AboutIconLink />
      </div>
      </Router>
    </FeedbackProvider>
  )
}



export default App;
