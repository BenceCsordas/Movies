import React from "react";
import { PageLayout } from "../components/PageLayout";
import Grid from "@mui/material/Grid";
import { Box, Button, Tab, Tabs, TextField } from "@mui/material";
import { useRef } from "react";
import { FaSearch } from "react-icons/fa";
import { useState } from "react";
import { useQuery } from "react-query";
import { getSearchData } from "../utils";
import { MyCard } from "../components/MyCard";

export const SearchPage = () => {
  const [page, setPage] = useState(1)
  const [txt, setTxt] = useState("")
  const [value, setValue] = useState(0)
  const {data, isError, isLoading, error} = useQuery({queryKey:['result', value==0 ? 'movie' : "tv", txt, page],queryFn:getSearchData, enabled:!!txt})
  const inputRef = useRef()

  console.log(txt);
  console.log(value)
  const handleChange = (event, newValue) =>{
    setValue(newValue)
  }

  data && console.log(data)
  return (
    <div>
      <PageLayout title="Search Page" page={page} setPage={setPage}>
        <Box sx={{display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center", margin:"10px"}}>
        <Box sx={{display:"flex", justifyContent:"center", alignItems:"center"}}>
          <TextField
            id="filled-basic"
            label="Search"
            variant="filled"
            inputRef={inputRef}
          />
          <Button sx={{color:"#99f6e4"}} onClick={() => setTxt(inputRef.current.value)}>
            <FaSearch size={30} />
          </Button>
        </Box>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="Movies" />
          <Tab label="TV Series" />
        </Tabs>
        </Box>
        <Grid sx={{display:'flex', flexWrap:'wrap', gap:"10px", justifyContent:'center'}}>
          {data && data.results.map(obj=>
              <MyCard key={obj.id} original_title={obj.original_name} poster_path={obj.poster_path} {...obj} release_date={obj.first_air_date} />
          )}
        </Grid>
      </PageLayout>
    </div>
  );
};
