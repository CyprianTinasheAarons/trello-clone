import { useState } from 'react';
import { NewItemFormContainer, NewItemButton, NewItemInput } from './styles';

type NewItemFormProps = {
    onAdd(text: string): void;
};

export const NewItemForm = ({ onAdd }: NewItemFormProps) => {
    const [text, setText] = useState('');

    const handleAdd = () => {
        onAdd(text);
        setText('');
    };

    return (
        <NewItemFormContainer>
            <NewItemInput
                value={text}
                onChange={e => setText(e.target.value)}
            />
            <NewItemButton onClick={handleAdd}>Create</NewItemButton>
        </NewItemFormContainer>
    );
};
