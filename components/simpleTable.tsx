"use client";
import React from "react";
import { createServer } from "miragejs"
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, getKeyValue } from "@nextui-org/react";

const rows = [
    { key: '1', date: '2021-10-01', reference_id: '123456', to: 'John Doe', transaction_type: 'Credit', amount: '$100.00' },
    { key: '2', date: '2021-10-02', reference_id: '123457', to: 'Jane Doe', transaction_type: 'Debit', amount: '$50.00' },
    { key: '3', date: '2021-10-03', reference_id: '123458', to: 'John Doe', transaction_type: 'Credit', amount: '$75.00' },
    { key: '4', date: '2021-10-04', reference_id: '123459', to: 'Jane Doe', transaction_type: 'Debit', amount: '$25.00' },
    { key: '5', date: '2021-10-05', reference_id: '123460', to: 'John Doe', transaction_type: 'Credit', amount: '$125.00' },
];

createServer({
    routes() {
        this.get("/api/transaction-history", () => ({ data: rows }))
    },
})

export default function SimpleTable({
  columns,
}:{
  columns: { key: string, label: string }[],
}) {

    const [data, setData] = React.useState<Array<{key : string, label: string}>>([]);
    React.useEffect(() => {
        fetch("/api/transaction-history")
            .then((response) => response.json())
            .then((json) => setData(json.data));
    }, []);

    return (
        <Table aria-label="Example table with dynamic content " className="w-max">
            <TableHeader>
                {columns.map((column) =>
                    <TableColumn key={column.key}>{column.label}</TableColumn>
                )}
            </TableHeader>
            <TableBody>
                {data.map((row) =>
                    <TableRow key={row.key}>
                        {(columnKey) => <TableCell>{getKeyValue(row, columnKey)}</TableCell>}
                    </TableRow>
                )}
            </TableBody>
        </Table>
    );
}