import styled from 'styled-components';
import { Form, Input } from '@rocketseat/unform';
import { Formik } from 'formik';
import TextField from '@material-ui/core/TextField';

export const CustomInput = styled(TextField)`
  margin-left: '10px';
  margin-right: '10px';
`;

export const CustomForm = styled(Formik)`
display: 'flex';
flex-direction: 'column';
`;

export const Container = styled.div`
  width: '100%';
  display: 'flex';
  flex: 1;
  flex-direction: 'column;';
  text-align: 'center';
`;
