import '../sidebar.css';

const SidebarForm = (props) => {
  return <div className='sidebar-form'>{<p>{props.bilanTypeSelected}</p>}</div>;
};

export default SidebarForm;
