import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

import { Wrapper } from './styles';
import { signOut } from '~/store/modules/auth/actions';
// import Header from '~/components/Header';

export default function DefaultLayout({ children }) {
  const dispatch = useDispatch();


  function handleSignOut() {
    dispatch(signOut());
  }


  return (
    <Wrapper>
      {/* <Header /> */}
      <div style={{ margin: '10px', display: 'flex', flex: 1, justifyContent: 'space-between'}}>
      <h1>Header Here</h1>
        <button type="button" onClick={handleSignOut} style={{marginRight: '10px'}}>
          Sair do sistema
        </button>
      </div>

      {children}
    </Wrapper>
  );
}

DefaultLayout.propTypes = {
  children: PropTypes.element.isRequired,
};
