import './App.css';
import React from 'react';
import { Helmet } from 'react-helmet';
import Login from './components/Login';
import { Modal } from 'react-bootstrap';

let tokenAcc = '';

function createToken(){
  tokenAcc = sessionStorage.getItem('token');
  console.log(tokenAcc);
}

class App extends React.Component{
  state= {
    token: ''
  }

  render(){
    return(
      <div className = 'container'>
        <Helmet>
          <style>{'body { background: linear-gradient(to right, #900C3F, #DAF7A6); }'}</style>
        </Helmet>
        <div className='row row-cols-6'>
          <Modal.Dialog>
                <div className='col align-self-center'>
                    <Modal.Body>
                      <Login />
                    </Modal.Body>
                </div>
            </Modal.Dialog>
        </div>
      </div>
    );
  }
}

export default App;
