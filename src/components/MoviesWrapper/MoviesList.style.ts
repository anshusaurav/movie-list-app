import styled from "styled-components";

export const Wrapper = styled.main`
  margin-top: 108px;
  height: 100%;
  .movieContainer{
    margin-top: 10px;
    padding: 8px;
  }
  .heading {
    font-size: 20px;
    font-weight: 400;
    padding: 24px 0 8px;
    display: flex;
  }

  .movies {
    display: flex;
    flex-wrap: wrap;
    gap: 30px 20px;
    min-height: 84vh;
  }

  .no_movies {
    min-height: calc(100vh - 100px);
    background: var(--black);
    text-align: center;
    margin-top: 100px;
    font-weight: 400;
    font-size: 20px;
    height: 84vh;
    display: flex;
    align-items:center;
    justify-content: center;
  }
`;