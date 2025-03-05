import { Typography, styled } from '@mui/material';

const Projects: React.FC = () => {
  const StyledProjects = styled('div')(({ theme }) => ({
    backgroundColor: '#232323',
    padding: theme.spacing(4),
    width: '100%',
    [theme.breakpoints.up('xs')]: {
    
      paddingTop: '100px',
    },
    [theme.breakpoints.up('md')]: {
      
      paddingTop: '0',
    },
  }));

  return (
    <StyledProjects>
      <Typography variant="h1" component="h1" align="center" sx={{ marginBottom: 4, color: 'white' }}>
        Projects
      </Typography>
    </StyledProjects>
  );
};

export default Projects;