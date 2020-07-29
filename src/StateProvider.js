//setup data layer
import React,{createContext,useContext,useReducer, Component} from 'react'
import Axios from 'axios';

//Data layer
export const StateContext=createContext();

//build the provider
 class StateProvider extends Component{
    constructor(props) {
        super(props)
        this.state = {
            data:[]
        }
    }

    componentDidMount(){
        this.loadResource();
    }

    loadResource(){
        Axios({
            url:`https://api.themoviedb.org/3/movie/popular?api_key=69da287f8d942bd5ac2693404c94e0da&language=en-US&page=1`,
            method:"get"
        }).then(res =>{
            this.setState({
                data:[res]
            })
        })
    }
    render(){
        return(
            <StateContext.Provider value={this.state}>
                {this.props.children}
            </StateContext.Provider>
        )
    }
}


export default StateProvider