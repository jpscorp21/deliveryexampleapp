import React from 'react';
import { IonPage, IonContent } from '@ionic/react';
import JPHeader from '../../components/JPHeader';

export interface PedidosProps {}

const Pedidos: React.SFC<PedidosProps> = () => {
  return (
    <IonPage>
      <JPHeader titulo="Pedidos" />
      <IonContent>
        <h1>Pedidos</h1>
      </IonContent>
    </IonPage>
  );
};

export default Pedidos;
