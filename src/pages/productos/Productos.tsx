import React, { useState, useEffect } from 'react';
import {
  IonPage,
  IonContent,
  IonButtons,
  IonSearchbar,
  isPlatform,
} from '@ionic/react';
import JPHeader from '../../components/JPHeader';
import api from '../../config/api';
import ProductosLista from './ProductosLista';

export interface ProductosProps {}

const Productos: React.SFC<ProductosProps> = () => {
  const [productos, setProductos] = useState([]);

  const searchClass = isPlatform('ios') ? 'mt-1' : 'mt-3';

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
      <JPHeader>
        <IonSearchbar
          placeholder="Buscar producto"
          className={searchClass}
          mode="ios"
        />
        <IonButtons slot="end"></IonButtons>
      </JPHeader>
      <IonContent color="light" className="ion-padding-vertical">
        <ProductosLista data={productos} />
      </IonContent>
    </IonPage>
  );
};

export default Productos;
