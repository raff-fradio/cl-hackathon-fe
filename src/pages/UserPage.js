import { Helmet } from 'react-helmet-async';
import { filter } from 'lodash';
import { sentenceCase } from 'change-case';
import { useState } from 'react';
// @mui
import {
  Card,
  Table,
  Stack,
  Paper,
  Avatar,
  Button,
  TextField,
  Popover,
  Checkbox,
  TableRow,
  MenuItem,
  TableBody,
  TableCell,
  Container,
  StyledTextarea,
  Typography,
  IconButton,
  TableContainer,
  TablePagination,
} from '@mui/material';
import Scrollbar from '../components/scrollbar';

// ----------------------------------------------------------------------


export default function UserPage() {

  const [username, setUsername] = useState('raff_fradio');
  const [bio, setBio] = useState('I turn coffee into code');
  const [email, setEmail] = useState('raff_fradio@gmail.com');
  const [walletAddress, setWalletAddress] = useState('0x47331edc7220ad93D62130CE64c10F7166F4c947');

  const handleSave = () => {
    // Handle save logic here...
    console.log({username, bio, email, walletAddress});
  };

  return (
    <>
      <Helmet>
        <title> User Profile </title>
      </Helmet>

      <Container>
        <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
          <Typography variant="h4" gutterBottom>
            Profile
          </Typography>
          {/* <Button variant="contained" startIcon={<Iconify icon="eva:plus-fill" />}>
            New User
          </Button> */}
        </Stack>

        <Card sx={{p:4}}>
              <Typography variant="h6">Username</Typography>
              <TextField value={username} onChange={e => setUsername(e.target.value)} placeholder='Username'/>
              <br /><br />
              <Typography variant="h6">Bio</Typography>
              <TextField value={bio} onChange={e => setBio(e.target.value)} placeholder='Bio' multiline rows={3} maxRows={4}/>
              <br /><br />
              <Typography variant="h6">Email Address</Typography>
              <TextField value={email} onChange={e => setEmail(e.target.value)} placeholder='Email Address'/>
              <br /><br />
              <Typography variant="h6">Wallet Address</Typography>
              <TextField value={walletAddress} disabled placeholder='Wallet Address'/>
              <br /><br />

              <Button variant="contained" color="primary" onClick={handleSave}>Save</Button>
          
        </Card>
      </Container>
    </>
  );
}
