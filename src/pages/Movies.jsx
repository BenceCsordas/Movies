import React from 'react'
import { PageLayout } from '../components/PageLayout'
import Grid from '@mui/material/Grid'
import { useQuery } from 'react-query'
import { getData } from '../utils'
import { MyCard } from '../components/MyCard'

export const Movies = () => {
  const {data, isLoading, isError, error} = useQuery({queryKey:['moviesdata', 'movie'], queryFn:getData})

  data && console.log(data)
  
  return (
    <div>
      <PageLayout title="Movies">

        <Grid sx={{display:'flex', flexWrap:'wrap', gap:"10px", justifyContent:'center'}}>
          {data && data.results.map(obj=>
            <MyCard key={obj.id} {...obj}/>
          )}
        </Grid>
          
      </PageLayout>      
    </div>
  )
}
