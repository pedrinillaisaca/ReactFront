import React  from 'react';

class MiFormulario extends React.Component{
    constructor(args){
        super(args)
        this.state={
            nombre: '',
            apellido: '',
            password: '',
            correo: '',
            idioma: '',
            genero: ''
        }
    }

    onChange(e){


            this.setState({
            [e.target.name]: e.target.value
            })
        
        
    }
    save(e){
        alert("pedro")
    }

    render(){
        return(
            <div>
                <label htmlFor='nombre'>Nombre: </label>
                <input 
                value={this.state.nombre}
                onChange={this.onChange.bind(this)}
                name='nombre' id='nombre' type='text' /><br></br>
                

                <label htmlFor='apellido'>Apellido: </label>
                <input 
                value={this.state.apellido}
                onChange={this.onChange.bind(this)}
                name='apellido' id='apellido' type='text' /><br></br>

                <label htmlFor='correo'>Correo: </label>
                <input 
                value={this.state.correo}
                onChange={this.onChange.bind(this)}
                name='correo' id='correo' type='text' /><br></br>

                <label htmlFor='password'>password: </label>
                <input                 
                value={this.state.password}
                onChange={this.onChange.bind(this)}
                name='password' id='password' type='password' /><br></br>

                <label htmlFor='idioma'>Idioma: </label>
                <select  id='idioma' name='idioma'
                    value={this.state.idioma}
                    onChange={this.onChange.bind(this)}  
                   >
                    <option value='es'> Español</option>
                    <option value='in'>Ingles</option>
                    <option value='po'>Portugues</option>
                    <option value='ma'>Mandarin</option>
                </select><br></br>

                <label htmlFor='genero'> Genero</label>
                <input type='radio' name='genero' value='h' onChange={this.onChange.bind(this)} />Hombre 
                <input type='radio' name='genero' value='m' onChange={this.onChange.bind(this)} />Mujer
                <br></br>
                
                <input id='acept' name='acept' type='checkbox' 
                    value={this.state.acept}
                    onChange={this.onChange.bind(this)}/>Aceptas los terminos.


                <br></br>

                <button onClick={this.save.bind(this.state)}>Registrarse</button> <br></br>



                <p>{JSON.stringify(this.state)}</p>

            </div>
        );
    }


}

export default MiFormulario;