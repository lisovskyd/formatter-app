import React, { Component } from 'react';
import { connect } from 'react-redux';

import './Styles/index.css';
import { getSynonymsTrigger } from '../actions'

class App extends Component { 
  state = {
    text: 'I wanna pepople be more friendly for each other.',
    contentArray: [],
    currentFormatter: null,
    currentNode: null,
    formatterPopup: true,
    synonyms: []
  }

  componentDidMount() {
    this.stringToArray();    
  }

  stringToArray = () => {
    this.setState({
      contentArray: this.state.text.split(' ')
    })
  }

  setCurrentNode = (e) => {
    this.props.getSynonymsTrigger(e.target.innerHTML);
    this.setState({
      currentNode: e.target
    });
  }

  wordFormatter = (e, style) => {    
    if(this.state.currentNode === null) return;
    return this.state.currentNode.classList.toggle(style);
  }

  synonymHanlder = e => {
    if(e.target.classList.value !== 'synonym') return;
    this.state.currentNode.innerText = e.target.innerText;
  }

  render() {
    return (
      <div className="app">
        <div className="app_wrapper">
          <div className="b-formatter">
            <div className="text-formatter">
              <input
                type="button"
                className="formatter-btn underline" 
                onClick={ (e) => this.wordFormatter(e, 'underline') }
                defaultValue="A"
              />
              <input
                type="button"
                className="formatter-btn" 
                onClick={ (e) => this.wordFormatter(e, 'bold') }
                defaultValue="B"            
              />
              <input
                type="button" 
                className="formatter-btn cursive" 
                onClick={ (e) => this.wordFormatter(e, 'cursive') }
                defaultValue="I"
              />
            </div>          
          </div>
          <div className="text-area-wrapper">
            <div 
              onClick={(e) => this.setCurrentNode(e) }        
              className="text-area">
              {
                this.state.contentArray.map(elem => {
                  return <span key={ elem }>{ `${ elem }` }</span>
                })
              }
            </div>
            <div className="b-synonyms-wrapper">
              <h6>Word synonyms:</h6>
              <div
                className="b-synonyms"
                onClick={(e) => this.synonymHanlder(e)}
              >
                { 
                  this.props.synonyms.length === 0 ?
                  'Have no synonyms' :
                  this.props.synonyms.map(elem => {
                    return <span className="synonym" key={ elem }>{ `${ elem }` }</span>
                  })
                }                
              </div>
            </div>
          </div>          
        </div>       
      </div>
    );
  }
}

const mapDispatchToProps = {
  getSynonymsTrigger
};

const mapStateToProps = state => {  
  return ({    
    synonyms: state.synonyms
  })  
};

export default connect(mapStateToProps, mapDispatchToProps)(App);