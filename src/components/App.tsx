import { FC, useState } from 'react';
import { Container, Box, Tab } from '@mui/material';
import { TabContext, TabList, TabPanel } from '@mui/lab';
import ReduxComponents from './redux-components';
import ContextComponents from './context-components';

interface Props { }

const App: FC<Props> = () => {
   const [tab, setTab] = useState<string>("1");

   return <Container>
      <Box sx={{ width: '100%', typography: 'body1', paddingTop: 2 }}>
         <TabContext value={tab}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
               <TabList onChange={(e, newValue) => setTab(newValue)} centered>
                  <Tab label="Redux" value="1" />
                  <Tab label="Context" value="2" />
               </TabList>
            </Box>

            <TabPanel value="1">
               <ReduxComponents />
            </TabPanel>
            <TabPanel value="2">
               <ContextComponents />
            </TabPanel>
         </TabContext>
      </Box>
   </Container>
};

export default App;