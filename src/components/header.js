import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import {Container} from "./view/form-container";

function Header() {
    return (
        <Wrapper>
            <div className="tellMeMoreBtn">
                <Link to="/first" className="container">First</Link>
            </div>
        </Wrapper>
    );
}

const Wrapper = styled.div`
  height: 50px;
  display: flex;
  align-items: center;
`;

export default Header;

// import React from "react";
// import styled from "styled-components";
// import { Link } from "react-router-dom";
//
// function Header() {
//     return (
//         <Wrapper>
//             <ul>
//                 <li>
//                     <Link to="/">Home</Link>
//                 </li>
//                 <li>
//                     <Link to="/first">First</Link>
//                 </li>
//             </ul>
//         </Wrapper>
//     );
// }
//
// const Wrapper = styled.div`
//   height: 50px;
//   display: flex;
//   align-items: center;
//   background-color: #f5f5f5;
//   ul {
//     margin: 0;
//     padding: 0;
//   }
//   li {
//     display: inline-block;
//     margin-left: 20px;
//     a {
//       text-decoration: none;
//       font-size: 20px;
//       color: #333;
//     }
//   }
// `;
//
// export default Header;