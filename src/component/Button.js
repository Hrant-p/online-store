import styled from 'styled-components';


export const ButtonContainer = styled.button`
         text-align: center;
         background: transparent;
         color: darkblue;
         border: none;
         box-shadow: 0px 0px 4px -1px rgba(0, 0, 0, 0.822);
         border-radius: 5px;
         padding: 2.5px 7.5px;
         box-sizing: border-box;
         margin: auto 30px;

         transition: all 0.2s ease-in-out;
         &:hover {
           background: var(--lightBlue);
           color: white;
           transform: scale(1.1);
         }
         &:focus {
           outline: none;
         }
       `;