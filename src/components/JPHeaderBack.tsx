import React from 'react';
import {
  IonHeader,
  IonToolbar,
  IonButtons,
  IonMenuButton,
  IonTitle,
  IonBackButton,
} from '@ionic/react';

export interface HeaderBackProps {
  titulo?: string;
  children?: any;
  defaultHref: string;
}

const JPHeaderBack: React.SFC<HeaderBackProps> = ({
  titulo,
  children,
  defaultHref,
}) => {
  return (
    <IonHeader>
      <IonToolbar>
        <IonButtons slot="start">
          <IonBackButton defaultHref={defaultHref} />
        </IonButtons>
        {titulo && <IonTitle>{titulo}</IonTitle>}
        {children}
      </IonToolbar>
    </IonHeader>
  );
};

export default JPHeaderBack;
