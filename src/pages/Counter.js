import React from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { increment, decrement } from "../actions/counterActions";
import { loggedIn } from "../actions/isLoggedInAction";

export const Counter = () => {
  const count = useSelector((state) => state.count);
  const isLoggedIn = useSelector((state) => state.loggedIn);
  const dispatch = useDispatch();
  return (
    <>
      <h1>App</h1>
      <h2>Counter: {count}</h2>
      <button onClick={() => dispatch(increment())}>ADD</button>
      <button onClick={() => dispatch(decrement())}>subtract</button>

      <div>
        <button
          onClick={() => dispatch(loggedIn())}
          style={{ backgroundColor: "lightblue", color: "white" }}
        >
          {isLoggedIn ? "Logout" : "Login"}
        </button>
      </div>
      <div>
        <Link to="/page">Click here to go to the other page</Link>
      </div>
    </>
  );
};

const mapStateToProps = (state) => ({
  counter: state.counter,
});

const mapDispatchToProps = {
  increment,
  decrement,
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
