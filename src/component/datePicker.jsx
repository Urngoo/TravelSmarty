import React from 'react';
import { DatePicker, Space, Tooltip, theme } from 'antd';

const DatePickerComponent = () => {
  const { token } = theme.useToken();

  const customStyle = {
    border: `1px solid ${token.colorPrimary}`,
    borderRadius: '50%',
    backgroundColor: token.colorPrimary,
    color: '#fff',
  };

  const cellRender = (current, info) => {
    if (info.type !== 'date') {
      return info.originNode;
    }

    const isFirstDay = current.date() === 1;

    return (
      <Tooltip title={isFirstDay ? 'This is the 1st day of the month' : ''}>
        <div className="ant-picker-cell-inner" style={isFirstDay ? customStyle : {}}>
          {current.date()}
        </div>
      </Tooltip>
    );
  };

  return (
    <Space size={12} direction="vertical">
      {/* Single Date Picker */}
      <DatePicker cellRender={cellRender} />

      {/* Range Date Picker */}
      <DatePicker.RangePicker cellRender={cellRender} />
    </Space>
  );
};

export default DatePickerComponent;
