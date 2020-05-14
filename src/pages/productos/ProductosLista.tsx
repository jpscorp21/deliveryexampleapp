import React from 'react';
import { IonRow, IonCol, IonList, IonGrid } from '@ionic/react';
import ProductosItem from './ProductosItem';

export interface ProductosListaProps {
  data: any;
}

const ProductosLista: React.SFC<ProductosListaProps> = ({ data }) => {
  return (
    <IonList className="p-0 m-0">
      <IonGrid className="p-0 m-0">
        <IonRow className="px-xl-5 mx-xl-5 mt-xl-3">
          {data.map((prod: any) => {
            return (
              <IonCol size="6" sizeSm="4" key={prod.id} className="p-0 m-0">
                <ProductosItem key={prod.id} item={prod}></ProductosItem>
              </IonCol>
            );
          })}
        </IonRow>
      </IonGrid>
    </IonList>
  );
};

export default ProductosLista;
