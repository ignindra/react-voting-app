import { expect } from 'chai';
import { List, Map } from 'immutable';

describe('immutability', function() {
  describe('a number', function() {
    function increment(currentState) {
      return currentState + 1;
    }

    it('is immutable', function() {
      let state = 42;
      let nextState = increment(state);
      
      expect(nextState).to.equal(43);
      expect(state).to.equal(42);
    });
  });

  describe('a list', function() {
    function addMovie(currentState, movie) {
      return currentState.push(movie);
    }

    it('is immutable', function() {
      let state = List.of('Trainspotting', '28 Days Later');
      let nextState = addMovie(state, 'Sunshine');

      expect(nextState).to.equal(List.of(
        'Trainspotting',
        '28 Days Later',
        'Sunshine'
      ));
      expect(state).to.equal(List.of(
        'Trainspotting',
        '28 Days Later'
      ));
    });
  });

  describe('a tree', function() {
    // function addMovie(currentState, movie) {
    //   return currentState.set(
    //     'movies',
    //     currentState.get('movies').push(movie)
    //   );
    // }

    function addMovie(currentState, movie) {
      return currentState.update('movies', (movies) => movies.push(movie));
    }

    it('is immutable', function() {
      let state = Map({
        movies: List.of('Trainspotting', '28 Days Later')
      });
      let nextState = addMovie(state, 'Sunshine');

      expect(nextState).to.equal(Map({
        movies: List.of(
          'Trainspotting',
          '28 Days Later',
          'Sunshine'
        )
      }));
      expect(state).to.equal(Map({
        movies: List.of(
          'Trainspotting',
          '28 Days Later'
        )
      }));
    });
  })
});