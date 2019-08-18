import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import SearchBar from './components/navBar';
import VideoDetails from './components/Descreption';
import axios from 'axios'
import List from './components/list';


// const ApiKey ='AIzaSyAU9SocF0Ii9PLPjgcgYhKL1Iadckg25IY';


class App extends Component {
  state = { 
    videos: [],
    selectedVideo:null
   }

  handleSubmit = async (wordFormSearchBar) =>{
    const response = await axios.get ('https://www.googleapis.com/youtube/v3/search',{
      params: {
        part:'snippet',
        maxResults:6,
        key:'AIzaSyAU9SocF0Ii9PLPjgcgYhKL1Iadckg25IY',
        q:wordFormSearchBar,
        type:"video",
        videoEmbeddable: 'any'
      }
    })
    this.setState({
      videos: response.data.items
    })
  }

  handleVideoSelect = (video) => {
    this.setState({selectedVideo:video})
  }


  render() { 
    return ( 
      <div className="container-fluid">
    
        <SearchBar handleFormSubmit={this.handleSubmit}/>
        <div className="row">
          <div className= "col-8">
        <VideoDetails video={this.state.selectedVideo}/>
        </div>
        <div  className= "col-4 mt-sm-3">
        <List handleVideoSelect={this.handleVideoSelect} videos={this.state.videos}/>
        </div>
      </div>
      </div>
     );
  }
}
 
export default App;