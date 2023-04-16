import * as React from 'react'
import Chip from '@mui/material/Chip'
import TextField from '@mui/material/TextField'
import Autocomplete from '@mui/material/Autocomplete'

interface MultipleAutocompleteInputProps {
  title: string
  placeholder: string
}

const MultipleAutocompleteInput = ({
  title,
  placeholder,
}: MultipleAutocompleteInputProps) => {
  const fixedOptions = [top100Films[6]]
  const [value, setValue] = React.useState([...fixedOptions, top100Films[13]])

  return (
    <Autocomplete
      multiple
      id="fixed-tags-demo"
      value={value}
      onChange={(event, newValue) => {
        setValue([
          // ...fixedOptions,
          ...newValue.filter((option) => fixedOptions.indexOf(option) === -1),
        ])
      }}
      options={top100Films}
      getOptionLabel={(option) => option.title}
      renderTags={(tagValue, getTagProps) =>
        tagValue.map((option, index) => (
          <Chip
            label={option.title}
            {...getTagProps({ index })}
            key={option.id}
            disabled={fixedOptions.indexOf(option) !== -1}
          />
        ))
      }
      style={{ width: 500 }}
      renderInput={(params) => (
        <TextField
          {...params}
          label={title}
          placeholder={placeholder}
        />
      )}
    />
  )
}

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const top100Films = [
  { title: 'The Shawshank Redemption', year: 1994, id: '1' },
  { title: 'The Godfather', year: 1972, id: '2' },
  { title: 'The Godfather: Part II', year: 1974, id: '3' },
  { title: 'The Dark Knight', year: 2008, id: '4' },
  { title: '12 Angry Men', year: 1957, id: '5' },
  { title: "Schindler's List", year: 1993, id: '6' },
  { title: 'Pulp Fiction', year: 1994, id: '7' },
  {
    title: 'The Lord of the Rings: The Return of the King',
    year: 2003,
    id: '8',
  },
  { title: 'The Good, the Bad and the Ugly', year: 1966, id: '9' },
  { title: 'Fight Club', year: 1999, id: '10' },
  {
    title: 'The Lord of the Rings: The Fellowship of the Ring',
    year: 2001,
    id: '11',
  },
  {
    title: 'Star Wars: Episode V - The Empire Strikes Back',
    year: 1980,
    id: '12',
  },
  { title: 'Forrest Gump', year: 1994, id: '13' },
  { title: 'Inception', year: 2010, id: '14' },
  {
    title: 'The Lord of the Rings: The Two Towers',
    year: 2002,
    id: '15',
  },
  { title: "One Flew Over the Cuckoo's Nest", year: 1975, id: '16' },
  { title: 'Goodfellas', year: 1990, id: '17' },
  { title: 'The Matrix', year: 1999, id: '18' },
  { title: 'Seven Samurai', year: 1954, id: '19' },
  {
    title: 'Star Wars: Episode IV - A New Hope',
    year: 1977,
    id: '20',
  },
  { title: 'City of God', year: 2002, id: '21' },
  { title: 'Se7en', year: 1995, id: '22' },
  { title: 'The Silence of the Lambs', year: 1991, id: '23' },
  { title: "It's a Wonderful Life", year: 1946, id: '24' },
  { title: 'Life Is Beautiful', year: 1997, id: '25' },
  { title: 'The Usual Suspects', year: 1995, id: '26' },
  { title: 'Léon: The Professional', year: 1994, id: '27' },
  { title: 'Spirited Away', year: 2001, id: '28' },
  { title: 'Saving Private Ryan', year: 1998, id: '29' },
  { title: 'Once Upon a Time in the West', year: 1968, id: '30' },
  { title: 'American History X', year: 1998, id: '31' },
  { title: 'Interstellar', year: 2014, id: '32' },
  { title: 'Casablanca', year: 1942, id: '33' },
  { title: 'City Lights', year: 1931, id: '34' },
  { title: 'Psycho', year: 1960, id: '35' },
  { title: 'The Green Mile', year: 1999, id: '36' },
  { title: 'The Intouchables', year: 2011, id: '37' },
  { title: 'Modern Times', year: 1936, id: '38' },
  { title: 'Raiders of the Lost Ark', year: 1981, id: '39' },
  { title: 'Rear Window', year: 1954, id: '40' },
  { title: 'The Pianist', year: 2002, id: '41' },
  { title: 'The Departed', year: 2006, id: '42' },
  { title: 'Terminator 2: Judgment Day', year: 1991, id: '43' },
  { title: 'Back to the Future', year: 1985, id: '44' },
  { title: 'Whiplash', year: 2014, id: '45' },
  { title: 'Gladiator', year: 2000, id: '46' },
  { title: 'Memento', year: 2000, id: '47' },
  { title: 'The Prestige', year: 2006, id: '48' },
  { title: 'The Lion King', year: 1994, id: '49' },
  { title: 'Apocalypse Now', year: 1979, id: '50' },
  { title: 'Alien', year: 1979, id: '51' },
  { title: 'Sunset Boulevard', year: 1950, id: '52' },
  {
    title:
      'Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb',
    year: 1964,
    id: '53',
  },
  { title: 'The Great Dictator', year: 1940, id: '54' },
  { title: 'Cinema Paradiso', year: 1988, id: '55' },
  { title: 'The Lives of Others', year: 2006, id: '56' },
  { title: 'Grave of the Fireflies', year: 1988, id: '57' },
  { title: 'Paths of Glory', year: 1957, id: '58' },
  { title: 'Django Unchained', year: 2012, id: '59' },
  { title: 'The Shining', year: 1980, id: '60' },
  { title: 'WALL·E', year: 2008, id: '61' },
  { title: 'American Beauty', year: 1999, id: '62' },
  { title: 'The Dark Knight Rises', year: 2012, id: '63' },
  { title: 'Princess Mononoke', year: 1997, id: '64' },
  { title: 'Aliens', year: 1986, id: '65' },
  { title: 'Oldboy', year: 2003, id: '66' },
  { title: 'Once Upon a Time in America', year: 1984, id: '67' },
  { title: 'Witness for the Prosecution', year: 1957, id: '68' },
  { title: 'Das Boot', year: 1981, id: '69' },
  { title: 'Citizen Kane', year: 1941, id: '70' },
  { title: 'North by Northwest', year: 1959, id: '71' },
  { title: 'Vertigo', year: 1958, id: '72' },
  {
    title: 'Star Wars: Episode VI - Return of the Jedi',
    year: 1983,
    id: '73',
  },
  { title: 'Reservoir Dogs', year: 1992, id: '74' },
  { title: 'Braveheart', year: 1995, id: '75' },
  { title: 'M', year: 1931, id: '76' },
  { title: 'Requiem for a Dream', year: 2000, id: '77' },
  { title: 'Amélie', year: 2001, id: '78' },
  { title: 'A Clockwork Orange', year: 1971, id: '79' },
  { title: 'Like Stars on Earth', year: 2007, id: '80' },
  { title: 'Taxi Driver', year: 1976, id: '81' },
  { title: 'Lawrence of Arabia', year: 1962, id: '82' },
  { title: 'Double Indemnity', year: 1944, id: '83' },
  {
    title: 'Eternal Sunshine of the Spotless Mind',
    year: 2004,
    id: '84',
  },
  { title: 'Amadeus', year: 1984, id: '85' },
  { title: 'To Kill a Mockingbird', year: 1962, id: '86' },
  { title: 'Toy Story 3', year: 2010, id: '87' },
  { title: 'Logan', year: 2017, id: '88' },
  { title: 'Full Metal Jacket', year: 1987, id: '89' },
  { title: 'Dangal', year: 2016, id: '90' },
  { title: 'The Sting', year: 1973, id: '91' },
  { title: '2001: A Space Odyssey', year: 1968, id: '92' },
  { title: "Singin' in the Rain", year: 1952, id: '93' },
  { title: 'Toy Story', year: 1995, id: '94' },
  { title: 'Bicycle Thieves', year: 1948, id: '95' },
  { title: 'The Kid', year: 1921, id: '96' },
  { title: 'Inglourious Basterds', year: 2009, id: '97' },
  { title: 'Snatch', year: 2000, id: '98' },
  { title: '3 Idiots', year: 2009, id: '99' },
  { title: 'Monty Python and the Holy Grail', year: 1975, id: '100' },
]

export default MultipleAutocompleteInput
