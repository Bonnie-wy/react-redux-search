import styled from "styled-components";

export const StyledPopupBox = styled.div`
  background: ${(props) => props.theme.colors.slightlyDarkerGrey};
  width: 434px;
  height: 100%;
  max-height: 320px;
  padding: 10px;
  overflow: scroll;
  position: relative;
`;
