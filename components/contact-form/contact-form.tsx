import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import emailSender from '../../infrastructure/adapter/contact-email'
import Contact from '../../application/Contact/Contact'
import React, { useState } from 'react'
import Alert from 'react-bootstrap/Alert'

import LoadingForm from './subcomponents/loading-form';

import CrmEmails from '../../email-accounts/crm-emails.json';

/**
 * Using https://www.emailjs.com/ 
 * This site has a user_id (to identify the user - or in this case, my account with ducanh.tranpro@gmail.com)
 * A service_id (which is used to determine the type of email service used: gmail, outlook, etc)
 * A template id: the template that we use to send the email
 */
const SenderEmailInfo = {
    SERVICE_ID: `service_am7hhtb`,
    TEMPLATE_ID: `template_m768glm`,
    USER_ID: `user_1Cmnk1EhM9brEFQlxIgrv`
}

export default function ContactForm() {
    // create empty contact message for formData useState
    let contactEmpty: Contact = {
        id: -1,
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
    }

    // formData: holds values for the email to send
    const [formData, setFormData] = useState(contactEmpty);
    
    // formState: holds loading, error, success values
    const [formState, setFormState] = useState("unsubmitted");

    // submit event hander
    const handleSubmit: React.FormEventHandler<HTMLFormElement> = async (event) => {
        event.preventDefault();
        // set load
        setFormState("loading");

        // use emailSender from adapter to send and get results
        const result: boolean = await emailSender(formData);
        if (result){
            // success message
            setFormState("success");
        }
        else {
            // error message
            setFormState("error")
        }
    };

    // updates form every time the user inputs / changes something
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    // feedback: is null if no send, else there is 'load', 'error', 'success' state
    const FormUIFeedback = (): JSX.Element | null => {
        if (formState === "unsubmitted"){
            return null;
        }
        else if (formState === "loading"){
            return <LoadingForm />;
        }
        else if (formState === "success"){
            return (
                <Alert variant = "success">Success! We'll get back to you soon</Alert>
            )
        }
        return (
            <Alert variant = "danger">Oh no! Something went wrong?</Alert>
        )
    }

    return (
        <div className="w-full bg-light pt-5 pb-5">
            <div className="container mx-auto w-75">
                <h1 className="text-center mt-5 ">
                    Get in touch
                </h1>
                <hr className="mt-3 mb-5 w-25 bg-success"></hr>
                <Form onSubmit={handleSubmit} className="text-center">
                    <Row>
                        <Form.Group as={Col} controlId="formName">
                            <Form.Label>Name (required) </Form.Label>
                            <Form.Control type="text"
                                onChange={handleChange}
                                placeholder="Enter your name" name="name" required
                            />
                        </Form.Group>
                        <Form.Group as={Col} controlId="formEmail" >
                            <Form.Label>Email address (required)</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" name="email" required
                                onChange={handleChange} />
                        </Form.Group>
                        <Form.Group as={Col} controlId="formPhoneNumber">
                            <Form.Label>Phone number</Form.Label>
                            <Form.Control type="number" name="phone"
                                onChange={handleChange} />
                        </Form.Group>
                    </Row>

                    <Row>
                        <Form.Group as={Col} controlId="formSubject">
                            <Form.Label>Subject</Form.Label>
                            <Form.Control type="text" name="subject" required
                                onChange={handleChange} />
                        </Form.Group>
                    </Row>

                    <Form.Group controlId="formMessage">
                        <Form.Label>Your Message</Form.Label>
                        <Form.Control as="textarea" rows={4} name="message" required
                            onChange={handleChange} />
                    </Form.Group>

                    <Button variant="success" type="submit" className="mb-5 px-4 py-2 text-center bg-success">
                        Send
                    </Button>
                </Form>
                <FormUIFeedback/>
            </div>
        </div>
    )
}
