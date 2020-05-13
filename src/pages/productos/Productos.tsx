import React from 'react';
import { IonPage, IonContent } from '@ionic/react';
import JPHeader from '../../components/JPHeader';

export interface ProductosProps {}

const Productos: React.SFC<ProductosProps> = () => {
  return (
    <IonPage>
      <JPHeader titulo="Productos" />
      <IonContent>
        <h1>Productos</h1>
      </IonContent>
    </IonPage>
  );
};

export default Productos;
