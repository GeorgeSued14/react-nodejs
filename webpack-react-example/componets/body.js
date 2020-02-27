import React from 'react';
import axios from 'axios'

class Body extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            persons: [],
        }
    }
    componentDidMount() {
        setTimeout(function() {
            window.location.reload(1);
          }, 60000);
        axios.defaults.headers.post['Content-Type'] ='application/json;charset=utf-8';
        axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
        axios.get(`http://localhost:3000/users`)
            .then(res => {
                console.log(res.data);
                this.setState({
                    persons: res.data
                })
            });
    };

    render() {
        const { persons } = this.state;
        return(
            <div>
                <h1>Lista de Contatos de Sites</h1>
                { persons.map((element, key) =>{
                    
                    let nome = element.nome;
                    let site = element.site;
                    
                    return (
                        <ul>
                            <li>{nome}</li>
                            <li><a>{site}</a></li>
                        </ul>
                    );
                })}
            </div>
        )
    }
}

export default Body;