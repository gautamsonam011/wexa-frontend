interface Props {

  headers: string[];

  rows: any[];
}

export default function DataTable({
  headers,
  rows,
}: Props) {

  return (
    <div className="overflow-x-auto rounded-2xl bg-white shadow-sm">

      <table className="w-full">

        <thead className="border-b bg-slate-100">

          <tr>

            {headers.map((header) => (

              <th
                key={header}
                className="p-4 text-left"
              >
                {header}
              </th>

            ))}

          </tr>

        </thead>

        <tbody>

          {rows.map((row, index) => (

            <tr
              key={index}
              className="border-b"
            >

              {Object.values(row).map(
                (value: any, idx) => (

                  <td
                    key={idx}
                    className="p-4"
                  >
                    {value}
                  </td>

                )
              )}

            </tr>

          ))}

        </tbody>

      </table>
    </div>
  );
}