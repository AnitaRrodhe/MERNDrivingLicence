import React from 'react'
import {QuizData} from './QuizData'
import Container from '@material-ui/core/Container';
import { Paper, Typography, Card } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid'
import CardMedia from '@material-ui/core/CardMedia'
import { useTheme, withTheme } from '@material-ui/core/styles';
import {makeStyles} from '@material-ui/styles/makeStyles'
import image1 from './1.png'
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
                answers: QuizData[currentQuestion].answer
            }
        })
   }
    componentDidMount() {
        this.loadQuiz();
    }
    
    
    render() {
        const {questions, options} = this.state;
        const { classes } = this.props;

        return (
            
            <Container item xs={10}>
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
                <Paper style={{paddingTop:20, paddingBottom: 40}}>
                <Grid container>
                <Grid item sm={4}>
                
                   
                <img src={image1} />
                </Grid>
                <Grid item sm={8} style={{paddingLeft:'10px'}}>
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
