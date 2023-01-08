import React, { useEffect, useState } from "react";
import { useFetchAllOrdersQuery } from "../../../../../store/orders/api";
import DataTable from "react-data-table-component";
import { formatDate, get_current_day_and_time } from "../../../../../helpers";

import { Link } from "react-router-dom";
export const AllOrderTable = () => {
  const [allOrders, setAllOrders] = useState([]);
  const {
    isLoading: fetchAllOrdersIsLoading,
    isError: fetchAllOrdersIsError,
    error: fetchAllOrdersError,
    data: fetchAllOrdersData,
  } = useFetchAllOrdersQuery();

  console.log({ fetchAllOrdersData });

  useEffect(() => {
    if (fetchAllOrdersData && fetchAllOrdersData.data) {
      setAllOrders(fetchAllOrdersData.data);
      console.log(allOrders);
    }
  }, [allOrders]);

  function getNumberOfPages(rowCount, rowsPerPage) {
    return Math.ceil(rowCount / rowsPerPage);
  }

  function toPages(pages) {
    const results = [];

    for (let i = 1; i < pages; i++) {
      results.push(i);
    }

    return results;
  }

  const columns = [
    {
      name: "Order Ref.",
      selector: (row) => row.ref,
      sortable: true,
    },
    {
      name: "Full Name",
      selector: (row) => row.first_name + " " + row.last_name,
      sortable: true,
    },

    {
      name: "Phone",
      selector: (row) => row.phone ?? "N/A",
      sortable: true,
    },
    {
      name: "Quantity",
      selector: (row) => row.quantity ?? "N/A",
      sortable: true,
    },
    {
      name: "Total Price",
      selector: (row) => row.total_price ?? "N/A",
      sortable: true,
    },
    {
      name: "Status",
      selector: (row) => row.status ?? "0",
      cell: (row) =>
      row.status == 1 ? (
        <span class="badge bg-success">completed</span>
      ) : (
        <span class="badge bg-danger">Inprogress</span>
      ),
      sortable: true,
    },
    {
      name: "Date",
      selector: (row) => get_current_day_and_time(row.created_at),
      sortable: true,
    },
    {
      name: "",
      button: true,
      selector: (row) => row.id,
      cell: (row) => (
        <Link to={`/admin-dashboard/orders/${row.ref}`} className="product-eye">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-eye"
            viewBox="0 0 16 16"
          >
            <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z" />
            <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z" />
          </svg>
        </Link>
      ),
    },
  ];

  // RDT exposes the following internal pagination properties
  const BootyPagination = ({
    rowsPerPage,
    rowCount,
    onChangePage,
    onChangeRowsPerPage, // available but not used here
    currentPage,
  }) => {
    const handleBackButtonClick = () => {
      onChangePage(currentPage - 1);
    };

    const handleNextButtonClick = () => {
      onChangePage(currentPage + 1);
    };

    const handlePageNumber = (e) => {
      onChangePage(Number(e.target.value));
    };

    const pages = getNumberOfPages(rowCount, rowsPerPage);
    const pageItems = toPages(pages);
    const nextDisabled = currentPage === pageItems.length;
    const previosDisabled = currentPage === 1;

    return (
      <nav>
        <ul className="pagination">
          <li className="page-item">
            <button
              className="page-link"
              onClick={handleBackButtonClick}
              disabled={previosDisabled}
              aria-disabled={previosDisabled}
              aria-label="previous page"
            >
              Previous
            </button>
          </li>
          {pageItems.map((page) => {
            const className =
              page === currentPage ? "page-item active" : "page-item";

            return (
              <li key={page} className={className}>
                <button
                  className="page-link"
                  onClick={handlePageNumber}
                  value={page}
                >
                  {page}
                </button>
              </li>
            );
          })}
          <li className="page-item">
            <button
              className="page-link"
              onClick={handleNextButtonClick}
              disabled={nextDisabled}
              aria-disabled={nextDisabled}
              aria-label="next page"
            >
              Next
            </button>
          </li>
        </ul>
      </nav>
    );
  };

  const BootyCheckbox = React.forwardRef(({ onClick, ...rest }, ref) => (
    <div className="form-check">
      <input
        htmlFor="booty-check"
        type="checkbox"
        className="form-check-input"
        ref={ref}
        onClick={onClick}
        {...rest}
      />
      <label className="form-check-label" id="booty-check" />
    </div>
  ));

  return (
    <>
      <DataTable
        columns={columns}
        data={
          fetchAllOrdersData && fetchAllOrdersData.data
            ? fetchAllOrdersData.data
            : []
        }
        defaultSortFieldID={1}
        pagination
        paginationComponent={BootyPagination}
        selectableRows
        selectableRowsComponent={BootyCheckbox}
      />
    </>
  );
};
