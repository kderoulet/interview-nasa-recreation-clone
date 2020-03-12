import React from 'react'

const SelectionMenu = (props) => {
    return(
        <div style={{backgroundColor: 'rgb(211,211,211)'}}>
            <div style={{width: "50%", display: "inline-block"}}>
                Cameras
                <div id="modal" style={{backgroundColor: "#fff"}}>
                    <span onClick={props.selectAllCheckBoxes}>Select All </span>
                    <span onClick={props.clearAllCheckBoxes}>Clear</span>
                    <br/>
                    { props.cameras ?
                        props.cameras.map((camera, idx) => {
                            return(
                            <div key={idx}>
                                <input type="checkbox" 
                                    label={camera} 
                                    checked={props.checkBoxes[idx]}
                                    value={idx}
                                    onClick={props.onCheckBoxClick}
                                    />
                                <label>{camera}</label>
                            </div>)
                        })
                        :
                        ''
                    }
                </div>
            </div>
            <div style={{width: "50%", display: "inline-block"}}>
                Sol<br/>
                <input type="text" />
            </div>

        </div>
    )
}

export default SelectionMenu