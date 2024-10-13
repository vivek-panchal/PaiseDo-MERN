import { Link as RouterLink } from "react-router-dom";
import { styled } from "@mui/material/styles";
import { Card, Link, Container, Typography, Stack, Box } from "@mui/material";
import useResponsive from "../../theme/hooks/useResponsive";
import RegisterForm from "./RegisterForm";

const RootStyle = styled("div")(({ theme }) => ({
  [theme.breakpoints.up("md")]: {
    display: "flex",
  },
  background: "black",
}));

const HeaderStyle = styled("header")(({ theme }) => ({
  top: 0,
  zIndex: 9,
  lineHeight: 0,
  width: "100%",
  display: "flex",
  alignItems: "center",
  position: "absolute",
  padding: theme.spacing(3),
  justifyContent: "space-between",
  [theme.breakpoints.up("md")]: {
    alignItems: "flex-start",
    padding: theme.spacing(7, 5, 0, 7),
  },
}));

const SectionStyle = styled(Card)(({ theme }) => ({
  width: "100%",
  maxWidth: 464,
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  margin: theme.spacing(2, 0, 2, 2),
  overflow: "hidden",
  background: "black",
  border: "none",
  boxShadow: "none",
}));

const ImageStyle = styled("img")({
  width: "100%",
  height: "auto",
  objectFit: "contain", // Changed from cover to contain
  maxHeight: "100vh",
});

const ContentStyle = styled("div")(({ theme }) => ({
  maxWidth: 480,
  margin: "auto",
  minHeight: "100vh",
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  padding: theme.spacing(12, 0),
}));

export default function Register() {
  const smUp = useResponsive("up", "sm");
  const mdUp = useResponsive("up", "md");

  return (
    <RootStyle>
      <HeaderStyle>
        <Box />
        {smUp && (
          <Typography variant="body2" sx={{ mt: { md: -2 } }}>
            Already have an account? {""}
            <Link variant="subtitle2" component={RouterLink} to="/">
              Login
            </Link>
          </Typography>
        )}
      </HeaderStyle>

      {mdUp && (
        <SectionStyle>
          <ImageStyle src="/static/illustrations/image1.png" alt="register" />
        </SectionStyle>
      )}

      <Container maxWidth="sm">
        <ContentStyle>
          <Typography variant="h4" gutterBottom>
            Manage the expenses with PaiseDo !
          </Typography>
          <Typography sx={{ color: "text.secondary", mb: 5 }}>
            Get started absolutely free.
          </Typography>

          <RegisterForm />

          {!smUp && (
            <Typography variant="body2" align="center" sx={{ mt: 3 }}>
              Already have an account? {""}
              <Link variant="subtitle2" component={RouterLink} to="/">
                Login
              </Link>
            </Typography>
          )}

          <Stack spacing={3} sx={{ mt: 5 }}>
            {/* <Copyright/> */}
          </Stack>
        </ContentStyle>
      </Container>
    </RootStyle>
  );
}
