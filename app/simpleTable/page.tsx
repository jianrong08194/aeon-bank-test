import React from "react";

import SimpleTable from "../../components/simpleTable";

const columns = [
    { key: 'date', label: 'Date' },
    { key: 'reference_id', label: 'Reference ID' },
    { key: 'to', label: 'To' },
    { key: 'transaction_type', label: 'Transaction Type' },
    { key: 'amount', label: 'Amount' },
];

export default function SimpleTablePage() {
    return (
        <SimpleTable columns={columns}  />
    );
}