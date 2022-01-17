import './Intervalo.css'
import React from 'react'
import { connect } from 'react-redux'

import Card from './Card'
import { alterarNumeroMinimo, alterarNumeroMaximo } from '../store/actions/numeros'

  function Intervalo(props){
    const { min, max } = props;
    
    return (
        <Card title='Intervalo de numeros' red>
            <span>
                <strong>Minimo</strong>
                <input type="number" value={min} 
                onChange={e => props.alterarMinimo(+e.target.value)}/>
            </span>
            <span>
                <strong>Maximo</strong>
                <input type="number" value={max} 
                onChange={e => props.alterarMaximo(+e.target.value)}/>
            </span>
        </Card>
    )
}

function mapSateToProps(state) {
    return{
        min: state.numeros.min,
        max: state.numeros.max,
    }
}

function mapDispathToProps(dispatch) {
    return {
        alterarMinimo(novoNumero){
            const action = alterarNumeroMinimo(novoNumero)
            dispatch(action)
        },
        alterarMaximo(novoNumero){
            const action = alterarNumeroMaximo(novoNumero)
            dispatch(action)
        },
    }
}

export default connect(
    mapSateToProps,
    mapDispathToProps
 )(Intervalo)