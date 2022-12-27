import {Component} from 'react'
import './index.css'

class EditText extends Component {
  state = {isSelected: false, textInput: ''}

  onChangeInput = event => {
    this.setState({textInput: event.target.value})
  }

  onClickBtn = () => this.setState({isSelected: true})

  onClickEditBtn = () => this.setState({isSelected: false})

  renderEditInputCard = () => {
    const {textInput} = this.state
    return (
      <div className="input-container">
        <input
          type="text"
          onChange={this.onChangeInput}
          className="text-input"
          value={textInput}
        />
        <button type="button" className="save-btn" onClick={this.onClickBtn}>
          Save
        </button>
      </div>
    )
  }

  renderEditCard = () => {
    const {textInput} = this.state
    return (
      <div className="input-container">
        <p className="edit-input">{textInput}</p>
        <button
          type="button"
          className="edit-btn"
          onClick={this.onClickEditBtn}
        >
          Edit
        </button>
      </div>
    )
  }

  render() {
    const {isSelected} = this.state
    return (
      <div className="app-container">
        <div className="edit-container">
          <h1 className="title">Editable Text Input</h1>
          {isSelected ? this.renderEditCard() : this.renderEditInputCard()}
        </div>
      </div>
    )
  }
}

export default EditText
