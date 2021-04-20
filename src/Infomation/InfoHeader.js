import { Container, Toolbar, Box, makeStyles } from "@material-ui/core";
// import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  styles: {
    backgroundColor: '#424242',
    boxShadow: '0px 2px 4px -1px rgb(0 0 0 / 20%), 0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%)',
  },
});

function InfoHeader() {

  const classes = useStyles();
  return (
    <Container MuiContainer-root MuiContainer-maxWidthLg className={classes.styles}>
      <Toolbar MuiToolbar-root MuiToolbar-regular>
        <Box MuiBox-root>메이플스토리 계산기</Box>
      </Toolbar>
    </Container>
  );
}

export default InfoHeader;
