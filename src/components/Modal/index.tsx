import { ReactNode, useEffect, useState } from 'react';
import ReactModal from 'react-modal';

interface ModalProps {
  isOpen: boolean;
  children: ReactNode;
  setIsOpen: (value: boolean) => void;
}

export function Modal({isOpen ,setIsOpen, children}: ModalProps) {
  const [modalStatus, setModalStatus] = useState(isOpen)
  const [isOpenState, setIsOpenState] = useState(false)

  useEffect(() => {
    if(isOpenState !== isOpen) {
      setModalStatus(isOpen)
    }
  }, [isOpenState, isOpen])

  // componentDidUpdate(prevProps) {
  //   if (prevProps.isOpen !== isOpen) {
  //     console.log(this.props)
  //     this.setState({ modalStatus: isOpen })
  //   }
  // }
  return (
    <ReactModal
      shouldCloseOnOverlayClick={!false}
      onRequestClose={() => setIsOpen(false)}
      isOpen={modalStatus}
      ariaHideApp={false}
      style={{
        content: {
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)',
          background: '#F0F0F5',
          color: '#000000',
          borderRadius: '8px',
          width: '736px',
          border: 'none',
        },
        overlay: {
          backgroundColor: '#121214e6',
        },
      }}
    >
      {children}
    </ReactModal>
  );
}

