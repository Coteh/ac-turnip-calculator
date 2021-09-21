import React from 'react';
import PropTypes from 'prop-types';

export default function ErrorAlert(props: any) {
  const { message } = props;
  const style = {
    color: 'red',
    width: '300px',
    backgroundColor: '#ffc7c7',
    margin: '10px auto',
    padding: '10px 15px',
    borderRadius: '5px',
    fontWeight: '600',
  } as any;

  return (
    <div data-testid="ErrorAlert" style={style}>
      {message}
    </div>
  );
}

ErrorAlert.propTypes = {
  message: PropTypes.string,
};
