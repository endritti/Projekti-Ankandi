import React,{Component} from 'react';
import {Table} from 'react-bootstrap';

import {Button,ButtonToolbar} from 'react-bootstrap';
import {AddKomModal} from './AddKomModal';
import {EditKomModal} from './EditKomModal';

export class Kompania extends Component{

    constructor(props){
        super(props);
        this.state={koms:[], addModalShow:false, editModalShow:false}
    }

    componentDidMount(){
        this.refreshList();
    }

    refreshList(){
        //fetch(process.env.REACT_APP_API+'kompania')
        fetch('http://localhost:57134/api/kompania')
        .then(response=>response.json())
        .then(data=>{
            this.setState({koms:data});
        });
    }

    componentDidUpdate(){
        this.refreshList();
    }

    deleteKom(komid){
        if(window.confirm('Jeni i sigurt?')){
            fetch('http://localhost:57134/api/kompania/'+komid,{
                method:'DELETE',
                header:{'Accept':'application/json',
            'Content-Type':'application/json'}
            })
        }
    }

    render(){
        const {koms, komid, komemri,komNr, komVendi}=this.state;
        let addModalClose=()=>this.setState({addModalShow:false});
        let editModalClose=()=>this.setState({editModalShow:false});
        return(
            <div>
                <Table className="mt-4" striped bordered hover size="sm">
                    <thead>
                        <tr>
                            <th>KompaniaId</th>
                            <th>Emri</th>
                            <th>NrBiznesit</th>
                            <th>Vendi</th>
                        </tr>
                    </thead>

                    <tbody>
                        {koms.map(kom=>
                            <tr>
                                <td>{kom.KompaniaId}</td>
                                <td>{kom.Emri}</td>
                                <td>{kom.NrBiznesit}</td>
                                <td>{kom.Vendi}</td>
                                    <td>
                                        <ButtonToolbar>
                                        <Button className="mr-2" variant="info"
                                            onClick={()=>this.setState({editModalShow:true,
                                            komid:kom.KompaniaId,komemri:kom.Emri,
                                            komNr:kom.NrBiznesit,komVendi:kom.Vendi})}>
                                            Edit
                                        </Button>

                                        <Button className="mr-2" variant="danger"
                                            onClick={()=>this.deleteKom(kom.KompaniaId)}>
                                            Delete
                                        </Button>

                                        <EditKomModal show={this.state.editModalShow}
                                        onHide={editModalClose}
                                        komid={komid}
                                        komemri={komemri}
                                        komNr={komNr}
                                        komVendi={komVendi}/>

                                    </ButtonToolbar>
                                </td>
                            </tr>)}
                    </tbody>
                </Table>

                <ButtonToolbar>
                    <Button variant='primary'
                    onClick={()=>this.setState({addModalShow:true})}>
                    Shto Kompani
                    </Button>

                    <AddKomModal show={this.state.addModalShow}
                    onHide={addModalClose}/>
                </ButtonToolbar>
            </div>
        )
    }
}