import React from 'react';
import './App.css';
import BlinkText from './components/Text/BlinkText';
import Text from './components/Text/Text';
import Button from './components/Button/Button';
import DateTimePickers from './components/DateTimePicker/DateTimePicker';
import MySelect from './components/Select/Select';
import CheckboxesTags from './components/AutoComplete/AutoComplete';
const top100Films = [
  { title: 'The Shawshank Redemption', year: 1994 },
  { title: 'The Godfather', year: 1972 },
  { title: 'The Godfather: Part II', year: 1974 },
  { title: 'The Dark Knight', year: 2008 },
  { title: '12 Angry Men', year: 1957 },
  { title: "Schindler's List", year: 1993 },
  { title: 'Pulp Fiction', year: 1994 },
  { title: 'The Lord of the Rings: The Return of the King', year: 2003 },
  { title: 'The Good, the Bad and the Ugly', year: 1966 },
  { title: 'Fight Club', year: 1999 },
  { title: 'The Lord of the Rings: The Fellowship of the Ring', year: 2001 },
  { title: 'Star Wars: Episode V - The Empire Strikes Back', year: 1980 },
  { title: 'Forrest Gump', year: 1994 },
  { title: 'Inception', year: 2010 },
  { title: 'The Lord of the Rings: The Two Towers', year: 2002 },
  { title: "One Flew Over the Cuckoo's Nest", year: 1975 },
  { title: 'Goodfellas', year: 1990 },
  { title: 'The Matrix', year: 1999 },
  { title: 'Seven Samurai', year: 1954 },
  { title: 'Star Wars: Episode IV - A New Hope', year: 1977 },
  { title: 'City of God', year: 2002 },
  { title: 'Se7en', year: 1995 },
  { title: 'The Silence of the Lambs', year: 1991 },
  { title: "It's a Wonderful Life", year: 1946 },
  { title: 'Life Is Beautiful', year: 1997 },
  { title: 'The Usual Suspects', year: 1995 },
  { title: 'Léon: The Professional', year: 1994 },
  { title: 'Spirited Away', year: 2001 },
  { title: 'Saving Private Ryan', year: 1998 },
  { title: 'Once Upon a Time in the West', year: 1968 },
  { title: 'American History X', year: 1998 },
  { title: 'Interstellar', year: 2014 },
];

function App() {
  return (
   <> 
    <BlinkText color='secondary' >Blinking Text</BlinkText>
    <Text 
    underline={false} 
    strong={true}
    >
      Some Text
    </Text>
    <Button>Click me</Button>
    <DateTimePickers 
    id={'date_time'}
    type = {'datetime-local'}
    defaultValue = {'2021-06-12T10:30'}
    label={'date and time'}
    >
    </DateTimePickers>
    <MySelect 
    items={['Male','Female']} 
    item={'gender'}
    >
    </MySelect>
    <CheckboxesTags
    options={top100Films}
    width={400}
    ml={10}
    mt={10}
    >
    </CheckboxesTags>
    
   </> 
  );

}

export default App;
