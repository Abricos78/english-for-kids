import React from 'react';
import { connect } from 'react-redux';
import { StateInterface } from '../../../reducers/state';
import { getRating } from '../../../selectors';
import style from './style.module.css';

interface MyInterface {
    rating: Array<string>
}

const Rating = ({ rating }: MyInterface) => (
  <div className={style.stars}>
    {rating.map((type) => <div className={style[type]} />)}
  </div>
);

const mapStateToProps = ({ data }: Record<string, StateInterface>) => ({
  rating: getRating(data),
});

export default connect(mapStateToProps)(Rating);
