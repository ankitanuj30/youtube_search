import React,{Component} from 'react';
import youtube from '../../assests/youtube.jpg';
import create from '../../assests/create.png';
import bell from '../../assests/bell.jpg';
import logo from '../../assests/glogo.png';
import lines from '../../assests/lines.png';
import dots from '../../assests/9dots.jpg';
import classes from './search.css';
class Search extends Component{
    state={
        search:''
    }
    
    handleSubmit=(event)=>{
        this.props.onFormSubmit(this.state.search);
            event.preventDefault();
    }
   
    anyUpdate=(event)=>{
            this.setState({
                search: event.target.value
            });
            
    }
    render()
    {
        return(
            <div class="topnav">
                <div class="image1">
                <img src={lines} />
                <img src={youtube}/>
                </div>
                <div class="search-container">
                <form onSubmit={this.handleSubmit}>
                        <input type="text" placeholder="Search anything.... " onChange={this.anyUpdate} />
                    </form> 
                </div>
                <div class="image">
                <img src={create}/>
                <img src={bell}/>
                <img src={dots}/>
                <img src={logo}/>
                </div>
            </div> 
                
        );
    }
}
export default Search;