import React from 'react'
import { PageLayout } from '../components/PageLayout'
import Grid from '@mui/material/Grid'
import { useQuery } from 'react-query'
import { getData } from '../utils'
import { MyCard } from '../components/MyCard'
import { useState } from 'react'

export const Movies = () => {
  const [page, setPage] = useState(1);
  const [selectedGenres, setSelectedGenres] = useState([])
  const {data, isLoading, isError, error} = useQuery({queryKey:['moviesdata', 'movie', page, selectedGenres], queryFn:getData})

  data && console.log(data)
  
  return (
    <div>
      <PageLayout title="Movies" page={page} setPage={setPage} type='movie' selectedGenres={selectedGenres} setSelectedGenres={setSelectedGenres}>

        <Grid sx={{display:'flex', flexWrap:'wrap', gap:"15px", justifyContent:'center'}}>
          {data && data.results.map(obj=>
          
            <MyCard key={obj.id} {...obj}/>
          )}
        </Grid>
          
      </PageLayout>      
    </div>
  )
}
