import React from "react";
import '../styles/igniteYouth.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from "styled-components";

function First() {
    return (
        <Wrapper>
            <div>
                <div className="igniteYouth text-center">
                </div>

                <div className="whatIsIgnite text-center">
                </div>

                <div className="speakers text-center">
                </div>

                <div className="instagramIgnite text-center">
                </div>

                <div className="specialPeformance text-center">
                </div>

                <div className="countdownIgnite text-center">
                </div>
            </div>
        </Wrapper>
    );
}

const Wrapper = styled.div`
    /* omitted */
`;

export default First;

// function First() {
//     return (
//         <Wrapper>
//             <span>First</span>
//             <section>
//                 <p>
//                     Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
//                     eiusmod tempor incididunt ut labore et dolore magna aliqua.
//                     {/* omitted */}
//                 </p>
//             </section>
//         </Wrapper>
//     );
// }
//
// const Wrapper = styled.div`
//     /* omitted */
// `;
//
// export default First;