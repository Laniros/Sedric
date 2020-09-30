import React from 'react';
import ModalWrapper from '../modals/ModalWrapper';
import {Formik, Form} from 'formik';
import * as Yup from 'yup';
import MyTextInput from '../modals/CustomText';
import {Button, Label} from 'semantic-ui-react';
import {useSelector} from 'react-redux';
import {signInWithEmail} from '../firestore/firebaseAuth';
import {useHistory} from "react-router";

export default function LoginForm() {
    const {authenticated} = useSelector((state) => state.auth);
    const history = useHistory();
    //TODO: handle situation when use tries to access login page although he is authenticated already:

    // if(authenticated){
    //     return (
    //         history.push("/")
    //
    //     )
    // }

    return (
        <ModalWrapper size='mini' header='Sign in'>
            <Formik
                initialValues={{email: '', password: ''}}
                validationSchema={Yup.object({
                    email: Yup.string().required().email(),
                    password: Yup.string().required()
                })}
                onSubmit={async (values, {setSubmitting, setErrors}) => {
                    try {
                        await signInWithEmail(values);
                        setSubmitting(false);
                        history.push("/")
                    } catch (error) {
                        setErrors({auth: 'Problem with username or password'});
                        setSubmitting(false);
                    }
                }}
            >
                {({errors}) => (
                    <Form className='ui form'>
                        <MyTextInput name='email' placeholder='Email Address'/>
                        <MyTextInput name='password' placeholder='Password' type='password'/>
                        {errors.auth && <Label basic color='red' style={{marginBottom: 10}} content={errors.auth}/>}
                        <Button type='submit' fluid size='large' color='teal' content='Login'
                        />
                    </Form>
                )}
            </Formik>
        </ModalWrapper>
    )
}