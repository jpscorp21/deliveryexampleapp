import React from 'react';
import { IonPage, IonContent } from '@ionic/react';
import JPHeader from '../../components/JPHeader';

export interface AcercaDeProps {}

const AcercaDe: React.SFC<AcercaDeProps> = () => {
  return (
    <IonPage>
      <JPHeader titulo="Acerca de" />
      <IonContent>
        <h1>Acerca de</h1>
      </IonContent>
    </IonPage>
  );
};

export default AcercaDe;
