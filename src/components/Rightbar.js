import {
  Box,
  Typography,
  AvatarGroup,
  Avatar,
  ImageList,
  ImageListItem,
  Divider,
  ListItemText,
  ListItem,
  ListItemAvatar,
  List,
} from '@mui/material'

const Rightbar = () => {
  return (
    <Box flex={2} p={2} sx={{ display: { xs: 'none', sm: 'block' } }}>
      <Box position='fixed' width={300}>
        <Typography variant='h6' fontWeight={300}>
          Online Friends
        </Typography>
        <AvatarGroup max={7}>
          <Avatar
            alt='Remy Sharp'
            src='https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVvcGxlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
          />
          <Avatar
            alt='Travis Howard'
            src='https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8cGVvcGxlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
          />
          <Avatar
            alt='Cindy Baker'
            src='https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHBlb3BsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'
          />
          <Avatar
            alt='Agnes Walker'
            src='https://images.unsplash.com/photo-1524504388940-b1c1722653e1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fHBlb3BsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'
          />
          <Avatar
            alt='Trevor Henderson'
            src='https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjJ8fHBlb3BsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'
          />
          <Avatar
            alt='Trevor Henderson'
            src='https://images.unsplash.com/photo-1537511446984-935f663eb1f4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzF8fHBlb3BsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'
          />
          <Avatar
            alt='Trevor Henderson'
            src='https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzJ8fHBlb3BsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'
          />
          <Avatar
            alt='Trevor Henderson'
            src='https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjV8fHBlb3BsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'
          />
        </AvatarGroup>
        <Typography variant='h6' fontWeight={300} mt={2} mb={2}>
          Latest Posts
        </Typography>
        <ImageList cols={3} rowHeight={100} gap={5}>
          <ImageListItem>
            <img
              src='https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8bmF0dXJlfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=500&q=60'
              alt=''
              loading='lazy'
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src='https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bmF0dXJlfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=500&q=60'
              alt=''
              loading='lazy'
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src='https://images.unsplash.com/photo-1501854140801-50d01698950b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bmF0dXJlfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=500&q=60'
              alt=''
              loading='lazy'
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src='https://images.unsplash.com/photo-1431794062232-2a99a5431c6c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fG5hdHVyZXxlbnwwfDB8MHx8&auto=format&fit=crop&w=500&q=60'
              alt=''
              loading='lazy'
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src='https://images.unsplash.com/photo-1444464666168-49d633b86797?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fG5hdHVyZXxlbnwwfDB8MHx8&auto=format&fit=crop&w=500&q=60'
              alt=''
              loading='lazy'
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src='https://images.unsplash.com/photo-1505765050516-f72dcac9c60e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fG5hdHVyZXxlbnwwfDB8MHx8&auto=format&fit=crop&w=500&q=60'
              alt=''
              loading='lazy'
            />
          </ImageListItem>
        </ImageList>
        <Typography variant='h6' fontWeight={300} mt={2} mb={2}>
          Latest Conversations
        </Typography>
        <List
          sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
          <ListItem alignItems='flex-start'>
            <ListItemAvatar>
              <Avatar
                alt='Remy Sharp'
                src='https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8cGVvcGxlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
              />
            </ListItemAvatar>
            <ListItemText
              primary='Brunch this weekend?'
              secondary={
                <>
                  <Typography
                    sx={{ display: 'inline' }}
                    component='span'
                    variant='body2'
                    color='text.primary'>
                    Ali Connors
                  </Typography>
                  {" — I'll be in your neighborhood doing errands this…"}
                </>
              }
            />
          </ListItem>
          <Divider variant='inset' component='li' />
          <ListItem alignItems='flex-start'>
            <ListItemAvatar>
              <Avatar
                alt='Travis Howard'
                src='https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVvcGxlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
              />
            </ListItemAvatar>
            <ListItemText
              primary='Summer BBQ'
              secondary={
                <>
                  <Typography
                    sx={{ display: 'inline' }}
                    component='span'
                    variant='body2'
                    color='text.primary'>
                    to Scott, Alex, Jennifer
                  </Typography>
                  {" — Wish I could come, but I'm out of town this…"}
                </>
              }
            />
          </ListItem>
          <Divider variant='inset' component='li' />
        </List>
      </Box>
    </Box>
  )
}

export default Rightbar
