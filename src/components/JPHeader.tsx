import React from 'react';
import {
  IonHeader,
  IonToolbar,
  IonButtons,
  IonMenuButton,
  IonTitle,
} from '@ionic/react';

export interface HeaderProps {
  titulo?: string;
  children?: any;
}

const JPHeader: React.SFC<HeaderProps> = ({ titulo, children }) => {
  return (
    <IonHeader>
      <IonToolbar>
        <IonButtons slot="start">
          <IonMenuButton />
        </IonButtons>
        {titulo && <IonTitle>{titulo}</IonTitle>}
        {children}
      </IonToolbar>
    </IonHeader>
  );
};

export default JPHeader;
