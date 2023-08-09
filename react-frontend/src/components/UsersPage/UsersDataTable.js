
import { Column } from 'primereact/column';
import { DataTable } from 'primereact/datatable';
import React, { useState } from 'react';
import _ from 'lodash';
import { Button } from 'primereact/button';
import { InputSwitch } from 'primereact/inputswitch';


const UsersDataTable = ({ items, onEditRow, onRowDelete, onRowClick }) => {
    
    const pTemplate0 = (rowData, { rowIndex }) => <p >{rowData.name}</p>
    const pTemplate1 = (rowData, { rowIndex }) => <p >{rowData.email}</p>
    const tickTemplate3 = (rowData, { rowIndex }) => <i className={`pi ${rowData.isAtvice?"pi-check": "pi-times"}`}  ></i>
    const tickTemplate4 = (rowData, { rowIndex }) => <i className={`pi ${rowData.emailVerified?"pi-check": "pi-times"}`}  ></i>
    const switchTemplate5 = (rowData, { rowIndex }) => <InputSwitch checked={rowData.isBlocked}  />

    const editTemplate = (rowData, { rowIndex }) => <Button onClick={() => onEditRow(rowData, rowIndex)} icon={`pi ${rowData.isEdit ? "pi-check" : "pi-pencil"}`} className={`p-button-rounded p-button-text ${rowData.isEdit ? "p-button-success" : "p-button-warning"}`} />;
    const deleteTemplate = (rowData, { rowIndex }) => <Button onClick={() => onRowDelete(rowIndex)} icon="pi pi-times" className="p-button-rounded p-button-danger p-button-text" />;
    
    return (
        <DataTable value={items} onRowClick={onRowClick} scrollable rowHover paginator rows={10} rowClassName="cursor-pointer">
            <Column field="name" header="Email" body={pTemplate0} sortable style={{ minWidth: "8rem" }} />
            <Column field="email" header="Email" body={pTemplate1} sortable style={{ minWidth: "8rem" }} />
            <Column field="isAtvice" header="Active" body={tickTemplate3} sortable style={{ minWidth: "8rem" }} />
            <Column field="emailVerified" header="Email Verified" body={tickTemplate4} sortable style={{ minWidth: "8rem" }} />
            <Column field="isBlocked" header="Blocked" body={switchTemplate5} sortable style={{ minWidth: "8rem" }} />

            <Column header="Edit" body={editTemplate} />
            <Column header="Delete" body={deleteTemplate} />
        </DataTable>
    );
};

export default UsersDataTable;