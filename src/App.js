import {useState} from 'react';
import Container from '@material-ui/core/Container';
import  TextField from '@material-ui/core/TextField';
import {makeStyles} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import  IconButton from '@material-ui/core/IconButton';
import RemoveIcon from '@material-ui/icons/Remove';
import AddIcon from '@material-ui/icons/Add'
import SendIcon from '@material-ui/icons/Send';

const useStyles= makeStyles(theme=>({
   root:{
    '& .MuiTextField-root':{
      
      margin:theme.spacing(1)
    },
    
   },
   button:{
    margin:theme.spacing(1) 
  }
}))
function App() {
  const [inputFields,setInputFields]= useState([{
    firstName:'',
    lastName:''
  },]);
  const classes= useStyles();
  const handleChangeInput=(index,event)=>{
   const values=[...inputFields];
   values[index][event.target.name]=event.target.value;
   setInputFields(values)
  }
  const removeRow=(index)=>{
   const input=[...inputFields];
   input.splice(index,1);
   setInputFields(input);
  }
  const addRow=()=>{
    const input=[...inputFields,{firstName:'',lastName:''}];
     
    setInputFields(input)
  }
  const handleSubmit=(e)=>{
    e.preventDefault()
    console.log(inputFields)
  }
  return (
    <Container>
      <h1>Add New Memeber</h1>
      <form className={classes.root} onSubmit={handleSubmit}>
         {inputFields.map((inputField,i)=>(
           <div key={i}>
                  <TextField 
                  name="firstName" 
                  label="FirstName"
                  variant="filled"
                  value={inputField.firstName}
                   onChange={event=>handleChangeInput(i,event)}
                   />
                  
                  <TextField 
                  name="lastName" 
                  label="LastName"
                  variant="filled"
                  value={inputField.lastName}
                  onChange={event=>handleChangeInput(i,event)}
                  />
                  <IconButton onClick={()=>removeRow(i)}>
                      <RemoveIcon/>
                  </IconButton>
                  <IconButton onClick={addRow}>
                      <AddIcon/>
                  </IconButton>
           </div>
         ))}
         <Button 
         className={classes.button}
         variant="contained" 
         color="primary" 
         type="submit" 
         
         endIcon={<SendIcon/>}>
           Send 
         </Button>
      </form>
    </Container>
  );
}

export default App;
