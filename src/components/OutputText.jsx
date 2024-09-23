import PropTypes from 'prop-types';

const OutputText = ({ title, lines }) => {
  return (
    <div>
      <p style={{marginTop:"0px"}}>!!  {title}  !!</p>
      
      {lines && lines.map((line, index) => (
        <p key={index}>{line}</p>
      ))}
    </div>
  );
};

// Define PropTypes to enforce the types of props
OutputText.propTypes = {
  title: PropTypes.string.isRequired, 
  lines: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default OutputText;
