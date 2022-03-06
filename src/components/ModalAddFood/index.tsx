import { useRef } from 'react';
import { FiCheckSquare } from 'react-icons/fi';

import { Form } from './styles';
import { Input } from '../Input';
import { Modal } from '../Modal'

interface ModalAddFoodProps {
  setIsOpen: () => void;
  handleAddFood: (data: DataProps) => void;
  isOpen: boolean;
}

export interface DataProps {
  name: string;
  image: string;
  description: string;
  price: string;
}

export function ModalAddFood({setIsOpen, handleAddFood, isOpen}: ModalAddFoodProps) {

  const formRef = useRef(null)

  // constructor(props) {
  //   super(props); 

  //   this.formRef = createRef();
  // }

  const handleSubmit = async (data: DataProps) => {

    handleAddFood(data);
    setIsOpen();
  };

    return (
      <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
        <Form ref={formRef} onSubmit={handleSubmit}>
          <h1>Novo Prato</h1>
          <Input name="image" placeholder="Cole o link aqui" />

          <Input name="name" placeholder="Ex: Moda Italiana" />
          <Input name="price" placeholder="Ex: 19.90" />

          <Input name="description" placeholder="Descrição" />
          <button type="submit" data-testid="add-food-button">
            <p className="text">Adicionar Prato</p>
            <div className="icon">
              <FiCheckSquare size={24} />
            </div>
          </button>
        </Form>
      </Modal>
    );
  }
