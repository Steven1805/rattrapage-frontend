import PropTypes from 'prop-types';

const OutputText = ({ title, lines }) => {
  return (
    <div>
      <p style={{marginTop:"0px"}}>!!  {title}  !!</p> {/* Title passed as a prop */}
      
      {/* Render all lines, mapping over the array */}
      {lines && lines.map((line, index) => (
        <p key={index}>{line}</p>
      ))}
    </div>
  );
};

// Define PropTypes to enforce the types of props
OutputText.propTypes = {
  title: PropTypes.string.isRequired,  // Title should be a required string
  lines: PropTypes.arrayOf(PropTypes.string).isRequired,  // Lines should be an array of strings
};

export default OutputText;
