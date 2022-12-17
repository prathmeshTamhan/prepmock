import React from 'react'
import './QueDiv.css'

export default function QueDiv({que}) {
    return (
        <>
            <div className="queCon border">
                {que}
            </div>
        </>
    )
}
