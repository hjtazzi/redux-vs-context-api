import { FC, useState } from 'react';
import { AppContext } from '../../context';
import { useAppContext } from '../../context/hooks/useAppContext';
import { searchRepositories } from '../../context';

import { Box, TextField, Button, CircularProgress, Typography, Alert, Link } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';

interface Props { }

const columns: GridColDef[] = [
   { field: 'id', headerName: 'ID', width: 80 },
   {
      field: 'name', headerName: 'Name', width: 170,
      renderCell(params: GridValueGetterParams) {
         return (
            <Link href={params.row.link} underline="hover"
               target="_blank" rel="noopener noreferrer">
               {params.row.name}
            </Link>
         );
      },
   },
   { field: 'version', headerName: 'Version', width: 170, sortable: false },
   { field: 'description', headerName: 'Description', width: 660, sortable: false },
];


const RepositoriesList: FC<Props> = () => {
   const [term, setTerm] = useState<string>('');
   const { state, dispatch } = useAppContext(AppContext);
   const { loading, error, data } = state;

   const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      searchRepositories(dispatch, term);
   };

   return <Box component='div'>
      <Box
         component="form"
         sx={{ display: 'flex', alignItems: 'stretch', marginBottom: 4 }}
         noValidate
         autoComplete="off"
         onSubmit={onSubmit}
      >
         <TextField type={'text'} label="Pakage name for search" variant="filled"
            defaultValue={term} onChange={e => setTerm(e.target.value)}
            sx={{ flex: '1 1 auto' }} />
         <Button type={'submit'} variant="contained" sx={{ marginLeft: 3 }}>
            <Typography variant="button" display="block">Search</Typography>
            <SearchIcon sx={{ marginLeft: 1 }} />
         </Button>
      </Box>


      {loading &&
         <Box
            component="div"
            sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
         >
            <CircularProgress />
         </Box>}


      {error &&
         <Box component="div">
            <Alert severity="error">{error}</Alert>
         </Box>}


      {(!loading && !error) &&
         <Box component="div" sx={{ height: 632, width: '100%' }} >
            <DataGrid
               rows={data}
               columns={columns}
               pageSize={10}
               rowsPerPageOptions={[10]}
            />
         </Box>}
   </Box>;
};

export default RepositoriesList;