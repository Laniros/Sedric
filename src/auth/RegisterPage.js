import React from 'react';
import ModalWrapper from '../modals/ModalWrapper';
import {Formik, Form} from 'formik';
import * as Yup from 'yup';
import MyTextInput from '../modals/CustomText';
import {Button, Label} from 'semantic-ui-react';
import {registerInFirebase} from '../firestore/firebaseAuth';
import {useHistory} from "react-router";

export default function RegisterForm() {

    const history = useHistory();

    return (
        <ModalWrapper size='mini' header='Register to Re-vents'>
            <Formik
                initialValues={{email: '', password: ''}}
                validationSchema={Yup.object({
                    email: Yup.string().required().email(),
                    password: Yup.string().required()
                })}
                onSubmit={async (values, {setSubmitting, setErrors}) => {
                    try {
                        await registerInFirebase(values);
                        setSubmitting(false);
                        history.push('/')

                    } catch (error) {
                        setErrors({auth: error.message});
                        setSubmitting(false);
                    }
                }}
            >
                {({errors}) => (
                    <Form className='ui form'>
                        <MyTextInput name='email' placeholder='Email Address'/>
                        <MyTextInput name='password' placeholder='Password' type='password'/>
                        {errors.auth && <Label basic color='red' style={{marginBottom: 10}} content={errors.auth}/>}
                        <Button type='submit' fluid size='large' color='teal' content='Register'
                        />
                    </Form>
                )}
            </Formik>
        </ModalWrapper>
    )
}