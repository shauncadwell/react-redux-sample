import React, { useState } from "react";
import {
  Button,
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Container,
  Paper,
} from "@material-ui/core";

import { connect } from "react-redux";
import DragContainer from "../components/DragContainer";
import { showSnackbar } from "../functions/reduxStateFunctions";
import Draggable from "react-draggable";

const Home = ({ showSnackbar }) => {
  const [isHovering, setHovering] = useState(false);

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
      <Container
        component={Paper}
        elevation={3}
        style={{ height: "50vh", position: "absolute", left: 200 }}
      >
        <Draggable bounds="parent">
          <Card
            elevation={isHovering ? 5 : 1}
            square
            onMouseOver={() => setHovering(true)}
            onMouseLeave={() => setHovering(false)}
            style={{ width: "200px" }}
          >
            <CardHeader title="Card Title" />
            <CardContent>Contents of the card can get really long.</CardContent>
            <CardActions>
              {" "}
              <Button
                variant="outlined"
                color="primary"
                onClick={() =>
                  showSnackbar({
                    severity: "success",
                    message: "You win the game.",
                  })
                }
              >
                Call Success
              </Button>
            </CardActions>
          </Card>
        </Draggable>
      </Container>
    </>
  );
};
const mapStateToProps = (state) => {
  return {
    state,
  };
};

export default connect(mapStateToProps, { showSnackbar })(Home);
