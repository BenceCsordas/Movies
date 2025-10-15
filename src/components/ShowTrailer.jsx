import * as React from 'react';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import { FaYoutube } from "react-icons/fa";
import { getDetailsData, noImg } from '../utils';
import { useQuery } from 'react-query';

const VisuallyHiddenInput = styled('input')({
  clip: 'rect(0 0 0 0)',
  clipPath: 'inset(50%)',
  height: 1,
  overflow: 'hidden',
  position: 'absolute',
  bottom: 0,
  left: 0,
  whiteSpace: 'nowrap',
  width: 1,
});

export const ShowTrailer = ({id, type}) => {
  const urlVideos=`https://api.themoviedb.org/3/${type}/${id}/videos?api_key=${import.meta.env.VITE_TMDB_API_KEY}`;
    const {data, isLoading, isError, error} = useQuery({queryKey:['details', urlVideos], queryFn:getDetailsData})
    data && console.log(data);
    

  return (
    <Button
      sx={{width:"100%", bgcolor:"#99f6e4", color:"#27272a"}}
      variant="contained"
      startIcon={<FaYoutube color='red'/>}
      href={data && data?.results && data?.results.length > 0 ? `https://www.youtube.com/watch?v=${data?.results[0].key}` : noImg}
      target="_blank"
    >
      Watch your trailer      
    </Button>
  );
}
