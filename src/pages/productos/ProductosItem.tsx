import React from 'react';
import { IonCard, IonCardContent } from '@ionic/react';
import noimagen from '../../assets/no-imagen.jpg';

export interface ProductosItemProps {
  item: any;
}

const ProductosItem: React.SFC<ProductosItemProps> = ({ item }) => {
  return (
    <IonCard className="m-1 mb-2" routerLink={'/productos/detalle/' + item.id}>
      <img
        style={{ width: '100%', height: 'auto' }}
        src={item.imagen || noimagen}
        alt={item.titulo}
      />
      <IonCardContent className="p-2">
        <p style={{ height: '35px' }} className="mb-2">
          {item.titulo}
        </p>
        <p
          style={{ fontWeight: 'bolder', fontSize: '17px', color: 'black' }}
          className="m-0 p-0">
          Gs. {item.precio}
        </p>
        <p
          style={{ fontWeight: 'bolder', fontSize: '14px', color: 'black' }}
          className="m-0 p-0">
          {item.cantidad} Unidades
        </p>
      </IonCardContent>
    </IonCard>
  );
};

export default ProductosItem;
