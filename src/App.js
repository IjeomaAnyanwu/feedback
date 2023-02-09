import React,{useState} from 'react'
import './App.css';
import FeedbackList from './Components/FeedbackList';
import Header from './Components/Header';
import FeedbackData from './Data/feedbackData';

function App(){
    const[feedback, setFeedback] = useState(FeedbackData)
    return(
        <>
        <Header />
        <div className='container'>
            <FeedbackList feedback={feedback} />
            
        </div>
        </>
    )
}

export default App