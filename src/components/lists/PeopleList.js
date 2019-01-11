import React from 'react';
import PropTypes from 'prop-types'

const PeopleList = ({ people }) => (
  <ul>
    {
      people.map(person => (
        <li>
          <div>name: {person.name}</div>
          <div>mass: {person.mass}</div>
          {person.jedi && <div>jedi: Is as Jedi</div>}
          {person.sith && <div>sith: 'Is as Sith'</div>}
          <div>
            Films:
            <ul>
              {
                person.films.map(film => <span>{film} </span>)
              }
            </ul>
          </div>
        </li>
      ))
    }
  </ul>
);

PeopleList.propTypes = {
  people: PropTypes.any.isRequired
}

export default PeopleList;

