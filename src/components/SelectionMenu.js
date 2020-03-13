import React from 'react'

const SelectionMenu = (props) => {
    return(
        <div style={{
            backgroundColor: 'rgb(211,211,211)',
            padding: '10px 10px 15px 10px',
            borderRadius: '3px 3px 0 0'
        }}>
            <div style={{display: "inline-block", fontSize: '14px', fontWeight: '800'}}>
                <div style={{margin: '0px 5px'}} >
                    Cameras
                </div>
                <div style={{
                    margin: '0px 5px', 
                    padding: '10px', 
                    fontSize: '10px', 
                    borderRadius: '3px', 
                    border: 'none', 
                    backgroundColor: '#fff',
                    cursor: 'pointer',
                    fontWeight: '500'
                    }}
                 onClick={props.showModal === 'none' ? props.displayModal:props.hideModal}
                 >
                    {props.cameras.filter(camera => camera.checked === true).length} Selected &#9660;
                </div>
                <div id="modal" style={{
                    backgroundColor: "#fff",
                    borderRadius: '3px',
                    position: 'absolute',
                    display: props.showModal,
                    zIndex: '5',
                    boxShadow: '0px 0px 3px 1px #888',
                    padding: '10px',
                    margin: '5px 0 0 5px',
                    fontSize: '14px',
                    fontWeight: '400',
                    width: '255px'
                    }}>
                    <span style={{color: "green", float: 'right', fontSize: '10px', fontWeight: '800'}} onClick={props.selectAllCheckBoxes}>Select All </span>
                    <span style={{color: "green", float: 'left', fontSize: '10px', fontWeight: '800'}} onClick={props.clearAllCheckBoxes}>Clear</span>
                    <br/>
                    { props.cameras ?
                        props.cameras.map((camera, idx) => {
                            return(
                            <div style={{margin: '20px 10px'}} key={idx}>
                                <input type="checkbox" 
                                    checked={camera.checked}
                                    value={idx}
                                    onChange={props.onCheckBoxClick}
                                    style={{fontSize: '1px', cursor: 'pointer'}}

                                    />&nbsp;&nbsp;
                                <label>{camera.full_name}</label>
                            </div>)
                        })
                        :
                        ''
                    }
                </div>
            </div>
            <div style={{display: "inline-block", fontSize: '14px', fontWeight: '800'}}>
                Sol<br/>
                <input 
                type="number" min={1} max={props.maxSol ? props.maxSol: 100} 
                value={props.sol} onChange={props.onSolChange}
                style={{fontSize: '10px', padding: '10px', borderRadius: '3px', border: 'none'}}
                />
            </div>

        </div>
    )
}

export default SelectionMenu