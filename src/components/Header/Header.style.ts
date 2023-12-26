import styled from "styled-components";

export const NavWrapper = styled.section`
    background: var(--darkGray);
    position: fixed;
    top:0;
    left:0;
    width: 100%;
    height:108px;
    padding: 8px;
    text-align: center;
    z-index: 10;
    //max-width: var(--maxWidth);
    
    .tabContainer{
        display: flex;
        overflow-x: scroll;
        overflow-y: hidden;
        margin-top: 12px;
        
    }
    .tabContainer::-webkit-scrollbar {
      display: none;
    }
    .tab{
        padding: 0px 12px;
        display: flex;
        align-items: center;
        justify-content: center;
        background: var(--mediumGray);
        font-size: 14px;
        border-radius: 4px;
        cursor: pointer;
        letter-spacing: 0.1px;
        line-height: 20px;
        &:not(:first-of-type){
            margin-left: 8px;
      }
    }
    .activeTab{
        background: red;
    }
    `;
