import { Button } from "primereact/button";
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Link, useHistory, useParams } from "react-router-dom";
import client from "../../services/restClient";


const SingleClientsPage = (props) => {
    const history = useHistory();
    const urlParams = useParams();
    const [data, setData] = useState();
    
    useEffect(() => {
        //on mount
        client
            .service("clients")
            .get(urlParams.singleClientsId, { query: { $populate: [] }})
            .then((res) => {
                setData(res || {});
                
            })
            .catch((error) => {
                console.log({ error });
                props.alert({ title: "Clients", type: "error", message: error.message || "Failed get clients" });
            });
    }, []);

    const goBack = () => {
        history.replace("/clients");
    };
    return (
        <div className="col-12 flex flex-column align-items-center">
            <div className="col-10">
                <div className="flex align-items-center justify-content-start">
                    <Button className="p-button-text" icon="pi pi-chevron-left" onClick={() => goBack()} />
                    <h3 className="m-0">Clients</h3>
                </div>
                <p>clients/{urlParams.singleClientsId}</p>
            </div>
            <div className="grid col-10">
                <div className="card w-full">
            <label className="text-sm">Name</label>
                    <p className="m-0" >{data?.name}</p>
                    <label className="text-sm">emails</label>
                    <p className="m-0" >{data?.emails}</p>
                    <label className="text-sm">phones</label>
                    <p className="m-0" >{data?.phones}</p>
                    <label className="text-sm">preferences</label>
                    <p className="m-0" >{data?.preferences}</p>
                    <label className="text-sm">logins</label>
                    <p className="m-0" >{data?.logins}</p>
            
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

export default connect(mapState, mapDispatch)(SingleClientsPage);
