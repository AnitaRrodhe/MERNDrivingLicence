import React from 'react'
import {QuizData} from './QuizData'
import Container from '@material-ui/core/Container';
import { Paper, Typography, Card, TextField } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid'
import CardMedia from '@material-ui/core/CardMedia'
import { useTheme, withTheme } from '@material-ui/core/styles';
import {makeStyles} from '@material-ui/styles/makeStyles';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import Button from '@material-ui/core/Button';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
const useStyles = theme => ({
    root: {
        display: 'flex',
    },
    formControl: {
        margin: theme.spacing(0),
    },
    
});

class Quiz extends React.Component {
    state = {
        userAnswer: null,
        currentQuestion: 0,
        options: [],
        quizEnd: false,
        score: 0,
}

    loadQuiz = () => {
        const {currentQuestion} = this.state;
        this.setState(() => {
            return {
                questions: QuizData[currentQuestion].question,
                options: QuizData[currentQuestion].options,
                answers: QuizData[currentQuestion].answer,
                image: QuizData[currentQuestion].image
            }
        })
   }
    componentDidMount() {
        this.loadQuiz();
    }
    nextQuestionHandler = () => {
        const {userAnswer, answers, score} = this.state;
        this.setState({
            currentQuestion: this.state.currentQuestion + 1
            
        })
        console.log(userAnswer)
        console.log(`answer is ${answers}`)
        console.log(`score is ${score}`)

        if(userAnswer === answers) {
            this.setState({
                score: score + 1
            })
        }
    }
    prevQuestionHandler = () => {
        if(this.state.currentQuestion >= 1) { 
        this.setState({
            currentQuestion: this.state.currentQuestion - 1
        })
    } 
        console.log(this.state.currentQuestion)
    }
    componentDidUpdate( prevProps, prevState) {
        const {currentQuestion} = this.state;
        if(this.state.currentQuestion !== prevState.currentQuestion) {
            this.setState(() => {
                return {
                    questions: QuizData[currentQuestion].question,
                    options: QuizData[currentQuestion].options,
                    answers: QuizData[currentQuestion].answer,
                    image: QuizData[currentQuestion].image
                }
            })
        }
    }
    finishHandler = () => {
        if (this.state.currentQuestion === QuizData.length -1 ) {
            this.setState({
                quizEnd: true
            })
        }
    }
     checkAnswer = answer => {
         this.setState({
             userAnswer: answer
         })
     }
    render() {
        const {questions, options, image, currentQuestion, quizEnd, score, userAnswer} = this.state;
        const { classes } = this.props;
        
        if(quizEnd) {
            return (
                <div>
                    <h2 style={{textAlign:'center'}}>Test finished {score}</h2>
                </div>
            )
        }
        const handleChange = event => {
            this.setState({
                userAnswer: event.target.value
            })
            
          };


        return (
            
            <Container item xs={10}>
                <Paper 
                style= {{ padding: 10,
                marginTop: 20}}>
  <Grid container justify="space-between">  
  <Typography inline variant="body1" align="left">{`Pyetja ${currentQuestion + 1} / ${QuizData.length}`}</Typography>
  <Typography inline variant="body1" align="right">1 Pike</Typography>
</Grid>
                
                </Paper>
                
                <Paper 
                style= {{ padding: 10,
                marginTop: 10,
                backgroundColor: '#EEEEEE'}}>
                {questions}
                </Paper>
                <Paper style={{paddingTop:20, paddingBottom: 40}}>
                <Grid container>
                <div>
                { image ? ( 
                <Grid item sm={4}>
                <img src={image} />
                </Grid>
                ) : (
                    <Grid item sm={4}>
                   
                    </Grid>
                )
                }
                </div>
                <Grid item sm={8} style={{paddingLeft:'30px'}}>
                {options.map(option => (
                     <div className={classes.root}>
                     <FormControl component="fieldset" className={classes.formControl}>
                     <RadioGroup aria-label="gender" name="gender1">
                     <FormControlLabel value={option} 
                     control={<Radio />} 
                     label="Female" 
                     onClick={() => this.checkAnswer(option)}
                     onChange={handleChange}
                     checked={userAnswer === option}
                    key={option.id}
                    label={option}
                    />
        </RadioGroup>

            </FormControl>
    </div>       
                ))}
</Grid>
             
                </Grid>
                </Paper>
                <Grid container item xs={12} justify="flex-end"
                style={{marginTop:'15px'}}>
                <Button 
                onClick={this.prevQuestionHandler}
                variant="contained" 
                color="primary">Previous
                </Button>
                {currentQuestion < QuizData.length - 1 && 
                <Button 
                onClick={this.nextQuestionHandler}
                style={{marginLeft: '15px'}}
                variant="contained" 
                color="primary">Next
                </Button>
                } 
                {currentQuestion === QuizData.length - 1 &&
                <Button 
                onClick={this.finishHandler}
                style={{marginLeft: '15px'}}
                variant="contained" 
                color="primary">Finish
                </Button>
                }

</Grid>

</Container>
        )

    }

}
export default withStyles(useStyles)(Quiz)
