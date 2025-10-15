import { PageLayout } from '../components/PageLayout'
import Grid from '@mui/material/Grid'
import { useQuery } from 'react-query'
import { getData } from '../utils'
import { MyCard } from '../components/MyCard'
import { useState } from 'react'

export const TVSeries = () => {
  const [page, setPage] = useState(1);
  const [selectedGenres, setSelectedGenres] = useState([])
  const {data, isLoading, isError, error} = useQuery({queryKey:['tvdata', 'tv', page, selectedGenres], queryFn:getData})

  data && console.log(data)
  
  return (
    <div>
      <PageLayout title="TVSeries" page={page} setPage={setPage} type='tv' selectedGenres={selectedGenres} setSelectedGenres={setSelectedGenres}>

        <Grid sx={{display:'flex', flexWrap:'wrap', gap:"10px", justifyContent:'center'}}>
          {data && data.results.map(obj=>
            <MyCard key={obj.id} original_title={obj.original_name} title={obj.name}  poster_path={obj.poster_path} {...obj} release_date={obj.first_air_date} type="tv" />
          )}
        </Grid>
          
      </PageLayout>      
    </div>
  )
}