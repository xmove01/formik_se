import { Formik } from "formik";
import { productFormInitialValues } from "../../_constants/productForm.constants";
import { yupProductFormValidation } from "../../_helpers/validation/productForm.scheme";
import { Box, Button, Tabs, Tab, Typography } from "@mui/material";
import Product from "../../_components/Product/index";
import Prices from "../../_components/Prices/index";
import Organize from "../../_components/Organize/index";
import React from "react";
import PropTypes from "prop-types";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const ProductForm = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  // Задание:
  // 1. Сделать рефакторинг. Создать кастомные компоненты для полей формы, сократить количество бойлерплейт кода
  // 2. Разбить форму на три отдельные секции
  // 3. Добавить в эти секции кнопку перехода на следующую секцию. Отображать на странице одну секцию с возможностью перехода к соедующей
  // 4. По желанию почитать документацию Yup и Formik
  return (
    <div className="product-form__wrapper">
      <Formik
        initialValues={productFormInitialValues}
        validationSchema={yupProductFormValidation}
        onSubmit={(values, formikHelpers) => {
          try {
            console.log(values);
          } catch (err) {
            console.log(err);
          }
        }}
      >
        {(formikProps) => (
          <form onSubmit={formikProps.handleSubmit}>
            <Box sx={{ width: "100%" }}>
              <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                <Tabs
                  value={value}
                  onChange={handleChange}
                  aria-label="basic tabs example"
                >
                  <Tab label="Item One" {...a11yProps(0)} />
                  <Tab label="Item Two" {...a11yProps(1)} />
                  <Tab label="Item Three" {...a11yProps(2)} />
                </Tabs>
              </Box>
              <TabPanel value={value} index={0}>
                <Product {...formikProps} />
              </TabPanel>
              <TabPanel value={value} index={1}>
                <Prices {...formikProps} />
              </TabPanel>
              <TabPanel value={value} index={2}>
                <Organize {...formikProps} />
              </TabPanel>
            </Box>

            <Box mt={2}>
              <Button color="primary" type="submit">
                Create product
              </Button>
            </Box>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default ProductForm;
