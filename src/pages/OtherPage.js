import React from "react";
import { Counter } from "./Counter";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { Button } from "@material-ui/core";

function OtherPage() {
  const count = useSelector((state) => state.count);

  return (
    <div>
      Other page {count}
      <div>
        <Link to="/">Click here to go to the Counter</Link>
        <Button>Snackbar trigger warning</Button>
      </div>
    </div>
  );
}

OtherPage.propTypes = {};

export default OtherPage;
