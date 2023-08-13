import React, { useState, useEffect } from "react";
import { useTable, usePagination, useGlobalFilter } from "react-table";

function DataTable() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [totalPages, setTotalPages] = useState(0);
  const [pageIndex, setPageIndex] = useState(0);
  const [pageSize, setPageSizes] = useState(10);
  const [globalFilter, setGlobalFilters] = useState("");
  const [statusFilter, setStatusFilter] = useState("");
  const [startDateFilter, setStartDateFilter] = useState("");
  const [endDateFilter, setEndDateFilter] = useState("");

  useEffect(() => {
    // Panggil API untuk mengambil data dari server
    fetchData();
  }, [pageIndex, pageSize, globalFilter, statusFilter, startDateFilter, endDateFilter]);

  const fetchData = async () => {
    setLoading(true);

    // Lakukan panggilan API untuk mengambil data dari server
    const response = await fetch(
      // Endpoint API dengan query parameters untuk server-side pagination, pencarian, dan filter
      `/api/data?pageSize=${pageSize}&pageIndex=${pageIndex}&filter=${globalFilter}&status=${statusFilter}&startDate=${startDateFilter}&endDate=${endDateFilter}`
    );
    const result = await response.json();

    // Update data, total halaman, dan berhenti loading
    setData(result.data);
    setTotalPages(result.totalPages);
    setLoading(false);
  };

  const columns = [
    // Definisikan kolom-kolom tabel sesuai dengan struktur data Anda
    {
      Header: "ID",
      accessor: "id",
    },
    {
      Header: "Title",
      accessor: "title",
    },
    {
      Header: "Content",
      accessor: "content",
    },
    {
      Header: "Status",
      accessor: "status",
    },
    {
      Header: "Publication Date",
      accessor: "publicationDate",
    },
    // Tambahkan kolom lain sesuai kebutuhan Anda
  ];

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    nextPage,
    previousPage,
    canNextPage,
    canPreviousPage,
    pageOptions,
    state,
    setPageSize,
    setGlobalFilter,
  } = useTable(
    {
      columns,
      data,
      initialState: { pageIndex: 0, pageSize: 10 },
      manualPagination: true,
      manualGlobalFilter: true,
      pageCount: totalPages,
    },
    useGlobalFilter,
    usePagination
  );

  const { globalFilter: tableGlobalFilter } = state;

  return (
    <div>
      <div>
        <input
          type="text"
          value={tableGlobalFilter || ""}
          onChange={(e) => setGlobalFilter(e.target.value)}
          placeholder="Search..."
        />
        <select
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
        >
          <option value="">All Status</option>
          <option value="Publish">Publish</option>
          <option value="Draft">Draft</option>
        </select>
        <input
          type="date"
          value={startDateFilter}
          onChange={(e) => setStartDateFilter(e.target.value)}
        />
        <input
          type="date"
          value={endDateFilter}
          onChange={(e) => setEndDateFilter(e.target.value)}
        />
      </div>

      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()}>{column.render("Header")}</th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.map((row) => {
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>

      <div>
        <button onClick={() => previousPage()} disabled={!canPreviousPage}>
          Previous
        </button>
        <button onClick={() => nextPage()} disabled={!canNextPage}>
          Next
        </button>
        <span>
          Page{" "}
          <strong>
            {pageIndex + 1} of {pageOptions.length}
          </strong>
        </span>
        <span>
          | Go to page:{" "}
          <input
            type="number"
            defaultValue={pageIndex + 1}
            onChange={(e) => {
              const page = e.target.value ? Number(e.target.value) - 1 : 0;
              setPageIndex(page);
            }}
            style={{ width: "50px" }}
          />
        </span>
        <select
          value={pageSize}
          onChange={(e) => {
            setPageSize(Number(e.target.value));
            setPageIndex(0);
          }}
        >
          {[10, 20, 30, 40, 50].map((size) => (
            <option key={size} value={size}>
              Show {size}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default DataTable;
