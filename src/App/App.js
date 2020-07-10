import React, { Component } from 'react';
import Search from '../Components/search/search';
import VideoDetail from '../Components/video/videodetails/videodetails';
import Videolist from '../Components/video/videoitems/videolist';
import Youtube from '../api/youtube';
import classes from './App.css';
import Videocomments from '../Components/commnents/videocomments';
class App extends Component {
  state = {
    videos: [],
    selectedVideos: '',
    videoid:'',
    comments:[]
  }
  manage = async (search) => {
    const response = await Youtube.get('search', {
      params: {
        part: 'snippet',
        maxResults: 15,
        key: 'AIzaSyCuUV8UxyBwSEwUFtxoVVPnbAGCTL2fMVQ',
        q: search
      }
    });
    this.setState({ videos: response.data.items, selectedVideos: response.data.items[1], videoid: response.data.items[1].id.videoId });
  }
  managecomments=async(videoid)=>{
    const response1= await Youtube.get('commentThreads',{
      params:{
        part:'snippet',
        maxResults:5,
        key: 'AIzaSyCuUV8UxyBwSEwUFtxoVVPnbAGCTL2fMVQ',
        videoId:videoid
      }
    });
    this.setState({comments:response1.data.items});
  }
  onVideoSelect=(video)=>
    {
        this.setState({selectedVideos:video,videoid:video.id.videoId});
        this.managecomments(this.state.videoid);
    }
  render() {


    return (
      <div className="App">
        <div class="nav">
        <Search onFormSubmit={this.manage} />
        </div>
        <div class="first">
          <div class="a">
          <VideoDetail  video={this.state.selectedVideos}/>
          <Videocomments comment={this.state.comments}/>
          </div>
          <div class="b">
          <Videolist videos={this.state.videos} onVideoSelect={this.onVideoSelect} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
