import * as React from 'react'
import * as ReactDOM from 'react-dom/client'
import QuestionList from './QuestionList'

const Welcome = () => {
  return(
    <div className='container'>
      <h1>Hello World!</h1>
      <p>This is the first lecture!</p>
      <QuestionList />
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('welcome'))
root.render(
  <React.StrictMode>
    <Welcome />
  </React.StrictMode>
)



export default Welcome
