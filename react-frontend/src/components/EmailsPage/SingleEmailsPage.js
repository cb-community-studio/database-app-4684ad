import { Button } from "primereact/button";
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Link, useHistory, useParams } from "react-router-dom";
import client from "../../services/restClient";
import { InputSwitch } from 'primereact/inputswitch';
import { InputSwitch } from 'primereact/inputswitch';

const SingleEmailsPage = (props) => {
    const history = useHistory();
    const urlParams = useParams();
    const [data, setData] = useState();
    
    useEffect(() => {
        //on mount
        client
            .service("emails")
            .get(urlParams.singleEmailsId, { query: { $populate: [] }})
            .then((res) => {
                setData(res || {});
                
            })
            .catch((error) => {
                console.log({ error });
                props.alert({ title: "Emails", type: "error", message: error.message || "Failed get emails" });
            });
    }, []);

    const goBack = () => {
        history.replace("/emails");
    };
    return (
        <div className="col-12 flex flex-column align-items-center">
            <div className="col-10">
                <div className="flex align-items-center justify-content-start">
                    <Button className="p-button-text" icon="pi pi-chevron-left" onClick={() => goBack()} />
                    <h3 className="m-0">Emails</h3>
                </div>
                <p>emails/{urlParams.singleEmailsId}</p>
            </div>
            <div className="grid col-10">
                <div className="card w-full">
            <label className="text-sm">From Email</label>
                    <p className="m-0" >{data?.fromEmail}</p>
                    <label className="text-sm">To Email</label>
                    <p className="m-0" >{data?.toEmail}</p>
                    <label className="text-sm">Subject Email</label>
                    <p className="m-0" >{data?.subject}</p>
                    <label className="text-sm">Body</label>
                    <p className="m-0" >{data?.body}</p>
                    <label className="text-sm">Time</label>
                    <p className="m-0" >{data?.time}</p>
                    <label className="text-sm">Sent Status</label>
                    <InputSwitch checked={rowData.{data?.sentStatus}} onChange={ (e) => setValByKey("{data?.sentStatus}", e.value)}  />
                    <label className="text-sm">Read Status</label>
                    <InputSwitch checked={rowData.{data?.readStatus}} onChange={ (e) => setValByKey("{data?.readStatus}", e.value)}  />
            
                </div>
            </div>
        </div>
    );
};

const mapState = (state) => {
    return {};
};
const mapDispatch = (dispatch) => ({
    alert: (data) => dispatch.toast.alert(data),
    //
});

export default connect(mapState, mapDispatch)(SingleEmailsPage);
