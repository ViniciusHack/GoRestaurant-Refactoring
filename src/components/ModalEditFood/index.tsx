import { useRef } from 'react';
import { FiCheckSquare } from 'react-icons/fi';

import { Form } from './styles';
import { Modal } from '../Modal';
import { Input } from '../Input';
import { IFood } from '../../pages/Dashboard';

interface ModalEditFoodProps {
  setIsOpen: () => void;
  isOpen: boolean;
  editingFood: Record<string, any>;
  handleUpdateFood: (data: IFood) => void;
}

export function ModalEditFood({setIsOpen, editingFood, handleUpdateFood, isOpen}: ModalEditFoodProps) {
  const formRef = useRef(null);

  // constructor(props) {
  //   super(props);

  //   this.formRef = createRef()
  // }

  const handleSubmit = async (data: IFood) => {

    handleUpdateFood(data);
    setIsOpen();
  };

    return (
      <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
        <Form ref={formRef} onSubmit={handleSubmit} initialData={editingFood}>
          <h1>Editar Prato</h1>
          <Input name="image" placeholder="Cole o link aqui" />

          <Input name="name" placeholder="Ex: Moda Italiana" />
          <Input name="price" placeholder="Ex: 19.90" />

          <Input name="description" placeholder="Descrição" />

          <button type="submit" data-testid="edit-food-button">
            <div className="text">Editar Prato</div>
            <div className="icon">
              <FiCheckSquare size={24} />
            </div>
          </button>
        </Form>
      </Modal>
    );
  }