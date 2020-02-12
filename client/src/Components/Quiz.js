import React from 'react'
import {QuizData} from './QuizData'
import Container from '@material-ui/core/Container';
import { Paper, Typography, Card } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid'
import CardMedia from '@material-ui/core/CardMedia'
import { makeStyles, useTheme } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
      },
      details: {
        display: 'flex',
        flexDirection: 'column',
      },
    cover: {
      width: '100px',
    }
}))

class Quiz extends React.Component {
    state = {
        userAnswer: null,
        currentQuestion: 0,
        options: []
}

    loadQuiz = () => {
        const {currentQuestion} = this.state;
        this.setState(() => {
            return {
                questions: QuizData[currentQuestion].question,
                options: QuizData[currentQuestion].options,
                answers: QuizData[currentQuestion].answer
            }
        })
   }
    componentDidMount() {
        this.loadQuiz();
    }
    
    
    render() {
        const {questions, options} = this.state;
        
        return (
            
            <Container>
                <Paper 
                style= {{ padding: 10,
                marginTop: 20}}>
  <Grid container justify="space-between">  
  <Typography inline variant="body1" align="left">Pyetja 1 / 30</Typography>
  <Typography inline variant="body1" align="right">3 Pike</Typography>
</Grid>
                </Paper>
                <Paper 
                style= {{ padding: 10,
                marginTop: 10,
                backgroundColor: '#EEEEEE'}}>
                {questions}
                </Paper>
                <Paper>
                    <Card style={{width: 400, margin: 10}}>
                <CardMedia 
     image= {require ("./1.png")}/>
     </Card>
                {options.map(option => (
                    <p 
                    key={option.id}
                    >
                       {option} 
                    </p>
                ))}

                </Paper>

</Container>
        )

    }

}
export default Quiz;