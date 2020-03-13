import React from 'react'

const ContentBox = (props) => {
    let height = props.img_src ? '496px' : '156px'
    return(
        <div style={{
            backgroundColor: '#FFF', 
            borderRadius: '3px', 
            width: '255px',
            margin: '10px 0 10px 20px',
            padding: '10px',
        }}>
            <div style={{
                height: "60px"
            }}>
                <h3>{props.full_name}</h3>
            </div>
            <div style={{fontSize: '13px'}}>
                Photos: {props.photos}<br/><br/>
                {props.photos? 
                <div>
                    Sample photo: <br/><br/>
                    <img style={{width: "100%"}} alt="sample"src={props.img_src} />
                </div>
                :
                ""
                }
            </div>
        </div>
    )
}

export default ContentBox