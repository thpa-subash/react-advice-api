import React from 'react'











 const AdviceCard = (props) => {
    return (
        <div>
            <p>subash thapa</p>
            {
                props.advices.map((advice, index) => 
                    <div>
                        <p>{advice.advice}</p>
                    </div>
                )
            }
            
        </div>
    )
}
export default AdviceCard;
