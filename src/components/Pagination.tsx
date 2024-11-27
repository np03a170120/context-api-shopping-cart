type PaginationProps = {
  totalProducts: number;
  productsPerPage: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
  currentPage: number;
};

const Pagination = ({
  totalProducts,
  productsPerPage,
  setCurrentPage,
  currentPage,
}: PaginationProps) => {
  let pages = [];

  for (let i = 1; i <= Math.ceil(totalProducts / productsPerPage); i++) {
    pages.push(i);
  }

  return (
    <div className="flex gap-2">
      {pages.map((page, index) => {
        return (
          <div key={index}>
            <button
              className={`${page === currentPage ? "bg-gray-900 text-white" : ""} p-1 px-3 rounded-md`}
              onClick={() => setCurrentPage(page)}
            >
              {page}
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default Pagination;
