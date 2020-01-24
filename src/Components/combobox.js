import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputBase from '@material-ui/core/InputBase';

const BootstrapInput = withStyles(theme => ({
  root: {
    'label + &': {
    },
  },
  input: {
    borderRadius: 4,
    position: 'relative',
    backgroundColor: theme.palette.background.paper,
    border: '1px solid #ced4da',
    fontSize: 16,
    padding: '10px 26px 10px 12px',
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:focus': {
      borderRadius: 4,
      borderColor: '#80bdff',
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
    },
  },
}))(InputBase);

const useStyles = makeStyles(theme => ({
  margin: {
    margin: theme.spacing(1),
  },
}));

export default function ComboBox() {
  const classes = useStyles();
  const [age, setAge] = React.useState('');
  const handleChange = event => {
    setAge(event.target.value);
  };
  return (
    <>
      <FormControl className={classes.margin}>
        <InputLabel id="demo-customized-select-label"></InputLabel>
        <Select
          labelId="demo-customized-select-label"
          id="demo-customized-select"
          value={age}
          onChange={handleChange}
          input={<BootstrapInput />}
        >
          <MenuItem value=''>
            <em>Selecione seu Estado</em>
          </MenuItem>
            <MenuItem value={1}>AC</MenuItem>
            <MenuItem value={2}>AL</MenuItem>
            <MenuItem value={3}>AP</MenuItem>
            <MenuItem value={4}>AM</MenuItem>
            <MenuItem value={5}>BA</MenuItem>
            <MenuItem value={6}>CE</MenuItem>
            <MenuItem value={7}>DF</MenuItem>
            <MenuItem value={8}>ES</MenuItem>
            <MenuItem value={9}>GO</MenuItem>
            <MenuItem value={10}>MA</MenuItem>
            <MenuItem value={11}>MT</MenuItem>
            <MenuItem value={12}>MS</MenuItem>
            <MenuItem value={13}>MG</MenuItem>
            <MenuItem value={14}>PA</MenuItem>
            <MenuItem value={15}>PB</MenuItem>
            <MenuItem value={16}>PR</MenuItem>
            <MenuItem value={17}>PE</MenuItem>
            <MenuItem value={18}>PI</MenuItem>
            <MenuItem value={19}>RJ</MenuItem>
            <MenuItem value={20}>RN</MenuItem>
            <MenuItem value={21}>RS</MenuItem>
            <MenuItem value={22}>RO</MenuItem>
            <MenuItem value={23}>RR</MenuItem>
            <MenuItem value={24}>SC</MenuItem>
            <MenuItem value={25}>SP</MenuItem>
            <MenuItem value={26}>SE</MenuItem>
            <MenuItem value={27}>TO</MenuItem>
        </Select>
      </FormControl>
    </>
  );
}