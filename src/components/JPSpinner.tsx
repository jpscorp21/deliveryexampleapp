import React from 'react';
import { IonSpinner } from '@ionic/react';

const spinnerStyle = {
  width: '40px',
  height: '40px',
  position: 'absolute',
  top: '50%',
};

export interface JPSpinnerProps {
  color?: string;
}

const JPSpinner: React.SFC<JPSpinnerProps> = ({ color }) => {
  color = color || 'primary';

  return (
    <div className="ion-justify-content-center" style={{ display: 'flex' }}>
      <IonSpinner color={color} style={spinnerStyle}></IonSpinner>
    </div>
  );
};

export default JPSpinner;
