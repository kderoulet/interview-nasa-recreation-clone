import React, {Component} from 'react'
import SelectionMenu from './components/SelectionMenu'
import ContentBox from './components/ContentBox'

let data = {"id":102693,"sol":1000,"camera":{"id":20,"name":"FHAZ","rover_id":5,"full_name":"Front Hazard Avoidance Camera"},"img_src":"http://mars.jpl.nasa.gov/msl-raw-images/proj/msl/redops/ods/surface/sol/01000/opgs/edr/fcam/FLB_486265257EDR_F0481570FHAZ00323M_.JPG","earth_date":"2015-05-30","rover":{"id":5,"name":"Curiosity","landing_date":"2012-08-06","launch_date":"2011-11-26","status":"active","max_sol":2540,"max_date":"2019-09-28","total_photos":366206,"cameras":[{"name":"FHAZ","full_name":"Front Hazard Avoidance Camera"},{"name":"NAVCAM","full_name":"Navigation Camera"},{"name":"MAST","full_name":"Mast Camera"},{"name":"CHEMCAM","full_name":"Chemistry and Camera Complex"},{"name":"MAHLI","full_name":"Mars Hand Lens Imager"},{"name":"MARDI","full_name":"Mars Descent Imager"},{"name":"RHAZ","full_name":"Rear Hazard Avoidance Camera"}]}}

class App extends Component {
  
  constructor() {
    super()
    this.state = {
      cameras: [
        'Front Hazard Avoidance Camera',
        'Navigation Camera',
        'Mast Camera',
        'Chemistry and Camera Complex',
        'Mars Hand Lens Imager',
        'Mars Descent Imager',
        'Rear Hazard Avoidance Camera'
      ],
      img_src: data.img_src,
      photos: '5',
      full_name: data.camera.full_name,

      
    }
  }

  componentDidMount() {
    // fetch(https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=${sol}&api_key=DEMO_KEY`)
  }

  render() {
    return (
      <div>
        <SelectionMenu 
          cameras={this.state.cameras}
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
