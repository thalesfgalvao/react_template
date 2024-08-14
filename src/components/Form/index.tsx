import * as S from "./style";
import { Formik } from "formik";

interface IFormProps {
  children: React.ReactNode;
  initialValues: object;
}

const Form = ({ children, initialValues }: IFormProps) => {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values, actions) => {
        console.log({ values, actions });
        actions.setSubmitting(false);
      }}
    >
      <S.Form>{children}</S.Form>
    </Formik>
  );
};

export default Form;
