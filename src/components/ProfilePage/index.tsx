import React from 'react';

import Feed from '../Feed';

import { 
  Container,
  Banner,
  Avatar,
  ProfileData,
  LocationIcon,
  CakeIcon,
  Followage,
  EditButton,
} from './styles';

const ProfilePage: React.FC = () => {
  return(
    <Container>
        <Banner>
          <Avatar />
        </Banner>

        <ProfileData>
         <EditButton outlined>Editar perfil</EditButton> 

          <h1>Rangel Pereira</h1>
          <h2>@rangel_pereira</h2>

          <p>Developer at <a href="http://localhost:3000/">@rangel_pereira</a></p>

          <ul>
            <li>
              <LocationIcon />
              São Paulo, Brasil
            </li>
            <li>
              <CakeIcon />
              Nascido(a) em 08 de janeiro de 1999
            </li>
          </ul>

          <Followage>
            <span>
              Seguindo <strong>94</strong>
            </span>
            <span>
              <strong>672 </strong>seguidores 
            </span>
          </Followage>
        </ProfileData>

        <Feed />
    </Container>
  );
};

export default ProfilePage;