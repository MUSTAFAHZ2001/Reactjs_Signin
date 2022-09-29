import React from 'react'
import { Grid ,Paper ,Avatar ,TextField , Checkbox , FormControlLabel , FormGroup, Button , Typography ,Link} from '@mui/material'
import LockTwoToneIcon from '@mui/icons-material/LockTwoTone';

const Login = () => {
    const  paperstyle ={padding:20, height:'70vh' , width:280 ,margin:'20px auto'}
    const avtarstyle ={padding:'auto', margin:'auto',backgroundColor:'#4fa9d9'}
    const btnstyle ={padding:'auto' , borderRadius:40}
  return (
    
        <Grid>
            <Paper elevation={10} style={paperstyle}>
                
                <Avatar style ={avtarstyle} ><LockTwoToneIcon/></Avatar>
                 <h2>Sign In</h2>

                 <br />
                 <br />
                 <br />
                 <TextField id="standard-basic" label="User Name" placeholder="Enter UserName" variant="standard" fullWidth required/>
                 <TextField id="standard-basic" label="Password" type="password"Enter ="Password" variant="standard" fullWidth required/>
                 <FormGroup>
                  <FormControlLabel control={<Checkbox  />} label="Remember Me" />
                  
                  </FormGroup>
                  <Button type='submit' color='primary' fullWidth  variant='contained' style={btnstyle}>SIGN IN </Button>
                  <Typography> 
                  <Link href="#" underline="hover" fullWidth>
                        {'Forget Password'}
                   </Link>
                  </Typography>
                  <Typography> Doyou have an account?
                  <Link href="#" underline="hover" fullWidth>
                        {'SIGN IN'}
                   </Link>
                  </Typography>
            </Paper>
        </Grid>
  )
}

export default Login