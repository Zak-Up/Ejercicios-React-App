import React, { useEffect, useState } from 'react';
import { helpHttp } from '../helpers/helpHttp';
import CrudForm from './CrudForm';
import CrudTable from './CrudTable';
import Loader from './Loader';
import Message from './Message';

const CrudApi = () => {
    const [db, setDb] = useState(null);
    const [dataToEdit, setDataToEdit] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    let api = helpHttp();
    let url = "http://localhost:5000/series";

    useEffect(() => {
        setLoading(true);
        api.get(url).then((res) => {
            //console.log(res);
            if(!res.err){
                setError(null);
                setDb(res);
            } else {
                setDb([]);
                setError(res)
            }
            setLoading(false);
        });
    }, [url]);

    const createData = (data) => {
        data.id = Date.now();
        //console.log(data);

        let options = {body: data, 
            headers: {"content-type":"application/json"}};
        api
        .post(url, options)
        .then((res) => {
            console.log(res);
            if(!res.err){
                setDb([...db, res]);
            } else {
                setError(res);
            }
        });
    };

    const updateData = (data) => {
        let endpoint = `${url}/${data.id}`;
        
        let options = {body: data, 
            headers: {"content-type":"application/json"}};
        api
        .put(endpoint, options)
        .then((res) => {
            if(!res.err){
                let newData = db.map((el) => (el.id === data.id ? data : el));
                setDb(newData);
            } else {
                setError(res);
            }
        });
    };

    const deleteData = (id) => {
        let isDelete = window.confirm(`¿Estas seguro de eliminar el registro con el id '${id}'?`);

        if(isDelete){
            let endpoint = `${url}/${id}`;
            let options = {
                headers: {"content-type":"application/json"},
            };

            api
            .del(endpoint, options)
            .then((res) => {
                if(!res.err){
                    let newData = db.filter(el => el.id !== id);
                    setDb(newData);
                } else {
                    setError(res);
                }
            });
        } else {
            return;
        }
    };

    return (
        <div>
            <h2>CRUD APP</h2>
            <CrudForm 
            createData={createData} 
            updateData={updateData} 
            dataToEdit={dataToEdit} 
            setDataToEdit={setDataToEdit}
            />
            {loading && <Loader/>}
            {
                error && <Message 
                        msg={`Error ${error.status}: ${error.statusText}`} 
                        bgColor="#dc3545"
                        />
            }
            {db && <CrudTable 
            data={db}
            setDataToEdit={setDataToEdit}
            deleteData = {deleteData}
            />} 
        </div>
    )
}

export default CrudApi
