import React from 'react';
import { IonIcon } from '@ionic/react';
import { star, starOutline } from 'ionicons/icons';

export interface JPRankingProps {
  numero: number;
}

const JPRanking: React.SFC<JPRankingProps> = ({ numero }) => {
  return (
    <div className="w-100 d-flex ion-justify-content-start">
      {[1, 2, 3, 4, 5].map((n, i) => {
        if (n <= numero) {
          return (
            <IonIcon
              key={i}
              icon={star}
              color="warning"
              style={{ fontSize: 18 }}
              className="mr-1"
            />
          );
        } else {
          return (
            <IonIcon
              key={i}
              icon={starOutline}
              color="warning"
              style={{ fontSize: 18 }}
              className="mr-1"></IonIcon>
          );
        }
      })}
    </div>
  );
};

export default JPRanking;
