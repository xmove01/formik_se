import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Checkbox,
  Divider,
  FormControlLabel,
  Grid,
  TextField,
} from "@mui/material";

const Prices = (formikProps) => {
  return (
    <Card>
      <CardHeader title="Prices" />
      <Divider />
      <CardContent>
        <Grid container>
          <Grid item>
            <TextField
              label="Price"
              name="price"
              type="number"
              fullWidth
              onBlur={formikProps.handleBlur}
              onChange={formikProps.handleChange}
              value={formikProps.values.price}
              helperText={formikProps.touched.price && formikProps.errors.price}
              error={Boolean(
                formikProps.touched.price && formikProps.errors.price
              )}
            />
          </Grid>
          <Grid item>
            <TextField
              label="Sale price"
              name="salePrice"
              type="number"
              fullWidth
              onBlur={formikProps.handleBlur}
              onChange={formikProps.handleChange}
              value={formikProps.values.salePrice}
              helperText={
                formikProps.touched.salePrice && formikProps.errors.salePrice
              }
              error={Boolean(
                formikProps.touched.salePrice && formikProps.errors.salePrice
              )}
            />
          </Grid>
        </Grid>
        <Box mt={3}>
          <FormControlLabel
            control={
              <Checkbox
                checked={formikProps.values.isAvaliable}
                onChange={formikProps.handleChange}
                value={formikProps.values.isAvaliable}
                name="isAvaliable"
              />
            }
            label="Is product avaliable"
          />
        </Box>
        <Box mt={3}>
          <FormControlLabel
            control={
              <Checkbox
                checked={formikProps.values.includeTaxes}
                onChange={formikProps.handleChange}
                value={formikProps.values.includeTaxes}
                name="includeTaxes"
              />
            }
            label="Include taxes in price?"
          />
        </Box>
      </CardContent>
    </Card>
  );
};

export default Prices;
