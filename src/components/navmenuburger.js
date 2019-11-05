import React from "react"
import styled from "styled-components"
import Grid from "@material-ui/core/Grid"
import { Link } from "gatsby"
import MEDIA from "../utils/mediatemplates"


const NavMenuBurger = () => (

<Grid item lg={7}>
        <Grid
          container
          direction="row"
          justify="space-between"
          alignItems="center"
          lg={"6"}
          justify="space-around"
        >
        
            <Grid container>
              <Grid
                item
                lg={"auto"}
                style={
                  {
                    //border: "solid 1px black",
                  }
                }>
             <Link
                  style={{
                    textDecoration: "none",
                    fontSize: "14px",
                    textAlign: "center",
                    //border: "solid 1px black",
                  }}>
                  
                  About Chatter
                </Link>
              </Grid>

              to="#about"
              <Grid item lg={"auto"}>
                <Link
                  style={{
                    extDecoration: "none",
                    fontSize: "14px",
                    //border: "solid 1px black",
                  }}
                  to="/about/"
                
                  Introducing Products>
                </Link>
              </Grid>
              <Grid
                item
                lg={"auto"}
                style={
                  {
                    //border: "solid 1px black",
                  }
                }
              >
                <Link
                  style={{
                    textDecoration: "none",
                    fontSize: "14px",
                    //border: "solid 1px black",
                  }}
                  to="/contact/"
                >
                  Keep up to date
                </Link>/              </Grid>
            </Grid>
          </BurgerWrapper>

          <Grid
            className="button"
            item
            lg={"auto"}
            style={{
              marginLeft: "1px",
              marginRight: "90px",
              //border: "solid 1px black",
            }}
          >
            <Button> Chat to us </Button>
          </Grid>
        </Grid>
      </Grid
)
export default NavMenuBurger