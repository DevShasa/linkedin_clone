import React from 'react'
import "./InputOption.css"

function InputOption({ optionName, Icon, color }) {
    return (
        <div className="inputOption">
            <Icon 
                className="inputOption__icon" 
                style={{
                    color: color
                }}
            />
            <span>{optionName}</span>
        </div>
    )
}

export default InputOption