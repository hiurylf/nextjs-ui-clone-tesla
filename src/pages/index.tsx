import Head from 'next/head';
import { useState } from 'react';
import { Container, Spacer } from '../styles/pages/Home';

import DefaultOverlayContent from '../components/DefaultOverlayContent';
import { ModelSection, ModelsWrapper } from '../components/Model';
import UniqueOverlay from '../components/UniqueOverlay';

const Home: React.FC = () => {
   const [models, setModels] = useState([
      {
         name: 'Model One',
         bgUrlDesktop:
            'https://tesla-cdn.thron.com/delivery/public/image/tesla/676da95d-942e-414c-8534-f1832f0d4ced/bvlatuR/std/3296x1798/ms-homepage-desktop',
         bgUrlMobile:
            'https://tesla-cdn.thron.com/delivery/public/image/tesla/ba3606ef-ce2d-41e4-90aa-bb13d767bb1a/bvlatuR/std/1000x1576/ms-homepage-mobile',
      },
      {
         name: 'Model Two',
         bgUrlDesktop:
            'https://tesla-cdn.thron.com/delivery/public/image/tesla/8e2df1b9-a4bf-4eb9-beec-2cf5cc77fca0/bvlatuR/std/2880x2400/Desktop-ModelY',
         bgUrlMobile:
            'https://tesla-cdn.thron.com/delivery/public/image/tesla/3304be3b-dd0a-4128-9c26-eb61c0b98d61/bvlatuR/std/800x2100/Mobile-ModelY',
      },
      {
         name: 'Model Three',
         bgUrlDesktop:
            'https://tesla-cdn.thron.com/delivery/public/image/tesla/676da95d-942e-414c-8534-f1832f0d4ced/bvlatuR/std/3296x1798/ms-homepage-desktop',
         bgUrlMobile:
            'https://tesla-cdn.thron.com/delivery/public/image/tesla/ba3606ef-ce2d-41e4-90aa-bb13d767bb1a/bvlatuR/std/1000x1576/ms-homepage-mobile',
      },
      {
         name: 'Model Four',
         bgUrlDesktop:
            'https://tesla-cdn.thron.com/delivery/public/image/tesla/8e2df1b9-a4bf-4eb9-beec-2cf5cc77fca0/bvlatuR/std/2880x2400/Desktop-ModelY',
         bgUrlMobile:
            'https://tesla-cdn.thron.com/delivery/public/image/tesla/3304be3b-dd0a-4128-9c26-eb61c0b98d61/bvlatuR/std/800x2100/Mobile-ModelY',
      },
      {
         name: 'Model Five',
         bgUrlDesktop:
            'https://tesla-cdn.thron.com/delivery/public/image/tesla/676da95d-942e-414c-8534-f1832f0d4ced/bvlatuR/std/3296x1798/ms-homepage-desktop',
         bgUrlMobile:
            'https://tesla-cdn.thron.com/delivery/public/image/tesla/ba3606ef-ce2d-41e4-90aa-bb13d767bb1a/bvlatuR/std/1000x1576/ms-homepage-mobile',
      },
   ]);

   return (
      <Container>
         <Head>
            <title>Ui Clone Tesla</title>
            <link rel="icon" href="/favicon.ico" />
         </Head>

         <ModelsWrapper>
            <div>
               {models.map(model => (
                  <ModelSection
                     key={model.name}
                     className="colored"
                     modelName={model.name}
                     bgUrlDesktop={model.bgUrlDesktop}
                     bgUrlMobile={model.bgUrlMobile}
                     overlayNode={
                        <DefaultOverlayContent
                           label={model.name}
                           description="Order Online for Delivery"
                        />
                     }
                  />
               ))}
            </div>

            <Spacer />

            <UniqueOverlay />
         </ModelsWrapper>
      </Container>
   );
};

export default Home;
