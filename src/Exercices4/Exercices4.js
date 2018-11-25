import React from 'react'
import Button from './Button'

class Exercices4 extends React.Component {
    state={
        number: 0
    }
    incHandler(){

    }
    inc5Handler(){

    }
    decHandler(){

    }
    dec5Handler(){
        
    }
    render(){
        return(
            <div>
                <Button 
                label='+'
                onClick={()=>{}}
                />
                <Button 
                label='-'
                onClick={()=>{}}
                />
                <Button
                label='+ 5' 
                onClick={()=>{}}
                />
                <Button 
                label='- 5'
                onClick={()=>{}}
                />
                <Button 
                label='Reset'
                onClick={()=>{}}
                />
            </div>
        )
    }
}
export default Exercices4