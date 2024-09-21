import { Google } from "@mui/icons-material";
import {
  Button,
  Grid2 as Grid,
  Link,
  TextField,
  Typography,
} from "@mui/material";

import { Link as RouterLink } from "react-router-dom";
import { AuthLAyout } from "../layout/AuthLAyout";

export const Login = () => {
  return (
    <AuthLAyout title="Login">
      <form>
        <Grid container>
          <Grid size={{ xs: 12 }} sx={{ mt: 2 }}>
            <TextField
              label="Correo"
              type="email"
              placeholder="correo@google.com"
              fullWidth
            />
          </Grid>

          <Grid size={{ xs: 12 }} sx={{ mt: 2 }}>
            <TextField
              label="Contraseña"
              type="password"
              placeholder="Contraseña"
              fullWidth
            />
          </Grid>
        </Grid>

        <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>
          <Grid size={{ xs: 12, sm: 6 }}>
            <Button variant="contained" fullWidth>
              Login
            </Button>
          </Grid>
          <Grid size={{ xs: 12, sm: 6 }}>
            <Button variant="contained" fullWidth>
              <Google />
              <Typography sx={{ ml: 1 }}>Google</Typography>
            </Button>
          </Grid>
        </Grid>

        <Grid container direction="row" justifyContent="end">
          <Link component={RouterLink} color="inherit" to="/auth/register">
            Crear una cuenta
          </Link>
        </Grid>
      </form>
    </AuthLAyout>
  );
};
