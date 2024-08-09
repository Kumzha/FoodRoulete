import React from 'react'
import ClipLoader from "react-spinners/ClipLoader";

function LoadingScreen() {


    return (
        <div className="loader-container">
            <ClipLoader
            color={color}
            loading={loading}
            cssOverride={override}
            size={150}
            aria-label="Loading Spinner"
            data-testid="loader"
            />
        </div>
    )
}

export default LoadingScreen