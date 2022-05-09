import styled from "styled-components";

export const StyledPopupWrapper = styled.div`
  display: flex;
  justify-content: right;
  margin: 9px 12px;
  position: absolute;
  top: 60px;
  right: 0;
`;

export const StyledHeader = styled.header`
  height: 60px;
  width: 100%;
  background: ${(props) => props.theme.colors.lightGrey};
  display: flex;
  justify-content: right;
  align-items: center;
  padding-right: 12px;
`;
