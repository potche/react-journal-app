import { Grid2 as Grid, Typography } from "@mui/material";

export const AuthLAyout = ({
  children,
  title = "",
}: {
  children: React.ReactElement;
  title: string;
}) => {
  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      sx={{
        minHeight: "100vh",
        backgroundColor: "primary.main",
        padding: 4,
      }}
    >
      <Grid
        className="box-shadow"
        size={{ xs: 3 }}
        sx={{
          width: { md: 450 },
          backgroundColor: "white",
          padding: 3,
          borderRadius: 2,
        }}
      >
        <Typography>{title}</Typography>

        {children}
      </Grid>
    </Grid>
  );
};
