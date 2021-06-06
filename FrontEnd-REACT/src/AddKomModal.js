import React,{Component} from 'react';
import {Modal,Button, Row, Col, Form} from 'react-bootstrap';

export class AddKomModal extends Component{
    constructor(props){
        super(props);
        this.handleSubmit=this.handleSubmit.bind(this);
    }

    handleSubmit(event){
        event.preventDefault();
        fetch('http://localhost:57134/api/kompania',{
            method:'POST',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                KompaniaId:event.target.KompaniaId.value,
                Emri:event.target.Emri.value,
                NrBiznesit:event.target.NrBiznesit.value,
                Vendi:event.target.Vendi.value
            })
        })
        .then(res=>res.json())
        .then((result)=>{
            alert(result);
        },
        (error)=>{
            alert('Failed');
        })
    }
    render(){
        return (
            <div className="container">

    <Modal
    {...this.props}
    size="lg"
    aria-labelledby="contained-modal-title-vcenter"
    centered
    >
        <Modal.Header clooseButton>
            <Modal.Title id="contained-modal-title-vcenter">
                Add Kompani
            </Modal.Title>
        </Modal.Header>
        <Modal.Body>

            <Row>
                <Col sm={6}>
                    <Form onSubmit={this.handleSubmit}>
                        <Form.Group controlId="KompaniaId">
                            <Form.Label>KompaniaId</Form.Label>
                            <Form.Control type="text" name="KompaniaId" required 
                            placeholder="KompaniaId"/>
                        </Form.Group>
                        
                        <Form.Group controlId="Emri">
                            <Form.Label>Emri</Form.Label>
                            <Form.Control type="text" name="Emri" required 
                            placeholder="Emri"/>
                        </Form.Group>

                        <Form.Group controlId="NrBiznesit">
                            <Form.Label>NrBiznesit</Form.Label>
                            <Form.Control type="text" name="NrBiznesit" required 
                            placeholder="NrBiznesit"/>
                        </Form.Group>

                        <Form.Group controlId="Vendi">
                            <Form.Label>Vendi</Form.Label>
                            <Form.Control type="text" name="Vendi" required 
                            placeholder="Vendi"/>
                        </Form.Group>

                        <Form.Group>
                            <Button variant="primary" type="submit">
                                Add Kompani
                            </Button>
                        </Form.Group>
                    </Form>
                </Col>
            </Row>
        </Modal.Body>
        
        <Modal.Footer>
            <Button variant="danger" onClick={this.props.onHide}>Close</Button>
        </Modal.Footer>

    </Modal>

    </div>
    )
    }
}