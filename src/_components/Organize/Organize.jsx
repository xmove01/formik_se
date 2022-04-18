import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Divider,
  MenuItem,
  TextField,
} from "@mui/material";
import React from "react";

const categories = [
  {
    label: "Tech",
    value: "Tech",
  },
  {
    label: "Food",
    value: "Food",
  },
  {
    label: "Else",
    value: "Else",
  },
];

const Organize = (formikProps) => {
  const [category, setCategory] = React.useState("Tech");

  const handleChange = (event) => {
    setCategory(event.target.value);
  };
  return (
    <Card>
      <CardHeader title="Organize" />
      <Divider />
      <CardContent>
        <TextField
          label="Category"
          name="category"
          fullWidth
          onChange={handleChange}
          select
          margin="normal"
          value={category}
        >
          {categories?.map((category) => (
            <MenuItem key={category.value} value={category.value}>
              {category.label}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          label="Product Code"
          name="productCode"
          fullWidth
          margin="normal"
          onBlur={formikProps.handleBlur}
          onChange={formikProps.handleChange}
          value={formikProps.values.productCode}
          helperText={
            formikProps.touched.productCode && formikProps.errors.productCode
          }
          error={Boolean(
            formikProps.touched.productCode && formikProps.errors.productCode
          )}
        />
        <TextField
          label="Product Sku"
          name="productSku"
          fullWidth
          margin="normal"
          onBlur={formikProps.handleBlur}
          onChange={formikProps.handleChange}
          value={formikProps.values.productSku}
          helperText={
            formikProps.touched.productSku && formikProps.errors.productSku
          }
          error={Boolean(
            formikProps.touched.productSku && formikProps.errors.productSku
          )}
        />
      </CardContent>
    </Card>
  );
};

export default Organize;
