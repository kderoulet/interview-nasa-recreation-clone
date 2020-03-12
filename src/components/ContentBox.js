import React from 'react'

const ContentBox = (props) => {
    return(
        <div style={{
            backgroundColor: '#FFF', 
            borderRadius: '5px', 
            width: '33%',
            margin: '10px',
            padding: '10px',
            display: "inline-block"
        }}>
            <h2>{props.full_name}</h2>
            Photos: {props.photos}<br/><br/>
            Sample photo: <br/><br/>
            <img alt="sampled"src={props.img_src} />
        </div>
    )
}

export default ContentBox