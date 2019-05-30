import styled from 'styled-components';


export const ButtonContainer = styled.button`
         height: 100%;
         width: 100px;
         text-align: center;
         background: transparent;
         color: rgba(255, 255, 255, 0.897);
         border: none;
         box-shadow: -3px 4px 3px -2px rgba(0, 0, 0, 1);
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