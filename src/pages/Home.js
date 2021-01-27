import { Button } from "@material-ui/core";
import React from "react";
import { connect } from "react-redux";
import { showSnackbar } from "../functions/reduxStateFunctions";

function Home({ showSnackbar }) {
  return (
    <>
      <div>Welcome home... test snackbar here.</div>

      <Button
        variant="outlined"
        color="primary"
        onClick={() =>
          showSnackbar({
            severity: "error",
            message: "You made a big mistake buddy.",
          })
        }
      >
        Call Error
      </Button>
      <Button
        variant="outlined"
        color="primary"
        onClick={() =>
          showSnackbar({
            severity: "info",
            message: "You should stay away from here.",
          })
        }
      >
        Call Info
      </Button>
      <Button
        variant="outlined"
        color="primary"
        onClick={() =>
          showSnackbar({ severity: "success", message: "You win the game." })
        }
      >
        Call Success
      </Button>
    </>
  );
}
const mapStateToProps = (state) => {
  return {
    state,
  };
};

export default connect(mapStateToProps, { showSnackbar })(Home);
