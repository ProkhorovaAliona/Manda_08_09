import React, { Component } from 'react';
import Header from '../../components/Header';
import style from './style.scss'

const menu = [
  {
    link: '/articles',
    label: 'Articles'
  },
  {
    link: '/contacts',
    label: 'Contacts'
  },
  {
    link: '/posts',
    lable: 'Posts'
  }
];

class MainPage extends Component {

  render() {
    return (
      <div>
        <div className={style.title}> Header </div> 
        <Header items={menu} />
      </div>
    );
  }
}

export default MainPage;