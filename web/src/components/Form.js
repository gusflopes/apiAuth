import React from 'react';
import { withStyles } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';

// import logo from '~/assets/logo.png';

const styles = () => ({
  card: {
    maxWidth: 420,
    marginTop: 50,
  },
  container: {
    display: 'flex',
    justifyContent: 'center',
  },
  actions: {
    float: 'right',
  },
  textField: {
    marginLeft: '30px',
    marginRight: '30px',
  },
  button: {
    marginTop: '20px',
    marginBottom: '20px',
  },
});

const courseCategory = [
  {
    value: 'webDevelopment',
    label: 'Web Development',
  },
  {
    value: 'networking',
    label: 'networking',
  },
  {
    value: 'computerScience',
    label: 'Computer Science',
  },
];

const form = props => {
  const { classes } = props;
  return (
    <div className={classes.container}>
      <form>
        <Card className={classes.card}>
          <CardContent>
            <TextField
              id="firstName"
              label="First Name"
              margin="dense"
              variant="outlined"
              fullWidth
            />
            <TextField
              id="lastName"
              label="Last Name"
              margin="dense"
              variant="outlined"
              fullWidth
            />
            <TextField
              id="email"
              label="Email"
              type="email"
              margin="dense"
              variant="outlined"
              fullWidth
            />
            <TextField
              select
              id="course"
              label="Course Category"
              margin="dense"
              variant="outlined"
              fullWidth
            >
              {courseCategory.map(option => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
            <TextField
              id="password"
              label="Password"
              type="password"
              margin="dense"
              variant="outlined"
              fullWidth
            />
            <TextField
              id="confirmPassword"
              label="Confirm Password"
              type="password"
              margin="dense"
              variant="outlined"
              fullWidth
            />
          </CardContent>
          <CardActions className={classes.actions}>
            <Button color="primary">SUBMIT</Button>
            <Button color="secondary">CLEAR</Button>
          </CardActions>
        </Card>
      </form>
    </div>
  );
};

export default withStyles(styles)(form);
