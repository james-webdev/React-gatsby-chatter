import React from "react"
import styled from "styled-components"
//import Grid from "@material-ui/core/Grid"
import LogoGif from "../images/chatter_logo_loop.gif"
import LogoGif2 from "../images/chatter_logo_loop.gif"
import MEDIA from "../utils/mediatemplates"

const LogoWrapper = styled.div`
  max-width: 160px;
  margin-top: 20px;
  background-image: url('${LogoGif}');
  background-size: contain;
  width: 160px;
  height: 103px;
  ${MEDIA.PHONE`
  display: flex;
  max-width: 160px;
  order: 0;
  background-image: url('${LogoGif2}');
  background-size: contain;
  width: 160px;
  height: 103px;
  `};
`

const SiteLogo = () => <LogoWrapper />

export default SiteLogo
