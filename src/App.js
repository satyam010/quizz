import React, {Component} from 'react';
import {qBank} from "./questions"
import QuestionBox from "./components/QuestionBox"
import Result from "./components/Result"
import './App.css';


class App extends Component {
  state = {
    questionBank: qBank,
    score: 0,
    responses: 0
  };

  computeAnswer = (answer,correctAnswer) => {
    if(answer===correctAnswer){
      this.setState( {score: this.state.score + 1} );
    }
    this.setState({responses:this.state.responses < 5 ? this.state.responses+1 : 5});
  };

    
  playAgain = () => {
    this.setState({score:0,responses:0});
  }


  render() {
    return (
      <div className="container">
        <center><h1>React-Quiz</h1></center>
        { this.state.responses<5 && 
          this.state.questionBank.map(
           ({question,answers,correct,questionId})=>(
            <QuestionBox 
             question={question} 
             options={answers} 
             key={questionId} 
             selected={answer=>this.computeAnswer(answer,correct)} 
            />
          )
        )}

        {this.state.responses === 5 ? (<Result score={this.state.score} playAgain={this.playAgain} />):null}
      </div>
    );
  }

}

export default App;
