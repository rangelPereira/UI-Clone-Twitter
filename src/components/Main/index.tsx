import React from 'react';

import ProfilePage from '../ProfilePage';

import { 
    Container,
    Header,
    BackIcon,
    ProfileInfo,
    ButtomMenu,
    HomeIcon,
    SearchIcon,
    BellIcon,
    EmailIcon,
} from './styles';

const Main: React.FC = () => {
  return(
    <Container>
        <Header>
            <button>
                <BackIcon />
            </button>

            <ProfileInfo>
                <strong>Rangel Pereira</strong>
                <span>321 Tweets</span>
            </ProfileInfo>
        </Header>

        <ProfilePage />

        <ButtomMenu>
            <HomeIcon className="active" />
            <SearchIcon />
            <BellIcon />
            <EmailIcon />
        </ButtomMenu>
    </Container>
  );
}

export default Main;