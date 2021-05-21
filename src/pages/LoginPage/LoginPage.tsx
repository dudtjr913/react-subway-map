import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Input, Button } from '../../components';
import * as Styled from './LoginPage.styles';
import { ReactComponent as EmailIcon } from '../../assets/icons/envelope-solid.svg';
import { ReactComponent as KeyIcon } from '../../assets/icons/key-solid.svg';
import ROUTES from '../../constants/routes';

const LoginPage = () => {
  return (
    <Styled.LoginPage>
      <Styled.CardWrapper>
        <Card>
          <Styled.Form>
            <Styled.HeaderText>로그인</Styled.HeaderText>
            <Styled.FormItem>
              <Input icon={<EmailIcon />} placeholder="이메일을 입력해주세요" />
            </Styled.FormItem>
            <Styled.FormItem>
              <Input icon={<KeyIcon />} placeholder="비밀번호를 입력해주세요" />
            </Styled.FormItem>
            <Styled.FormItem>
              <Styled.LoginButton>
                <Button fullWidth variant="primary">
                  로그인
                </Button>
              </Styled.LoginButton>
              <Link to={ROUTES.SIGNUP}>아직 회원이 아니신가요?</Link>
            </Styled.FormItem>
          </Styled.Form>
        </Card>
      </Styled.CardWrapper>
    </Styled.LoginPage>
  );
};

export default LoginPage;
