import React, {Component} from 'react'
import SelectionMenu from './components/SelectionMenu'
import ContentBox from './components/ContentBox'

let curiosity = require('./curiosity.json')
let sol1000 = require('./sol1000.json')
class App extends Component {
  
  constructor() {
    super()
    this.state = {
      // cameras is an array of objects containing camera name, checkbox value
      // and number of photos
      cameras: [],
      sol: '',
      showModal: 'none'
    }
  }

  // functions for 
  displayModal = () => {
    this.setState({showModal: 'block'})
  }

  hideModal = () => {
    this.setState({showModal: 'none'})
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
    let cameraArray = this.state.cameras
    for (let i = 0; i < cameraArray.length; i++) {
      cameraArray[i].photos = 0
    }
    sol1000.photos.forEach(photo => {
      for (let i = 0; i < cameraArray.length; i++) {
        if (cameraArray[i].full_name === photo.camera.full_name) {
          cameraArray[i].photos = cameraArray[i].photos+1
          if (!cameraArray[i].samplePhoto) {
            cameraArray[i].samplePhoto = photo.img_src
          }
        }
      }
    })
      // sort cameraArray to display cameras with photos first

    cameraArray.sort(function(a, b) {
      if (a.samplePhoto > b.samplePhoto) return -1
      if (a.samplePhoto === b.samplePhoto) return 0
      if (a.samplePhoto < b.samplePhoto) return 1
    })
    this.setState({cameras: cameraArray})
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
      sol: '1000',
      maxSol: curiosity.rover.max_sol,
      name: curiosity.rover.name,
      launched: curiosity.rover.launch_date,
      landed: curiosity.rover.landing_date
    }, function() {
      this.updateSol('1000')
    })
  }

  render() {
    return (
      <div style={{fontFamily: "Arial"}}>
        <h2>{this.state.name} Images </h2>
        <div style={{fontSize: '12px', marginBottom: '15px'}}>
        Launched: {this.state.launched}&nbsp;
        | Landed: {this.state.landed}&nbsp;
        | Max Sol: {this.state.maxSol}
        </div>
        <SelectionMenu 
          cameras={this.state.cameras}

          showModal={this.state.showModal}
          displayModal={this.displayModal}
          hideModal={this.hideModal}

          selectAllCheckBoxes={this.selectAllCheckBoxes}
          clearAllCheckBoxes={this.clearAllCheckBoxes}
          onCheckBoxClick={this.onCheckBoxClick}

          sol={this.state.sol}
          onSolChange={this.onSolChange}
          maxSol={this.state.maxSol}
        />
        <div style={{
          backgroundColor: 'rgb(122,135,150)',
          minHeight: '100vh',
          display: 'flex',
          flexFlow: 'row wrap',
          padding: '3px'
        }}>
          <br/>
          {this.state.cameras?
          this.state.cameras.map((camera, idx) => {
            if (camera.checked) {
              return(
                <ContentBox
                img_src={camera.samplePhoto}
                photos={camera.photos}
                full_name={camera.full_name}
                key={idx}
                />
              )
            } else return ''
          })
          : ''
          }
          <br/>
        </div>
      </div>
    )
  }
  
}

export default App
