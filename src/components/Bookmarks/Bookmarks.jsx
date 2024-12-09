import PropTypes from "prop-types";
import Bookmark from "../Bookmark/Bookmark";

const Bookmarks = ({ bookmarks }) => {
  return (
    <div className="w-1/3 bg-sky-200">
      <h2 className="text-3xl text-center p-4">This is bookmarks: {bookmarks.length}</h2>
      {bookmarks.map((bookmark) => (
        <Bookmark key={bookmark.id} bookmark={bookmark}></Bookmark>
      ))}
    </div>
  );
};

Bookmarks.propTypes = {
  bookmarks: PropTypes.array,
};

export default Bookmarks;
