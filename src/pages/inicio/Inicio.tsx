import React from 'react';
import { IonPage, IonContent } from '@ionic/react';
import JPHeader from '../../components/JPHeader';

export interface InicioProps {}

const Inicio: React.SFC<InicioProps> = () => {
  return (
    <IonPage>
      <JPHeader titulo="Inicio" />
      <IonContent>
        <h1>Inicio</h1>
      </IonContent>
    </IonPage>
  );
};

export default Inicio;
