import React from "react";
import {
  StyledItemWrapper,
  StyledImageWrapper,
  StyledImage,
  StyledItemContent,
  StyledTitle,
  StyledText,
} from "./SearchItem.styled";

const SearchItem = ({ item: { titleAuth = "", authorweb = "" } }) => {
  return (
    <a href={`https://www.amazon.co.uk/s?k=${titleAuth}`}>
      <StyledItemWrapper>
        <StyledImageWrapper>
          <StyledImage src="" />
        </StyledImageWrapper>
        <StyledItemContent>
          <StyledTitle>{titleAuth && <h1>{titleAuth}</h1>}</StyledTitle>
          {authorweb && <StyledText>{authorweb}</StyledText>}
        </StyledItemContent>
      </StyledItemWrapper>
    </a>
  );
};

export default SearchItem;
