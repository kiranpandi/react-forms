import React, { Component } from 'react'
import BankDetails from './BankDetails';
import {BrowserRouter as Router, Switch,Link,Route} from 'react-router-dom';

export default class Content extends Component {

    constructor(){
        super();
        this.state = {
            buttonSelected:'personal',
        }
    }

    personal = () => {
        this.setState({buttonSelected:'personal'});
    }

    buisness = () => {
        this.setState({buttonSelected:'buisness'});
    }


    render() {

        let personalDetails = this.state.buttonSelected === 'personal' ? (<><form> 
                
                     <input type="text" placeholder="First Name"/>
                   
                     <input type="text" placeholder="Last Name"/>
                    
                     <input type="text" placeholder="Email"/>
                   
                     <input type="text" placeholder="Phone Number"/>
                      </form>
                         </>) : (<><form> 
                <input type="text" placeholder="Buisness Name"/>
                
                <input type="text" placeholder="Email"/>
               
                <input type="text" placeholder="Phone Number"/>
                 </form>
                 </>);


        return (
            <Router>
            <div className="form-box">
               
            <div className="heading">
            <Route exact path="/">
                <div className="choosing-buttons">
                    <button className="top-buttons" onClick={this.personal}>PERSONAL</button>
               
                    <button className="top-buttons" onClick={this.buisness}>BUISNESS</button>
                </div>
                
                <div className="form-content">
                {personalDetails}
                </div>
                <button className="next-button"> <Link to="/bankDetails">NEXT</Link></button>
                </Route>
            <Switch>
                <Route path="/bankDetails" component={BankDetails}/>
            </Switch>
            </div>
            
            </div>
            </Router>
        )
    }
}
