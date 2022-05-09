import React from "react";
import { useSelector } from "react-redux";

import SearchItem from "./SearchItem";
import LoadingSpinner from "./LoadingSpinner";
import { StyledPopupBox } from "./Popup.styled";

const Popup = ({ data }) => {
  const { isLoading } = useSelector((state) => state.books);

  const renderContent = () => {
    if (!isLoading) {
      if (!data.work) return <h3>No results found</h3>;

      return Array.isArray(data.work) ? (
        data.work.map((item) => <SearchItem item={item} key={item.workid} />)
      ) : (
        <SearchItem item={data.work} />
      );
    }

    return <LoadingSpinner />;
  };

  return <StyledPopupBox>{renderContent()}</StyledPopupBox>;
};

export default Popup;
