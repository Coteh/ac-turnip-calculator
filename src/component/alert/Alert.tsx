import React from 'react';
import PropTypes from 'prop-types';

export default function Alert(props: any) {
  const { type, message } = props;
  const style = {
    success: {
      color: 'green',
      width: '270px',
      backgroundColor: '#c0ffb9',
      margin: '10px auto',
      padding: '10px 15px',
      borderRadius: '5px',
      fontWeight: '600',
    },
    error: {
      color: 'red',
      width: '250px',
      backgroundColor: '#ffc7c7',
      margin: '10px auto',
      padding: '10px 15px',
      borderRadius: '5px',
      fontWeight: '600',
    },
  } as any;

  return <div style={style[type]}>{message}</div>;
}

Alert.propTypes = {
  type: PropTypes.string,
  message: PropTypes.string,
};
