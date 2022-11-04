import { Button, ButtonProps, TextField } from '@mui/material'
import { purple } from '@mui/material/colors'
import Head from 'next/head'
import Image from 'next/image'
import styled from 'styled-components'
import LoginContainer from '../../styles/login/LoginContainer'
import LoginFormContainer from '../../styles/login/LoginFormContainer'
import LoginHeader from '../../styles/login/LoginHeaderContainer'
import LoginInputContainer from '../../styles/login/LoginInputContainer'
import MainContainer from '../../styles/login/MainContainer'
import TextContainer from '../../styles/text/TextContainer'

const ColorButton = styled(Button)<ButtonProps>(({ theme }) => ({
  color: "white",
  backgroundColor: "#281B53",
  '&:hover': {
    backgroundColor: "#302457",
  },
}));

const LoginTextField = styled(TextField)({
  '& label.Mui-focused': {
    color: 'white',
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: 'white',
    color: 'white',
  },
  '& .MuiInputBase-input': {
    color: 'white',
  },
  '.MuiFormLabel-root': {
    color: 'white',
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: 'white',
      color: 'white',
    },
    '&:hover fieldset': {
      borderColor: 'white',
    },
    '&.Mui-focused fieldset': {
      borderColor: 'white',
      color: 'white',
    },
  },
});


export default function Home() {
  return (
    <MainContainer>
        <LoginContainer>
            <LoginHeader>
              <TextContainer>SPEAKUP</TextContainer>         
            </LoginHeader>

            <LoginFormContainer>

              <LoginInputContainer>
                <LoginTextField id="login-user" label="Usuario" variant="filled" />
              </LoginInputContainer>

              <LoginInputContainer>
                <LoginTextField id="login-password" type="password" label="Senha" variant="filled" />
              </LoginInputContainer>

              <LoginInputContainer>
                <ColorButton type="submit"  variant="contained">Acessar</ColorButton>
              </LoginInputContainer>  

            </LoginFormContainer>
            
        </LoginContainer>
    </MainContainer>
  )
}
