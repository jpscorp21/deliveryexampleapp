import React, { useEffect, useState } from 'react';
import api from '../../config/api';
import JPHeader from '../../components/JPHeader';
import {
  IonPage,
  IonContent,
  IonCol,
  IonRow,
  IonButton,
  IonIcon,
  IonButtons,
} from '@ionic/react';
import { heart, heartOutline, shareSocial, cart } from 'ionicons/icons';
import noimagen from '../../assets/no-imagen.jpg';
import JPRanking from '../../components/JPRanking';
import JPHeaderBack from '../../components/JPHeaderBack';

export interface ProductosDetalleProps {
  match: any;
}

const ProductosDetalle: React.SFC<ProductosDetalleProps> = ({ match }) => {
  const [producto, setProducto] = useState<any>({});

  useEffect(() => {
    fetchProducto();

    // eslint-disable-next-line
  }, []);

  const fetchProducto = async () => {
    const { data } = await api.get('/productos/' + match.params.id);
    if (data) {
      setProducto(data);
    }
  };

  if (!producto) {
    return <h1>Cargando...</h1>;
  }

  return (
    <IonPage>
      <JPHeaderBack titulo="Detalles" defaultHref="/productos">
        <IonButtons slot="end">
          <IonButton>
            {producto.esFavorito ? (
              <IonIcon color="danger" slot="icon-only" icon={heart}></IonIcon>
            ) : (
              <IonIcon
                color="danger"
                slot="icon-only"
                icon={heartOutline}></IonIcon>
            )}
          </IonButton>
          <IonButton>
            <IonIcon
              color="primary"
              slot="icon-only"
              icon={shareSocial}></IonIcon>
          </IonButton>
        </IonButtons>
      </JPHeaderBack>
      <IonContent>
        <IonRow>
          <IonCol
            size="12"
            sizeSm="10"
            sizeMd="8"
            className="m-auto ion-justify-content-center flex-column ion-text-center">
            <h1 className="mt-5 pt-3 px-2 mb-4 ion-hide-sm-down">
              {producto.titulo}
            </h1>
            <IonRow className="mt-sm-4">
              <IonCol size="12" sizeSm="6">
                <img src={producto.imagen || noimagen} alt={producto.titulo} />
              </IonCol>
              <IonCol size="12" sizeSm="6">
                <div className="ion-text-left ml-2">
                  <h2 className="mb-0 mt-0">Gs. {producto.precio}</h2>
                  <p className="mt-2 mb-0">{producto.titulo}</p>
                  <p className="mt-2 mb-0" style={{ color: '#aaa' }}>
                    {producto.vendido} vendidos
                  </p>
                  <p className="font-weight-bold mt-2">Envío gratis</p>
                  <IonRow className="p-0 m-0">
                    <IonCol
                      className="p-0 m-0"
                      size="12"
                      class="flex-row ion-justify-content-center w-100">
                      <div className="w-100 d-flex ion-justify-content-start">
                        <IonButton fill="outline" disabled={producto.enCarrito}>
                          <IonIcon
                            icon={cart}
                            slot="icon-only"
                            className="mr-2"></IonIcon>
                          Añadir al carrito
                        </IonButton>
                      </div>
                    </IonCol>
                  </IonRow>
                  <IonRow className="p-0 m-0">
                    <IonCol
                      className="p-0 m-0"
                      size="12"
                      class="flex-row ion-justify-content-center w-100">
                      <div className="w-100 d-flex ion-justify-content-start mt-2">
                        <JPRanking numero={2} />
                      </div>
                    </IonCol>
                  </IonRow>
                </div>
              </IonCol>
            </IonRow>
          </IonCol>
        </IonRow>
      </IonContent>
    </IonPage>
  );
};

export default ProductosDetalle;
