import styled from "styled-components";

export const SItemCart = styled.div`
  padding: 10px 20px;
  margin: 10px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  .left-cart {
    img {
      width: 100px;
      height: 100px;
      border-radius: 8px;
    }
    display: flex;
    align-items: center;
    .info {
      margin-left: 56px;
      .name {
        color: orange;
      }
      .price {
        color: green;
        margin-top: 5px;
      }
    }
  }
  .right-cart {
    display: flex;
    align-items: center;
    .count {
      margin-right: 50px;
      button {
        width: 30px;
        height: 30px;
        cursor: pointer;
        border: none;
        color: white;
        &.decrease {
          background-color: red;
        }
        &.plus {
          background-color: gold;
        }
      }
      span {
        margin: 0 10px;
        color: gray;
      }
    }
    .delete {
      cursor: pointer;
    }
  }
`;