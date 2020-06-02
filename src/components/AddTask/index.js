import React from 'react';

import { Fieldset } from './AddTask.style';

export default function AddTask({ onEdit }) {
  return (
    <Fieldset>
      <input type="text" placeholder="Add todo..." onChange={event => onEdit(event)} />
    </Fieldset>
  )
}
