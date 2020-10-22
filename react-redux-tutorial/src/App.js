import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import {Quotebox} from './Components/Quotebox.js'
import { connect } from 'react-redux'

function App(props ) {
    
    const [color, setColor] = useState([...props.colorarray]); //initializing state from redux store values
    var [colornow , setColornow] = useState(props.colornow)     //
    
    const [wrapperclass, setWrapperclass] = useState('wrapper')
    const mystyle = {                   //inline style
        backgroundColor: color[props.colornow],
        color: color[props.colornow]
    };
    
    function colorchange() {
        if(props.colornow >= color.length) {
           
           props.dispatch({     //dispatching action to change color value to first array item
            type: 'RESETCOLOR'
          })
        } 

        setWrapperclass('wrapperClass')
        setTimeout(function(){
            
            setWrapperclass('wrapper')
            props.dispatch({           //dispatching action to change color value
                type: 'CHANGECOLORNOW'
              })

        },10)
    }

    return (<>
        <div className={wrapperclass} style={mystyle}>
            <Quotebox color={color[props.colornow]} colorchange={colorchange} ></Quotebox>
        </div><p>{props.colornow}</p>
        <p>{colornow}</p>
        </>
    );
}

const mapStateToProps = state => {
    return { colorarray: state.color , colornow: state.colornow }
  }
  
  export default connect(
    mapStateToProps
  )(App)

