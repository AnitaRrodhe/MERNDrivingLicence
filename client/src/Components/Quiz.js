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
        options: []
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
        this.setState({
            currentQuestion: this.state.currentQuestion + 1
        })
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
    
    
    render() {
        const {questions, options, image, currentQuestion} = this.state;
        const { classes } = this.props;
        ;
        return (
            
            <Container item xs={10}>
                <Paper 
                style= {{ padding: 10,
                marginTop: 20}}>
  <Grid container justify="space-between">  
  <Typography inline variant="body1" align="left">{`Pyetja ${currentQuestion + 1} / ${QuizData.length}`}</Typography>
  <Typography inline variant="body1" align="right">3 Pike</Typography>
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
                     <FormGroup>
                       <FormControlLabel
        control={
          <Checkbox
            
            value="checkedB"
            color="primary"
          />
        }
        key={option.id}
        label={option}
      />
         </FormGroup>
            </FormControl>
    </div>       
                ))}
</Grid>
             
                </Grid>
                </Paper>
                <Grid container item xs={12} justify="flex-end"
                style={{marginTop:'15px'}}>
                <Button 
                variant="contained" 
                color="primary">Previous
                </Button>
                <Button 
                onClick={this.nextQuestionHandler}
                style={{marginLeft: '15px'}}
                variant="contained" 
                color="primary">Next
                </Button>
</Grid>

</Container>
        )

    }

}
export default withStyles(useStyles)(Quiz)
