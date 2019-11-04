import React from "react"
import styled from "styled-components"
import Grid from "@material-ui/core/Grid"
import SiteLogo from "../components/logo"
import Button from "./button"
import { Link } from "gatsby"
import MEDIA from "../utils/mediatemplates"

const NavWrapper = styled.div`
  margin: 0 auto;
  height: 330px;
  .button {
    ${MEDIA.PHONE`
    position: relative;
    left: 65px;
  `};
  }
`
const BurgerWrapper = styled.div`
  border: solid 1px black;
  ${MEDIA.TABLET`
    display: none;
  `};
`

const Nav = () => (
  <NavWrapper>
    <Grid
      container
      style={
        {
          //border: "solid 1px black",
        }
      }
      direction="row"
      justify="space-between"
      alignItems="center"
    >
      <Grid
        item
        sm={3}
        lg={3}
        style={
          {
            //border: "solid 1px black",
            //paddingLeft: "120px",
          }
        }
        justify="center"
      >
        <SiteLogo />
      </Grid>
    </Grid>
  </NavWrapper>
)

export default Nav

//<Grid item lg={7}>
//        <Grid
//          container
//          direction="row"
//          justify="space-between"
//          alignItems="center"
//          lg={"6"}
//          justify="space-around"
//        >
//          <BurgerWrapper>
//            <Grid container>
//              <Grid
//                item
//                lg={"auto"}
//                style={
//                  {
//                    //border: "solid 1px black",
//                  }
//                }
//              >
//                <Link
//                  style={{
//                    textDecoration: "none",
//                    fontSize: "14px",
//                    textAlign: "center",
//                    //border: "solid 1px black",
//                  }}
//                  to="#about"
//                >
//                  About Chatter
//                </Link>
//              </Grid>
//
//              <Grid item lg={"auto"}>
//                <Link
//                  style={{
//                    textDecoration: "none",
//                    fontSize: "14px",
//                    //border: "solid 1px black",
//                  }}
//                  to="/about/"
//                >
//                  Introducing Products
//                </Link>
//              </Grid>
//              <Grid
//                item
//                lg={"auto"}
//                style={
//                  {
//                    //border: "solid 1px black",
//                  }
//                }
//              >
//                <Link
//                  style={{
//                    textDecoration: "none",
//                    fontSize: "14px",
//                    //border: "solid 1px black",
//                  }}
//                  to="/contact/"
//                >
//                  Keep up to date
//                </Link>
//              </Grid>
//            </Grid>
//          </BurgerWrapper>
//
//          <Grid
//            className="button"
//            item
//            lg={"auto"}
//            style={{
//              marginLeft: "1px",
//              marginRight: "90px",
//              //border: "solid 1px black",
//            }}
//          >
//            <Button> Chat to us </Button>
//          </Grid>
//        </Grid>
//      </Grid>
