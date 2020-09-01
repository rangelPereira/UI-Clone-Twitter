import React from 'react';

import { 
    Container,
    Retweeted,
    RocketseatIcon,
    Body,
    Avatar,
    Content,
    Header,
    Dot,
    Description,
    ImageContent,
    Icons,
    Status,
    CommentIcon,
    RetwwetIcon,
    LikeIcon,
} from './styles';

const Tweet: React.FC = () => {
  return(
    <Container>
        <Retweeted>
            <RocketseatIcon />
            Você retwetou
        </Retweeted>

        <Body>
            <Avatar />
            <Content>
                <Header>
                    <strong>Rangel Pereira</strong>
                    <span>@rangel_pereira</span>
                    <Dot/>
                    <time>27 de jun</time>
                </Header>
          {/* eslint-disable-next-line jsx-a11y/accessible-emoji */}
          <Description>Foquete não tem ré 🚀</Description>

            <ImageContent />

            <Icons>
                <Status>
                    <CommentIcon />
                    18
                </Status>

                <Status>
                    <RetwwetIcon />
                    18
                </Status>

                <Status>
                    <LikeIcon />
                    999
                </Status>
            </Icons>
            </Content>

        </Body>

    </Container>
  );
}

export default Tweet;