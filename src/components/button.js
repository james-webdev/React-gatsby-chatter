import React from "react"
import styled from "styled-components"
import { makeStyles } from "@material-ui/core/styles"
import Button from "@material-ui/core/Button"

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1),
    border: "solid 1px black",
    padding: "10px 30px",
    background: "rgb(230, 65, 62)",
    color: "white",
    border: "none",
    borderRadius: "110px 100px 100px 100px",
    boxShadow: "0px 5px 5px 0px rgba(1, 1, 1, 0.2)",
  },
  input: {
    display: "none",
  },
}))

export default function ContainedButtons() {
  const classes = useStyles()

  return (
    <Button variant="contained" color="primary" className={classes.button}>
      Chat to Us
    </Button>
  )
}
