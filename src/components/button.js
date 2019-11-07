import React from "react"
import styled from "styled-components"
import { makeStyles } from "@material-ui/core/styles"
import Button from "@material-ui/core/Button"

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1),
    padding: "10px 20px",
    background: "#EE6D8E",
    color: "white",
    border: "none",
    borderRadius: "110px 100px 100px 100px",
    fontSize: "12px",
    textTransform: "lowercase",
    width: "140px",
    boxShadow: "none",
  },
  input: {
    display: "none",
  },
}))

export default function ContainedButtons({ href, children }) {
  const classes = useStyles()

  return (
    <Button variant="contained" color="danger" className={classes.button} href={href}>
      {children}
    </Button>
  )
}
