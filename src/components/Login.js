import React from 'react';
import { Form, Button, Modal } from 'react-bootstrap';
import axios from 'axios';

let tokenAcc = '';

class Login extends React.Component{
    
    myUser = React.createRef();
    myPassword = React.createRef();
    

    user = async (e) =>{
        e.preventDefault();
        console.log(this.myUser.current.value, this.myPassword.current.value)
        const Body = ({
            Username: this.myUser.current.value,
            Password: this.myPassword.current.value
        })
        console.log(Body);
        axios
            .post('https://techhub.docsolutions.com/OnBoardingPre/WebApi/api/authentication/authentication', { Body })
            .then(response => {
                console.log(response);
                if(response.data.Body != null && response.data.IsOK === true){
                    alert('Acceso concedido')
                    console.log(response.data.Body.Token);
                    sessionStorage.setItem('token', response.data.Body.Token)
                    tokenAcc = sessionStorage.getItem('token');
                    console.log(tokenAcc);
                } else {
                    alert('Sus datos son incorrectos, verifique su información e intente nuevamente')
                }
            })
            .catch(error => {
                console.log(error)
            })
    }

    render(){
        return(
            <Modal.Dialog>
                <div className='col align-self-center'>
                    <Modal.Body>
                    <h1 className='text-center'>Inicio de sesion</h1>
                    <Form onSubmit={this.user}>
                        <Form.Group className="mb-3 p-1" controlId="formBasicUser">
                        <Form.Label>Usuario</Form.Label>
                        <Form.Control type="text" ref={this.myUser} placeholder="" />
                        </Form.Group>
                        <Form.Group className="mb-3 p-1" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="text" ref={this.myPassword} placeholder="" />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                        OK
                        </Button>
                    </Form>
                    </Modal.Body>
                </div>
            </Modal.Dialog>
        );
    }
}

export default Login;