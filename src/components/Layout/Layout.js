import React from 'react';
import { connect } from 'react-redux';
import Spinner from '../UI/Spinner/Spinner';

const Layout = (props) => {

  let content = <Spinner />
  if (!props.loading) {
    content = (
      <main>
        {props.children}
      </main>
    )
  }

  return (
    <>
      {content}
    </>
  );
}

const mapStateToProps = state => {
  return {
    loading: state.auth.loading
  }
}

export default connect(mapStateToProps)(Layout);