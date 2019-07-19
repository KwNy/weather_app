import React from 'react';

// import './Form.css';

const Form = props => {
  return (
   <form>
     <input type="text" value={props.value} onChange= {props.change}
     placeholder = "type city"/>
   </form>
  );
}

export default Form;

// //version with submit button 
// {/* <form onSubmit={props.submit}>
// <input type="text" value={props.value} onChange= {props.change}
// placeholder = "type city"/>
// <button>Search city</button>
// </form> */}
