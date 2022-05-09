import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchBookList, getAllBooks } from "../../features/books/bookSlice";
import Input from "../Input";
import Popup from "../Popup";
import { StyledHeader, StyledPopupWrapper } from "./Header.styled";

const Header = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const dispatch = useDispatch();
  const books = useSelector(getAllBooks);

  const handleSearch = (e) => {
    if (e.target.value) {
      setIsSearchOpen(true);
      dispatch(fetchBookList(e.target.value));

      return;
    }

    setIsSearchOpen(false);
  };

  return (
    <StyledHeader>
      <Input onChange={handleSearch} placeholder="Quick search..." />
      <StyledPopupWrapper>
        {isSearchOpen && books && <Popup data={books} />}
      </StyledPopupWrapper>
    </StyledHeader>
  );
};

export default Header;
