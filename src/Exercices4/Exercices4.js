import React from 'react'
import Button from '../Elements/Button'

class Exercices4 extends React.Component {
    state = JSON.parse(localStorage.getItem('numbers'))
        ||
        {
            number: 0
        }
    componentDidUpdate() {
        this.saveInToLocalStorage()
    }
    saveInToLocalStorage = () => localStorage.setItem(
        'numbers',
        JSON.stringify(this.state)
    )
    incHandler = () => (
        this.setState({ number: this.state.number + 1 })
    )
    incHandler5 = () => (
        this.setState({ number: this.state.number + 5 })
    )
    decHandler = () => (
        this.setState({ number: this.state.number - 1 })
    )
    decHandler5 = () => (
        this.setState({ number: this.state.number - 5 })
    )
    resetHandler = () => (
        this.setState({ number: this.state.number = 0 })
    )
    render() {
        return (
            <div>
                <h2>{this.state.number}</h2>
                <Button
                    label='+'
                    onClick={this.incHandler}
                />
                <Button
                    label='-'
                    onClick={this.decHandler}
                />
                <Button
                    label='+ 5'
                    onClick={this.incHandler5}
                />
                <Button
                    label='- 5'
                    onClick={this.decHandler5}
                />
                <Button
                    label='Reset'
                    onClick={this.resetHandler}
                />
            </div >
        )
    }
}
export default Exercices4