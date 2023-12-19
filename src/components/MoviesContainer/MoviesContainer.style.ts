import styled from "styled-components";

export const Wrapper = styled.main`
    background: var(--black);
    color: var(--white);
    height: 100%;

  .heading {
    font-size: 1.2em;
    font-weight: 600;
    padding: 15px 0;
  }

  .movies {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 12px;
  }

  .no_movies {
    text-align: center;
    margin-top: 100px;
    font-weight: 400;
    font-size: 1.2em;
    height: 100%;
  }
`;