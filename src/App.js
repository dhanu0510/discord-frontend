// modules
import { Container, AppBar, Typography, Grow, Grid } from "@material-ui/core";

// components
import Create from "./components/createStudents/CreateStudent";
import Show from "./components/showStudents/showStudent";

// style
import useStyles from "./styles";

function App() {
  const classes = useStyles();
  return (
    <div>
      <Container maxWidth="lg">
        <AppBar position="static" color="inherit" className={classes.appbar}>
          <Typography variant="h2" className={classes.heading} align="center">
            Students
          </Typography>
        </AppBar>
        <Grow in>
          <Container>
            <Grid container justify="space-between" alignItems="stretch">
              <Grid item xs={12} sm={7}>
                <AppBar
                  position="static"
                  color="inherit"
                  className={classes.appbar}
                >
                  <Show />
                </AppBar>
              </Grid>
              <Grid item xs={12} sm={4}>
                <AppBar
                  position="static"
                  color="inherit"
                  className={classes.appbar}
                >
                  <Create />
                </AppBar>
              </Grid>
            </Grid>
          </Container>
        </Grow>
      </Container>
    </div>
  );
}

export default App;
