import React, { useEffect, useState } from "react";
import {
  currency_formatter,
  formatDate,
  format_calendar_date,
  get_current_day_and_time,
} from "../../../../../helpers";

import DataTable from "react-data-table-component";
import { Link } from "react-router-dom";
import { useFetchAllAppointmentQuery } from "../../../../../store/appointment/api";

export const AppointmentTable = () => {
  const [products, setproducts] = useState([]);
  const {
    isLoading: fetchappointmentIsLoading,
    isError: fetchappointmentIsError,
    error: fetchappointmentError,
    data: fetchappointmentData,
  } = useFetchAllAppointmentQuery();

  console.log({ fetchappointmentData });

  useEffect(() => {
    if (fetchappointmentData && fetchappointmentData.data) {
      setproducts(fetchappointmentData.data);
    }
  }, [products]);


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
      name: "First Name",
      selector: (row) => row.first_name,
      cell: (row) => (
        row.first_name ? row.first_name : "N/A"
      ),
      sortable: true,
    },
    {
        name: "Last Name",
        selector: (row) => row.last_name,
        cell: (row) => (
            row.last_name ? row.last_name : "N/A"
        ),
        sortable: true,
      },

        {
      name: "Phone",
      selector: (row) => row.phone,
      cell: (row) => (
        row.phone ? row.phone : "N/A"
      ),
      sortable: true,
    },
 
    
    {
      name: "Email",
      selector: (row) => row.email,
      cell: (row) => (
        row.email ? row.email : "N/A"
      ),
      sortable: true,
    },

       
    {
        name: "Time",
        selector: (row) => row.time,
        cell: (row) => (
          row.time ? row.time : "N/A"
        ),
        sortable: true,
      },

    {
      name: "Date Added",
      selector: (row) => get_current_day_and_time(row.created_at),
      sortable: true,
    },

    {
        name: "Status",
        selector: (row) => row.status,
        cell: (row) =>
        row.status == 1 ? (
          <span class="badge bg-success">Active</span>
        ) : (
          <span class="badge bg-danger">Inactive</span>
        ),
        sortable: true,
  
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
          fetchappointmentData && fetchappointmentData.data
            ? fetchappointmentData.data
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
