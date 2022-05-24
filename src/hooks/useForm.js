import { useState } from 'react';
import {helpHttp}  from '../helpers/helpHttp';

export const useForm = (initialForm, validateForm) => {
    const [form, setForm] = useState(initialForm);
    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);
    const [response, setResponse] = useState(null);

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    };

    const handleBlur = (e) => {
        handleChange(e);
        setErrors(validateForm(form));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setErrors(validateForm(form));

        if(Object.keys(errors).length === 0){
            alert("Enviando datos");
            setLoading(true);
            helpHttp()
                .post("https://formsubmit.co/ajax/andresjr195@hotmail.com", {
                    body: form,
                    headers: {
                        "Content-type": "application/json",
                        Accept: "application/json"
                    }
                })
                .then((res) => {
                    setLoading(false);
                    setResponse(true);
                    setForm(initialForm);
                    setTimeout(() => setResponse(false), 3000);
                });
        } else {
            return;
        }
    };

    return{
        form,
        errors,
        loading,
        response,
        handleChange,
        handleBlur,
        handleSubmit
    }
};