import * as yup from 'yup';
const validateCreateContentForm = yup.object().shape({
    type: yup.string().required(),
    category: yup.string().required(),
    title: yup.string().required(),
    desc: yup.string().required()
})

export default validateCreateContentForm