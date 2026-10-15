const Book = ({ ab, handleStatusUpdate, handleDeleteBook }) => {
    const isRead = ab.status === "read";

    return (
        <div className="border rounded-lg p-4 mb-3 bg-white">

            <h3 className="text-lg font-bold text-blue-700">
                📘 {ab.title}
            </h3>

            <p className="text-gray-600 mb-2">
                Author: {ab.author}
            </p>

            <p className="text-sm mb-3">
                Status: {isRead ? "Read" : "Unread"}
            </p>

            <div className="flex gap-2">

                <button
                    type="button"
                    onClick={() =>
                        handleStatusUpdate(
                            ab._id,
                            isRead ? "unread" : "read"
                        )
                    }
                    className="bg-blue-100 text-blue-700 px-3 py-2 rounded hover:bg-blue-200"
                >
                    Mark as {isRead ? "Unread" : "Read"}
                </button>

                <button
                    type="button"
                    onClick={() => handleDeleteBook(ab._id)}
                    className="bg-red-100 text-red-600 px-3 py-2 rounded hover:bg-red-200"
                >
                    Delete
                </button>

            </div>
        </div>
    );
};

export default Book;