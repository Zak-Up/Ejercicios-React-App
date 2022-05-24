import React from 'react'
import Modal from './Modal'
import { useModal } from '../hooks/useModal'
import ContactForm from './ContactForm';

const Modals = () => {
    const [isOpenModal1, openModal1, closeModal1] = useModal(false);
    const [isOpenModal2, openModal2, closeModal2] = useModal(false);
    const [isOpenModal3, openModal3, closeModal3] = useModal(false);


    return (
        <div>
            <h2>VENTANAS MODALES</h2>
            <button onClick={openModal1}>Modal 1</button>
            <Modal isOpen={isOpenModal1} closeModal={closeModal1}> 
                <h3>Modal 1</h3>
                <p>Este es el contenido de mi modal 1</p>
                <img src='https://placeimg.com/400/400/tech' alt='Tech'></img>
            </Modal>
            <button onClick={openModal2}>Modal 2</button>
            <Modal isOpen={isOpenModal2} closeModal={closeModal2}>
                <h3>Modal 2</h3>
                <p>Este es el contenido de mi modal 2</p>
                <img src='https://placeimg.com/400/400/people' alt='Nature'></img>
            </Modal>
            <button onClick={openModal3}>Boton Contacto</button>
            <Modal isOpen={isOpenModal3} closeModal={closeModal3}>
                <ContactForm/>
            </Modal>
        </div>
    )
}

export default Modals
