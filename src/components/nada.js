  
import React, { Component } from 'react';
import firebaseConf from './Firebase';
import { Button, Container } from "reactstrap";

class Nada extends Component {

  constructor(props) {
    super(props);
    this.state = {
      form: [],
      alert: false,
      alertData: {}
    };
  }

  showAlert(type, message) {
    this.setState({
      alert: true,
      alertData: { type, message }
    });
    setTimeout(() => {
      this.setState({ alert: false });
    }, 4000)
  }

  resetForm() {
    this.refs.contactForm.reset();
  }

  componentWillMount() {
    let formRef = firebaseConf.database().ref('form').orderByKey().limitToLast(6);
    formRef.on('child_added', snapshot => {
      const {email, message } = snapshot.val();
      const data = {  email, message };
      this.setState({ form: [data].concat(this.state.form) });
    })
  }

  sendMessage(e) {
    e.preventDefault();
    const params = {

      email: this.inputEmail.value,
    
      message: this.textAreaMessage.value
    };
    if ( params.email  && params.message) {
      firebaseConf.database().ref('form').push(params).then(() => {
        this.showAlert('success', 'Your message was sent successfull');
      }).catch(() => {
        this.showAlert('danger', 'Your message could not be sent');
      });
      this.resetForm();
    } else {
      this.showAlert('warning', 'Please fill the form');
    };
  }

  render() {
    return (
      <div


       style={{
         backgroundImage:
           "url(" + require("../assets/img/ladyheader2.jpg") + ")",   minHeight: '120vh'
      }}
        className="page-header" 
        data-parallax={true}
       
      >


        <div className="filter" />
        <Container>

       
          
          <div className="motto text-center">
      <div>
        {this.state.alert && <div className={`alert alert-${this.state.alertData.type}`} role='alert'>
          <div className='container'>
            {this.state.alertData.message}
          </div>
        </div>}
        <div className='container' style={{ padding: `40px 0px` }}>
          <div className='row'>
            <div className='col-sm-11'>
              <h2>Trabajemos en Equipo</h2>
              <form onSubmit={this.sendMessage.bind(this)} ref='contactForm' >
               
                <div className='form-group'>
                  <label htmlFor='exampleInputEmail1'>Email</label>
                  <input type='email' className='form-control' id='email' placeholder='Email' ref={email => this.inputEmail = email} />
                </div>
             
                <div className='form-group'>
                  <label htmlFor='message'>Message</label>
                  <textarea className='form-control' id='message' rows='3' placeholder='Trabajemos en Equipo...' ref={message => this.textAreaMessage = message}></textarea>
                </div>
                <Button type='submit'  className="btn-round mr-1"
              color="neutral"
              target="_blank"
              outline
              size="ms"
              >Enviar Mensaje</Button>
                <Button
              href= "https://www.canva.com/design/DAEQCbEUxvI/G8DyPpphtG6bELfsmZsFug/view?website#4"
              
              className="btn-round mr-1"
              color="neutral"
              target="_blank"
              outline
              size="ms"
            >
              <i className="fa fa-doc" />
              Descargar CV
            </Button>
              </form>
            </div>
         
          </div>
        </div>
    
      </div>
      </div>
      </Container>
      </div>

    );
  }
}

export default Nada;