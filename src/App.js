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
      // cameras is an array of objects containing camera name, checkbox value
      // and number of photos
      cameras: [],
      img_src: data.img_src,
      photos: '5',
      full_name: data.camera.full_name,
      sol: ''
      
    }
  }

  // functions for checkboxes

  selectAllCheckBoxes = () => {
    let cameraArray = this.state.cameras
    cameraArray.forEach(camera => camera.checked = true)
    this.setState({cameras: cameraArray})
  }

  clearAllCheckBoxes = () => {
    let cameraArray = this.state.cameras
    cameraArray.forEach(camera => camera.checked = false)
    this.setState({cameras: cameraArray})
  }

  onCheckBoxClick = (target) => {
    let idx = target.target.value
    let cameraArray = this.state.cameras
    // toggle the value of the checkbox
    cameraArray[idx].checked === true ? cameraArray[idx].checked = false : cameraArray[idx].checked = true
    this.setState({checkBoxes: cameraArray})
  }

  // sol input field functions

  onSolChange = (target) => {
    let sol = target.target.value
    this.setState({sol: sol})
    this.updateSol(sol)
  }

  updateSol = (sol) => {
  // fetch(https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=${sol}&api_key=DEMO_KEY`)
    let numPhotos = 0
    sol1000.photos.forEach(photo => {
      if (photo.full_name == 'Front Hazard Avoidance Camera') {
        numPhotos++
      }
      
    })
    this.setState({photos: numPhotos})
  }


  // lifecycle methods

  componentDidMount() {
    let cameraArray = []
    curiosity.rover.cameras.forEach(camera => {
      let cameraObject = {}
      cameraObject["full_name"] = camera.full_name
      cameraObject["checked"] = true
      cameraObject["photos"] = 0
      cameraObject["samplePhoto"] = ''
      cameraArray.push(cameraObject)
    })
    this.setState({
      cameras: cameraArray, 
      sol: '1000'
    })
  }

  render() {
    return (
      <div>
        <SelectionMenu 
          cameras={this.state.cameras}

          selectAllCheckBoxes={this.selectAllCheckBoxes}
          clearAllCheckBoxes={this.clearAllCheckBoxes}
          onCheckBoxClick={this.onCheckBoxClick}

          sol={this.state.sol}
          onSolChange={this.onSolChange}
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
