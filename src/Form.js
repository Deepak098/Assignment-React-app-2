import React from 'react';

 export default class Form extends React.Component{
  state = {
    Productname: '',
    Description: '',
    Price: '',
    Availability: ''

  };
  render() {
    
    return(
  
   <form class= 'form'>
     <h1>My Product Store</h1>
     <input class='name'
     placeholder = 'Name' value= {this.state.Productname} 
     onChange={e => this.setState({Productname: e.target.value})}
     />
    
     <br/>
     <input class= 'desc'
     placeholder = 'Description' value= {this.state.Description} 
     onChange={e => this.setState({Description: e.target.value})}
     />
     <br/>
     <input class='price'
     placeholder = 'Price' value= {this.state.Price} 
     onChange={e => this.setState({Price: e.target.value})}
     />
     <br/>
     <input class='avail'
     placeholder = 'Availability' value= {this.state.Availability} 
     onChange={e => this.setState({Availability: e.target.value})}
     />
     <br/><br/>
     <button >Save</button>
     <br/>
     
    
     
      <reactFragment class='div'>
    <input class='Name2'
     placeholder = 'Name' value= {this.state.Productname} 
     />
     <br/>
     <input class='price2'
     placeholder = 'Price' value= {this.state.Price} 
     />

     <input class='avail2'
     placeholder = 'Availability' value= {this.state.Availability} 
     
     />

     </reactFragment>
  </form>
  
   
   
    );
    
  }
}

