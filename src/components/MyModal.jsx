import { Box, CardMedia, CircularProgress, colors, Typography } from '@mui/material'
import Modal from "@mui/material/Modal";
import React from 'react'
import { getDetailsData, img_500, noImg } from '../utils';
import { useQuery } from 'react-query';
import { MyCarousel } from './MyCarousel';
import { ShowTrailer } from './ShowTrailer';

export const MyModal = ({open, setOpen, id, type}) => {
    console.log(type)
    
    const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    maxWidth:"700px",
    transform: "translate(-50%, -50%)",
    bgcolor: "#334155",   
    boxShadow: 24,
    p: 4,
    color:"#e5e5e5"
  };
  const urlDetails=`https://api.themoviedb.org/3/${type}/${id}?api_key=${import.meta.env.VITE_TMDB_API_KEY}`;
  const {data, isLoading, isError, error} = useQuery({queryKey:['details', urlDetails], queryFn:getDetailsData})

  console.log(urlDetails);
  

  
  const handleClose = () => setOpen(false);
  
  //data && console.log(data)
  if(isError) console.log(error);
  if(isLoading) return <CircularProgress />

  return (
    <div className='Mymodal'>
      <Modal
        sx={{overflow:"auto"}}
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
       {data && <Box sx={style} className="modal">
          <CardMedia
          height="auto"
          width="auto"
          component="img"
          image={data?.backdrop_path ? img_500 + data?.backdrop_path : null}
          title={data?.original_title}
          >

          </CardMedia>
          <Box className="modalBox">
            <Typography variant="h6" component="h2" sx={{textAlign:"center"}} mt={2}>
            <b>{type == "movie" ? data?.title : data?.name}</b> ({type == "movie" ? data?.release_date : data?.first_air_date})
          </Typography>
          <Typography sx={{ mt: 2,  overflow:"auto", maxHeight:"150px"}}>
            {data?.overview}
          </Typography>
          <Box>
              <MyCarousel id={id} type={type}/>
          </Box>
          <Box className='trailer'>
              <ShowTrailer type={type} id={id}/>
          </Box>
          </Box>
          
        </Box>}
      </Modal>
    </div>
  )
}

