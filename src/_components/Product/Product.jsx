import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Divider,
  TextField,
  Typography,
} from "@mui/material";

const Product = (formikProps) => {
  return (
      <Card>
        <CardHeader title="Product" />
        <Divider />
        <CardContent>
          <Box mt={3} mb={1}>
            <Typography color="textSecondary">Product Name</Typography>
          </Box>
          <TextField
            label="Product Name"
            name="name"
            onBlur={formikProps.handleBlur}
            onChange={formikProps.handleChange}
            value={formikProps.values.name}
            fullWidth
            helperText={formikProps.touched.name && formikProps.errors.name}
            error={Boolean(formikProps.touched.name && formikProps.errors.name)}
          />
          <Box mt={3} mb={1}>
            <Typography color="textSecondary">Description</Typography>
          </Box>
          <TextField
            label="Description"
            name="description"
            onBlur={formikProps.handleBlur}
            onChange={formikProps.handleChange}
            value={formikProps.values.description}
            fullWidth
            helperText={
              formikProps.touched.description && formikProps.errors.description
            }
            error={Boolean(
              formikProps.touched.description && formikProps.errors.description
            )}
            multiline
            rows={4}
          />
        </CardContent>
      </Card>
  );
};

export default Product;
