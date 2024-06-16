import React, { useState } from "react";
import Form from "./components/Form";
import "./App.css";
const App = () => {
  const [formType, setFormType] = useState(null);

  return (
    <div>
      <div className="btn-container">
        <button onClick={() => setFormType("Form A")} className="btn">
          Form A
        </button>
        <button onClick={() => setFormType("Form B")} className="btn">
          Form B
        </button>
      </div>

      {formType && <Form formType={formType} />}
    </div>
  );
};

export default App;
