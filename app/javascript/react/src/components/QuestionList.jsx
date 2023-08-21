import * as React from 'react'
import { useState, useEffect } from 'react'
import * as ReactDOM from 'react-dom'
import QuestionDetail from './QuestionDetail'

const QuestionList = () => {
  const [questionsList, setQuestionList] = useState([])
  const questionUrl = 'http://127.0.0.1:3000/api/v1/questions'

  const fetchQuestionsList = () => {
    fetch(questionUrl)
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
        setQuestionList(data)
      })
  }

  useEffect(()=>{
    fetchQuestionsList()
  },[])

  return (
    <div className="row">
      <div className="col-lg-10 mx-auto">
        {questionsList.map((question)=>
          <QuestionDetail question={question} key={question.id.toString()}/>
        )}

      </div>
    </div>
  )
}

export default QuestionList
