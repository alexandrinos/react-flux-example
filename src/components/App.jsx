 import React from 'react';  //import the package React from node_modules installed with Babel
 import ReactDOM from 'react-dom';


//to create a React class object, we extend the React.Component, and here we have a constructor with a state, and a render with a return
class FormList extends React.Component{
	
	render(){
		return (<div>Cool</div>)
	}
}

class App extends React.Component{
	constructor(){
		super();
		this.state={
			messages:[
				'hi there how are you',
				'I am fine, Ben.....And you? Thats cooool..or not ___'

			]
		}
	}

	render(){

		var messageNodes=this.state.messages.map((message)=>{
			return (
				<div>{message}</div>
				);
		});
		return (
			<div style={{color:'red'}}>{messageNodes} <FormList /> </div>
			

			)
	}
}


export default App;



/*  Old Variant of creating a class ; new variant extends from React.Component, which has a constructor and a render
var RecipeBook = React.createClass({
	  render: function() {
	    return (
	      <div>
	        Hello, world! I am a RecipeBook.
	      </div>
	    );
	  }
	});
	 
	ReactDOM.render(
		
	  <RecipeBook />,
	  document.getElementById('app-container')
	);


*/