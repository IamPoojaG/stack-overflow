import React from 'react';

const Person = ({
  Children,
  backgroundColor,

  color,
  px,
  py,
  borderRadiuses,
  fontSize,
  cursor,
}) => {
  const style = {
    backgroundColor,
    padding: `${py} ${px}`,
    color: color || 'black',
    borderRadiuses,
    fontSize,
    textAlign: 'center',
    cursor: cursor || null,
  };
  return <div style={style}>{Children}</div>;
};

export default Person;
