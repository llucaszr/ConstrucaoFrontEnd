export default function DataTable({ title, columns, data }) {
  return (
    <section className="flex flex-col my-6 bg-white rounded-lg overflow-hidden shadow-sm">
      {title && (
        <h2 className="bg-gray-300 font-bold text-base p-3 text-gray-900">
          {title}
        </h2>
      )}
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="bg-gray-300">
              {columns.map((column, index) => (
                <th
                  key={index}
                  className={`p-3 font-bold text-gray-900 ${
                    column.align === "center" ? "text-center" : "text-left"
                  }`}
                >
                  {column.label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((row, rowIndex) => (
              <tr
                key={rowIndex}
                className={`hover:bg-gray-50 ${
                  rowIndex < data.length - 1 ? "border-b border-gray-200" : ""
                }`}
              >
                {columns.map((column, colIndex) => (
                  <td
                    key={colIndex}
                    className={`p-3 text-gray-800 ${
                      colIndex < columns.length - 1
                        ? "border-r border-gray-200"
                        : ""
                    } ${column.align === "center" ? "text-center" : "text-left"} ${
                      column.bold ? "font-bold" : ""
                    }`}
                  >
                    {row[column.key]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
