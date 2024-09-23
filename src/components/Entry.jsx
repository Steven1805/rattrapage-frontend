import { useState } from 'react';

const Entry = () => {
  const [selectedPatrimoine, setSelectedPatrimoine] = useState('Crésus');

  const [checkboxes, setCheckboxes] = useState({
    agregat: true,
    tresorerie: true,
    immobilisations: true,
    obligations: true,
  });

  const [dateRange, setDateRange] = useState({
    startDate: '2024-07-01',
    endDate: '2024-07-16',
  });

  const handleSelectChange = (e) => {
    setSelectedPatrimoine(e.target.value);
  };

  const handleCheckboxChange = (e) => {
    setCheckboxes({
      ...checkboxes,
      [e.target.name]: e.target.checked,
    });
  };

  const handleDateChange = (e) => {
    setDateRange({
      ...dateRange,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      <div style={{marginLeft: "10px", marginBottom:"10px", marginTop:"5px"}}>
        <label htmlFor="patrimoine">Patrimoine</label>
        <select
          id="patrimoine"
          value={selectedPatrimoine}
          onChange={handleSelectChange}
          style={{marginLeft:"8px"}}
        >
          <option value="Crésus">Crésus</option>
          <option value="Option2">Option 2</option>
          <option value="Option3">Option 3</option>
        </select>
      </div>

      <div style={{marginLeft: "10px", marginBottom:"10px"}}>
        <label>
          <input
            type="checkbox"
            name="agregat"
            checked={checkboxes.agregat}
            onChange={handleCheckboxChange}
          />
          Agrégat
        </label>
        <label style={{marginLeft:"8px"}}>
          <input
            type="checkbox"
            name="tresorerie"
            checked={checkboxes.tresorerie}
            onChange={handleCheckboxChange}
          />
          Trésorerie
        </label>
        <label style={{marginLeft:"8px"}}>
          <input
            type="checkbox"
            name="immobilisations"
            checked={checkboxes.immobilisations}
            onChange={handleCheckboxChange}
          />
          Immobilisations
        </label>
        <label style={{marginLeft:"8px"}}>
          <input
            type="checkbox"
            name="obligations"
            checked={checkboxes.obligations}
            onChange={handleCheckboxChange}
          />
          Obligations
        </label>
      </div>

      <div style={{marginLeft: "10px", marginBottom:"10px"}}>
        <label>
          De
          <input
            type="date"
            name="startDate"
            value={dateRange.startDate}
            onChange={handleDateChange}
            style={{marginLeft:"5px"}}
          />
        </label>
        <label style={{marginLeft:"5px"}}>
          À
          <input
            type="date"
            name="endDate"
            value={dateRange.endDate}
            onChange={handleDateChange}
            style={{marginLeft:"5px"}}
          />
        </label>
      </div>
    </div>
  );
};

export default Entry;
