import React  from 'react';
import '../style/App.css';
import Message from './message';
import Form from './form';


function App() {
return (
<div id='double-wide'>
{/* <a class="skip-to-content-link" href="#skipTo">
  Skip to content
</a> */}
  <header>List of secrets</header>
  <Form />
  <Message />
  <footer id='foot'>Copy rights Tannehill</footer>
</div>
);
}

export default App;