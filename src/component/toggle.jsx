import React, { useState } from 'react';
import { Switch } from 'antd';

const ToggleSwitch = () => {
  const [checked, setChecked] = useState(false);

  return (
    <div>
      <Switch
        checked={checked}
        onChange={() => setChecked(!checked)}
      />
    </div>
  );
};

export default ToggleSwitch;
