import React from 'react'
import { useQuery } from 'react-query'
import { getGenres } from '../utils'
import Stack from '@mui/material/Stack'
import { SingleChip } from './SingleChip'

export const Genres = ({type, selectedGenres, setSelectedGenres}) => {
  const {data, isLoading, isError} = useQuery({queryKey:['genres', type], queryFn:getGenres})  
  data && console.log(data.genres)

  console.log(selectedGenres)

  return (
    <Stack direction="row" flexWrap="wrap" justifyContent='center' sx={{marginBottom:"10px"}}>
        {data && data.genres.map(obj=>
             <SingleChip key={obj.id} {...obj} selectedGenres={selectedGenres} setSelectedGenres={setSelectedGenres}/>
        )}
    </Stack>

  )
}
