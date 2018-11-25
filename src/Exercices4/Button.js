import React from 'react'
import RisedButton from 'material-ui/RaisedButton'
const style = {
    margin: 15
}
const Button = (props) => (
    <RisedButton
        style={style}
        primary={true}
        label={props.label}
        onClick={props.onClick}
    />
)
export default Button