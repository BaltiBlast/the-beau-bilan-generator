// ----------------------------------------------- //
// -- IMPORTS -- //
// NPM
import { useState } from 'react';

// Components
import SidebarForm from './SidebarForm/SidebarForm.js';

// Utils
import { bilanType } from '../../utils/frontData.js';

// Style
import './sidebar.css';

// ----------------------------------------------- //
// -- COMPONENT -- //
const Sidebar = () => {
  // Hooks
  const [studentName, setStudentName] = useState('');
  const [bilanTypeSelected, setBilanTypeSelected] = useState('fondation');

  // ----------------------------------------------- //
  // Functions
  const handleChangeBilanType = (evt) => {
    setBilanTypeSelected(evt.target.value);
  };

  // ----------------------------------------------- //
  // COMPONENT'S PROPS
  const SidebarFormProps = {
    bilanTypeSelected: bilanTypeSelected,
  };

  return (
    <div className='sidebar'>
      <input></input>
      {/* <select onChange={(e) => handleChangeBilanType(e)}>
        {bilanType.map((_fa) => {
          const { id, categorieName, categorieValue } = _fa;

          return (
            <option
              key={id}
              value={categorieValue}>
              {categorieName}
            </option>
          );
        })}
      </select>
      <SidebarForm {...SidebarFormProps} /> */}
    </div>
  );
};

export default Sidebar;
