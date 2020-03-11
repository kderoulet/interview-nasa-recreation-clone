import React from 'react'

const SelectionMenu = (props) => {
    return(
        <div style={{backgroundColor: 'rgb(211,211,211)'}}>
            Cameras
            <br/>
            { props.cameras ?
                props.cameras.map((camera, idx) => <input type="checkbox" label={camera}/>)
                :
                ''
            }

        </div>
    )
}

export default SelectionMenu