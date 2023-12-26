import styled from "styled-components";

export const Wrapper = styled.main`
  position: relative;
  transition: transform .45s,-webkit-transform .45s;
  object-fit: contain;
  overflow: hidden;
  height: 330px;
  min-width: calc(50% - 10px);
  
  &:hover {
    cursor: pointer;
  }
  a {
    width: 100%;
  }

  .image {
    height: 100%;
    min-width: 100%;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  
  .cover {
    position: absolute;
    padding: 8px;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    background-image: linear-gradient(0deg, rgba(0, 0, 0, 0.8) 60%, transparent 100%);
    text-align: left;
    .title {
      width: 100%;
      font-size: 14px;
      color: #FEFEFE;
      font-weight: 600;
    }
    .rating {
      font-size: 8px;
      font-weight: 600;
    }
  }

  
`;