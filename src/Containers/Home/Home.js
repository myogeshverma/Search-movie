import React, {useState, useEffect} from 'react';
import {SearchBar, Text} from 'react-native-elements';
import {FlatList, SafeAreaView} from 'react-native';
import MovieCard from './movieCard';

export default (props) => {
  const [query, setQuery] = useState('Batman');

  const {searchMovies, searchResult} = props;

  const handleSearch = (query) => {
    setQuery(query);
    searchMovies(query);
  };
  useEffect(() => {
    searchMovies(query);
  }, []);

  const keyExtractor = (item, index) => item.imdbID.toString();
  return (
    <>
      <SafeAreaView>
        <SearchBar
          placeholder="Type Here..."
          onChangeText={handleSearch}
          value={query}
          lightTheme={true}
          round={true}
        />
        {searchResult && searchResult.Response == 'True' ? (
          <FlatList
            data={searchResult.Search}
            renderItem={MovieCard}
            keyExtractor={keyExtractor}
          />
        ) : (
          <Text h3>No Movies Found</Text>
        )}
      </SafeAreaView>
    </>
  );
};
