import React from 'react';
import { connect } from 'react-redux';

const Counter = (props) => {
  return (
    <>
      <button class="btn btn-success me-3" onClick={props.handlerPlus}>
        ADD
      </button>
      <button class="btn btn-danger" onClick={props.handlerMinus}>
        MINUS
      </button>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    order: state.order,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    handlerPlus: () => dispatch({ type: 'PLUS_ORDER' }),
    handlerMinus: () => dispatch({ type: 'MINUS_ORDER' }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
