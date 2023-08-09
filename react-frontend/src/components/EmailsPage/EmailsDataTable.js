
import { Column } from 'primereact/column';
import { DataTable } from 'primereact/datatable';
import React, { useState } from 'react';
import _ from 'lodash';
import { Button } from 'primereact/button';
import { InputSwitch } from 'primereact/inputswitch';


const EmailsDataTable = ({ items, onEditRow, onRowDelete, onRowClick }) => {
    
    const pTemplate0 = (rowData, { rowIndex }) => <p >{rowData.fromEmail}</p>
    const pTemplate1 = (rowData, { rowIndex }) => <p >{rowData.toEmail}</p>
    const pTemplate2 = (rowData, { rowIndex }) => <p >{rowData.subject}</p>
    const pTemplate3 = (rowData, { rowIndex }) => <p >{rowData.body}</p>
    const pTemplate4 = (rowData, { rowIndex }) => <p >{rowData.time}</p>
    const switchTemplate5 = (rowData, { rowIndex }) => <InputSwitch checked={rowData.sentStatus}  />
    const switchTemplate6 = (rowData, { rowIndex }) => <InputSwitch checked={rowData.readStatus}  />

    const editTemplate = (rowData, { rowIndex }) => <Button onClick={() => onEditRow(rowData, rowIndex)} icon={`pi ${rowData.isEdit ? "pi-check" : "pi-pencil"}`} className={`p-button-rounded p-button-text ${rowData.isEdit ? "p-button-success" : "p-button-warning"}`} />;
    const deleteTemplate = (rowData, { rowIndex }) => <Button onClick={() => onRowDelete(rowIndex)} icon="pi pi-times" className="p-button-rounded p-button-danger p-button-text" />;
    
    return (
        <DataTable value={items} onRowClick={onRowClick} scrollable rowHover paginator rows={10} rowClassName="cursor-pointer">
            <Column field="fromEmail" header="From Email" body={pTemplate0} sortable style={{ minWidth: "8rem" }} />
            <Column field="toEmail" header="To Email" body={pTemplate1} sortable style={{ minWidth: "8rem" }} />
            <Column field="subject" header="Subject Email" body={pTemplate2} sortable style={{ minWidth: "8rem" }} />
            <Column field="body" header="Body" body={pTemplate3} sortable style={{ minWidth: "8rem" }} />
            <Column field="time" header="Time" body={pTemplate4} sortable style={{ minWidth: "8rem" }} />
            <Column field="sentStatus" header="Sent Status" body={switchTemplate5} sortable style={{ minWidth: "8rem" }} />
            <Column field="readStatus" header="Read Status" body={switchTemplate6} sortable style={{ minWidth: "8rem" }} />

            <Column header="Edit" body={editTemplate} />
            <Column header="Delete" body={deleteTemplate} />
        </DataTable>
    );
};

export default EmailsDataTable;