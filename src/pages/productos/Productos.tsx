import React, { useState, useEffect } from 'react';
import {
  IonPage,
  IonContent,
  IonButtons,
  IonButton,
  IonIcon,
  IonList,
  IonGrid,
} from '@ionic/react';
import JPHeader from '../../components/JPHeader';
import { cart } from 'ionicons/icons';
import api from '../../config/api';
import ProductosLista from './ProductosLista';

export interface ProductosProps {}

const Productos: React.SFC<ProductosProps> = () => {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    fetchProductos();

    // eslint-disable-next-line
  }, []);

  const fetchProductos = async () => {
    const { data } = await api.get('/productos');
    setProductos(data);
  };

  return (
    <IonPage>
      <JPHeader titulo="Productos">
        <IonButtons slot="end">
          <IonButton>
            <IonIcon icon={cart} slot="icon-only"></IonIcon>
          </IonButton>
        </IonButtons>
      </JPHeader>
      <IonContent color="light" className="ion-padding-vertical">
        <ProductosLista data={productos} />
      </IonContent>
    </IonPage>
  );
};

export default Productos;
