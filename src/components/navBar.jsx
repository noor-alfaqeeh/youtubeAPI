import React, { Component } from 'react';



class SearchBar extends Component {
    state = { 
      word: '  '
     }

     handleChange= event => {
       this.setState({
         word: event.target.value
       })
     }


     handleSubmit= event =>{
      
       this.props.handleFormSubmit(this.state.word)
       event.preventDefault()
     }




    render() { 
        return ( 
         
            <div >
           <nav className="navbar navbar-expand-md navbar-light  justify-content-start" 
           style={{backgroundColor:"#E8DFFA"}}
           >
           <a  href='1' className= "navbar-brand ">Youtube API</a>
          
              <div className="navbar-collapse " id="navbar6">
           <form onSubmit={this.handleSubmit} className="mx-2 my-auto d-inline w-100">
           <div className="input-group">
             <input onChange={this.handleChange} value={this.state.word} 
             className="form-control border border-right-0 mr-sm-2 " 
             type="search" 
             placeholder="Search" />
             <button className="btn btn-danger my-2 my-sm-0" 
             type="submit">Search</button>
             </div>
            
           </form> 
           </div>
           
           </nav>
         
           </div>
         

         );
    }
}
 
export default SearchBar;




