const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const generatePages = () => {
    const pages = [];

    if (totalPages <= 5) {
      // Hiển thị tất cả trang nếu tổng số trang nhỏ hơn hoặc bằng 5
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      // Hiển thị trang đầu tiên
      pages.push(1);

      if (currentPage > 3) {
        pages.push('...');
      }

      // Hiển thị các trang xung quanh trang hiện tại (trang hiện tại và 2 trang trước, 2 trang sau)
      const startPage = Math.max(2, currentPage - 1);
      const endPage = Math.min(totalPages - 1, currentPage + 1);

      for (let i = startPage; i <= endPage; i++) {
        pages.push(i);
      }

      if (currentPage < totalPages - 2) {
        pages.push('...');
      }

      // Hiển thị trang cuối cùng
      pages.push(totalPages);
    }

    return pages;
  };

  const pages = generatePages();

  return (
    <div className="flex justify-center mt-4">
      <nav aria-label="Pagination">
        <ul className="flex list-style-none">
          {/* Nút Previous */}
          <li className="mx-1">
            <button
              onClick={() => onPageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className="px-3 py-1 border border-gray-300 rounded-md text-sm font-medium bg-white"
            >
              Previous
            </button>
          </li>

          {/* Hiển thị các trang */}
          {pages.map((page, index) => (
            <li key={index} className="mx-1">
              {page === '...' ? (
                <span className="px-3 py-1 text-sm font-medium">...</span>
              ) : (
                <button
                  onClick={() => onPageChange(page)}
                  className={`px-3 py-1 border border-gray-300 rounded-md text-sm font-medium ${
                    page === currentPage ? 'bg-gray-200' : 'bg-white'
                  }`}
                >
                  {page}
                </button>
              )}
            </li>
          ))}

          {/* Nút Next */}
          <li className="mx-1">
            <button
              onClick={() => onPageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
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
  