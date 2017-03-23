import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "./css/iconfont.css"
import "./css/style.css"
import "./css/sidebar.css"
import "./css/style.min.css"
import "./css/table.css"
import "./js/form/form.css"
export default class App extends Component {
 render() {
    return  <div  style={{backgroundColor:"#ddd"}}>
		      	{this.props.children}
		    </div>
  }

}