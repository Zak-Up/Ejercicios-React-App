import React from 'react'
import { useForm } from '../hooks/useForm';
import Loader  from '../components/Loader';
import Message from './Message';

const initialForm = {
    name: "",
    email: "",
    subject: "",
    comments: ""
};

const validationsForm = (form) => {
    let errors = {};
    let regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
    let regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;
    let regexComments = /^.{1,255}$/;

    if(!form.name.trim()){
        errors.name = 'El campo "Nombre" esta vacio';
    } else if (!regexName.test(form.name.trim())){
        errors.name = 'El campo "Nombre" solo acepta letras y espacios en blanco';
    }

    if(!form.email.trim()){
        errors.email = 'El campo "Email" esta vacio';
    } else if (!regexEmail.test(form.email.trim())){
        errors.email = 'El campo "Email" no es válido';
    }

    if(!form.subject.trim()){
        errors.subject = 'El campo "Asunto" esta vacio';
    } else if (!regexComments.test(form.subject.trim())){
        errors.subject = 'El campo "Asunto" es requerido';
    }

    return errors;
};

let styleError = {
    fontWeight: "bold",
    color: "#dc3545"
}


const ContactForm = () => {
    const {
        form,
        errors,
        loading,
        response,
        handleChange,
        handleBlur,
        handleSubmit} = useForm(initialForm, validationsForm);
    return (
        <div>
            <h2>FORMULARIO DE CONTACTO</h2>
            <form onSubmit={handleSubmit}>
                <input 
                    type='text' 
                    name='name' 
                    placeholder='Escribe tu nombre' 
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={form.name}
                    required>
                </input>

                {errors.name && <p style={styleError}>{errors.name}</p>}

                <input 
                    type='email' 
                    name='email' 
                    placeholder='Escribe tu email' 
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={form.email}
                    required>
                </input>

                {errors.email && <p style={styleError}>{errors.email}</p>}

                <input 
                    type='text' 
                    name='subject' 
                    placeholder='Asunto' 
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={form.subject}
                    required>
                </input>

                {errors.subject && <p style={styleError}>{errors.subject}</p>}

                <textarea
                    cols='50'
                    rows='5'
                    name='comments' 
                    placeholder='Escribe tus comentarios' 
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={form.comments}>
                </textarea>

                <input type='submit' value='Enviar'/>
            </form>
            {loading && <Loader/>}
            {
                response && <Message 
                            msg='Los datos han sido enviados'
                            bgColor='#198754'
                            />
            }
        </div>
    )
}

export default ContactForm
