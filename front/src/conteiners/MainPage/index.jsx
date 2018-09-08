import React, { Component } from 'react';
import Header from '../../components/Header';
import style from './style.scss'

class MainPage extends Component {

  render() {
    return (
      <div>
        <div className={style.title}> Header </div> 
        <Header />
      </div>
    );
  }
}

export default MainPage;