import * as Yup from 'yup';

export const yupProductFormValidation = Yup.object().shape({
    name: Yup.string().required(),
    description: Yup.string().max(255),
    category: Yup. string().max(255),
    isAvaliable: Yup.bool().required(),
    includeTaxes: Yup.bool().required(),
    price: Yup.number().min(0).required(),
    salePrice: Yup.number().min(0).required(),
    productCode: Yup.string().max(10).required(),
    productSku: Yup.string().max(10).required(),
})