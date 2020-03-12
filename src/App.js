import React, {Component} from 'react'
import SelectionMenu from './components/SelectionMenu'
import ContentBox from './components/ContentBox'

let curiosity = require('./curiosity.json')
let sol1000 = require('./sol1000.json')
let data = sol1000.photos[0]
class App extends Component {
  
  constructor() {
    super()
    this.state = {
      cameras: [],
      checkBoxes: [],
      img_src: data.img_src,
      photos: '5',
      full_name: data.camera.full_name,

      
    }
  }

  // functions for checkboxes

  selectAllCheckBoxes = () => {
    let checkBoxArray = []
    this.state.cameras.forEach(camera => checkBoxArray.push(true))
    this.setState({checkBoxes: checkBoxArray})
  }

  clearAllCheckBoxes = () => {
    let checkBoxArray = []
    this.state.cameras.forEach(camera => checkBoxArray.push(false))
    this.setState({checkBoxes: checkBoxArray})
  }

  onCheckBoxClick = (target) => {
    let idx = target.target.value
    let checkBoxArray = this.state.checkBoxes
    checkBoxArray[idx] === true ? checkBoxArray[idx] = false : checkBoxArray[idx] = true
    this.setState({checkBoxes: checkBoxArray})
  }


  // lifecycle methods

  componentDidMount() {
    // fetch(https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=${sol}&api_key=DEMO_KEY`)
    let cameraArray = []
    let checkBoxArray = []
    curiosity.rover.cameras.forEach(camera => {
      cameraArray.push(camera.full_name)
      checkBoxArray.push(true)
    })
    this.setState({cameras: cameraArray, checkBoxes: checkBoxArray})
  }

  render() {
    return (
      <div>
        <SelectionMenu 
          cameras={this.state.cameras}
          checkBoxes={this.state.checkBoxes}
          selectAllCheckBoxes={this.selectAllCheckBoxes}
          clearAllCheckBoxes={this.clearAllCheckBoxes}
          onCheckBoxClick={this.onCheckBoxClick}
        />
        <div style={{backgroundColor: 'rgb(122,135,150)'}}>
          <br/>
          <ContentBox
            img_src={this.state.img_src}
            photos={this.state.photos}
            full_name={this.state.full_name}
          />
          <br/>
        </div>
      </div>
    )
  }
  
}

export default App
