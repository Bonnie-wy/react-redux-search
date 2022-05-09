import styled from "styled-components";

export const StyledImage = styled.img`
  width: 72px;
  height: 72px;
  background: ${(props) => props.theme.colors.white};
  border-radius: 5px;
  border: 1px solid lightgrey;
`;

export const StyledImageWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StyledItemWrapper = styled.div`
  margin-bottom: 18px;
  display: flex;
  width: 100%;
  position: relative;
  padding: 10px;
  background: ${(props) => props.theme.colors.white};
  border-radius: 5px;
`;

export const StyledItemContent = styled.div`
  margin: 0 18px;
  width: 316px;
`;

export const StyledTitle = styled.div`
  margin-bottom: 10px;
`;

export const StyledText = styled.div`
  margin-bottom: ${(props) => props.theme.colors.darkGrey};
`;
