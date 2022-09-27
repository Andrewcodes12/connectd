import React, {createContext, useState, useContext} from 'react'

export const ModalContext = createContext()

export const useModal = () => useContext(ModalContext)

export const ModalProvider = ({children}) => {
    const [modal, setModal] = useState(false)

    const toggleModal = () => {
        setModal(!modal)
    }

    return (
        <ModalContext.Provider value={{modal, toggleModal}}>
        {children}
        </ModalContext.Provider>
    )
}


