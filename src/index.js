import React from 'react';
import ReactDOM from 'react-dom';


const App = () => {
  return(
    <div>
      <label for="name" class="label" >Enter e-mail:</label>
      <input id="name" type="text" />
      <button style={{backgroundColor:'blue', color:'white'}}>Submit</button>
    </div>
  )
}

ReactDOM.render(
  <App/>,
  document.querySelector('#root')
)

