import { Button } from "primereact/button";
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Link, useHistory, useParams } from "react-router-dom";
import client from "../../services/restClient";


const SingleSubscribersPage = (props) => {
    const history = useHistory();
    const urlParams = useParams();
    const [data, setData] = useState();
    
    useEffect(() => {
        //on mount
        client
            .service("subscribers")
            .get(urlParams.singleSubscribersId, { query: { $populate: [] }})
            .then((res) => {
                setData(res || {});
                
            })
            .catch((error) => {
                console.log({ error });
                props.alert({ title: "Subscribers", type: "error", message: error.message || "Failed get subscribers" });
            });
    }, []);

    const goBack = () => {
        history.replace("/subscribers");
    };
    return (
        <div className="col-12 flex flex-column align-items-center">
            <div className="col-10">
                <div className="flex align-items-center justify-content-start">
                    <Button className="p-button-text" icon="pi pi-chevron-left" onClick={() => goBack()} />
                    <h3 className="m-0">Subscribers</h3>
                </div>
                <p>subscribers/{urlParams.singleSubscribersId}</p>
            </div>
            <div className="grid col-10">
                <div className="card w-full">
            <label className="text-sm">Endpoint</label>
                    <p className="m-0" >{data?.endpoint}</p>
                    <label className="text-sm">Expiration Time</label>
                    <p className="m-0" >{data?.expirationTime}</p>
            
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

export default connect(mapState, mapDispatch)(SingleSubscribersPage);
