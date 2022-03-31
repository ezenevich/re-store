import React from 'react';
import { Navigate } from 'react-router-dom';
import { connect } from 'react-redux';
import { userLogIn } from '../../actions'

const LoginPage = ({ isLogged, onLogIn }) => {

  if (isLogged) {
    return <Navigate to="/" replace />
  }

  return (
    <div className='container'>
    <div className='row mt-5'>
      <div className="col-5"></div>
      <button
        className='col-2 btn btn-primary mt-5'
        onClick={() => onLogIn()}>
        log in
      </button>
    </div>
    </div>
  );
};

const mapStateToProps = ({ user: { isLogged } }) => {
  return {
    isLogged: isLogged
  }
}

const mapDispatchToProps = {
  onLogIn: userLogIn
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);