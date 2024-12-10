import PropTypes from "prop-types";
import Bookmark from "../Bookmark/Bookmark";

const Bookmarks = ({ bookmarks, readingTime }) => {
  return (
    <div className="w-1/3">
      <h2 className="text-center font-bold text-2xl rounded-md mb-6 bg-slate-300 py-6">
        Spent time on read :{readingTime}
      </h2>

      <div className="bg-sky-200 rounded-md pb-10">
        <h2 className="text-3xl font-bold text-center p-4">
          This is bookmarks: {bookmarks.length}
        </h2>
        {bookmarks.map((bookmark) => (
          <Bookmark key={bookmark.id} bookmark={bookmark}></Bookmark>
        ))}
      </div>
    </div>
  );
};

Bookmarks.propTypes = {
  bookmarks: PropTypes.array,
  readingTime: PropTypes.number,
};

export default Bookmarks;
