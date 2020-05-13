import React from 'react';
import {
  IonHeader,
  IonToolbar,
  IonButtons,
  IonMenuButton,
  IonTitle,
} from '@ionic/react';

export interface HeaderProps {
  titulo: string;
}

const JPHeader: React.SFC<HeaderProps> = ({ titulo }) => {
  return (
    <IonHeader>
      <IonToolbar>
        <IonButtons slot="start">
          <IonMenuButton />
        </IonButtons>
        <IonTitle>{titulo}</IonTitle>
      </IonToolbar>
    </IonHeader>
  );
};

export default JPHeader;
