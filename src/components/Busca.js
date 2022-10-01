import React, { Component } from 'react'
import { InputText } from 'primereact/inputtext'
import {Button} from 'primereact/button'

export default class Busca extends Component {
    state = {
        termodeBusca: ''
    }
    onTermoAlterado = (event) => {
        console.log(event.target.value)
        this.setState({termodeBusca: event.target.value})
    }
  render() {
    return (
      <div className="flex flex-colunm">
        <span className="p-input-icon-left w-full">
            <i className="pi pi-search"/>
            <InputText value={this.state.termodeBusca} className="w-full" onchange={this.onTermoAlterado} placeholder={this.props.dica}/>
        </span>
        <Button label="OK" className="p-button-outlined mt-2"/>
      </div>
    )
  }
}

Busca.defaultProps = {
    dica: 'Digite algo que deseja ver ... '
}