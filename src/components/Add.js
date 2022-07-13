import { useState } from 'react'
import {
  Tooltip,
  Fab,
  Modal,
  Typography,
  Box,
  styled,
  Avatar,
  TextField,
  Stack,
  ButtonGroup,
  Button,
} from '@mui/material'
import AddIcon from '@mui/icons-material/Add'
import EmojiEmotions from '@mui/icons-material/EmojiEmotions'
import VideoCameraBack from '@mui/icons-material/VideoCameraBack'
import PersonAdd from '@mui/icons-material/PersonAdd'
import Image from '@mui/icons-material/Image'
import DateRange from '@mui/icons-material/DateRange'

const StyledModal = styled(Modal)({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
})

const UserBox = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  gap: '10px',
  marginBottom: '20px',
})

const Add = () => {
  const [open, setOpen] = useState(false)
  return (
    <>
      <Tooltip
        title='Add'
        sx={{
          position: 'fixed',
          bottom: 60,
          left: { xs: 'calc(50%)', md: 40 },
        }}>
        <Fab color='primary' aria-label='add' onClick={() => setOpen(true)}>
          <AddIcon />
        </Fab>
      </Tooltip>
      <StyledModal
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'>
        <Box
          width={400}
          height={280}
          bgcolor={'background.default'}
          color={'text.primary'}
          p={3}
          borderRadius={5}>
          <Typography variant='h6' color='gray' textAlign='center'>
            Create Post
          </Typography>
          <UserBox>
            <Avatar sx={{ width: 30, height: 30 }} />
            <Typography variant='span' fontWeight={700} color='gray'>
              John Doe
            </Typography>
          </UserBox>
          <TextField
            sx={{ width: '100%' }}
            id='standard-multiline-static'
            multiline
            rows={4}
            placeholder="What's on your mind ?"
            variant='standard'
          />
          <Stack direction='row' gap={1} mt={2} mb={3}>
            <EmojiEmotions color='primary' />
            <VideoCameraBack color='secondary' />
            <Image color='success' />
            <PersonAdd color='error' />
          </Stack>
          <ButtonGroup
            fullWidth
            variant='contained'
            aria-label='outlined primary button group'>
            <Button>Post</Button>
            <Button sx={{ width: '100px' }}>
              <DateRange />
            </Button>
          </ButtonGroup>
        </Box>
      </StyledModal>
    </>
  )
}

export default Add
