
const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className="flex justify-center mt-4">
      <nav aria-label="Pagination">
        <ul className="flex list-style-none">
          {/* Nút Previous */}
          <li className="mx-1">
            <button
              onClick={() => onPageChange(currentPage - 1)}
              disabled={currentPage === 1} // Vô hiệu hóa nếu là trang đầu tiên
              className="px-3 py-1 border border-gray-300 rounded-md text-sm font-medium bg-white"
            >
              Previous
            </button>
          </li>

          {pages.map((page) => (
            <li key={page} className="mx-1">
              <button
                onClick={() => onPageChange(page)}
                className={`px-3 py-1 border border-gray-300 rounded-md text-sm font-medium ${
                  page === currentPage ? 'bg-gray-200' : 'bg-white'
                }`}
              >
                {page}
              </button>
            </li>
          ))}

          {/* Nút Next */}
          <li className="mx-1">
            <button
              onClick={() => onPageChange(currentPage + 1)}
              disabled={currentPage === totalPages} // Vô hiệu hóa nếu là trang cuối cùng
              className="px-3 py-1 border border-gray-300 rounded-md text-sm font-medium bg-white"
            >
              Next
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

  
  export default Pagination;
  