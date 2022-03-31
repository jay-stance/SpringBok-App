import DataTable from "react-data-table-component";
import DataTableExtensions from "react-data-table-component-extensions";
import "react-data-table-component-extensions/dist/index.css";

const NoData = () => {
  return <div>No Data to be displayed</div>
}


const Table = ({ data, columns, title }) => {
    // A super simple expandable component.
    const ExpandedComponent = ({ data }) => <pre>{JSON.stringify(data, null, 2)}</pre>;


    return (
      <div>
        <DataTableExtensions exportHeaders columns={columns} data={data}>
        <DataTable
          // dense
          title={title}
          highlightOnHover
          noDataComponent={NoData}
          columns={columns}
          data={data}

          onColumnOrderChange={cols => console.log(cols)}

          selectableRows
          expandableRowsComponent={ExpandedComponent}
          onRowClicked={(row, event) => {
            console.log(row)
          }}

          pagination
        />
        </DataTableExtensions>
      </div>
    )

} 

export default Table;