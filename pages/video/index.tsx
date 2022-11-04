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
import BottomBar from '../../styles/video/BottomBar'
import VideoContainer from '../../styles/video/VideoContainer'
import VideoMainContainer from '../../styles/video/VideoMainContainer'


export default function Home() {
  return (
    <MainContainer>
      <VideoMainContainer>

            <TextContainer>SPEAKUP</TextContainer>         



        <VideoContainer>
          
        </VideoContainer>

        <BottomBar>
          
        </BottomBar>

      </VideoMainContainer>
    </MainContainer>
  )
}
