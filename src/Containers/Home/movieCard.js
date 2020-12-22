import React from 'react';
import {View, Image, ActivityIndicator, Pressable} from 'react-native';
import {Card, ListItem, Button, Icon, Text, Tile} from 'react-native-elements';
import {Actions} from 'react-native-router-flux';

function MovieCard(data) {
  return (
    <Pressable onPress={() => Actions.movieDetail({imdbID: data.item.imdbID})}>
      <Card key={data.item.imdbID}>
        {}
        <Image
          resizeMode="cover"
          style={{height: 200}}
          PlaceholderContent={<ActivityIndicator />}
          source={
            data.item.Poster != 'N/A'
              ? {
                  uri: data.item.Poster,
                }
              : {
                  uri:
                    'https://ted-ielts.com/wp-content/uploads/2019/04/movies-1_fcslqf.jpg',
                }
          }
        />
        <Card.Divider />
        <Text h4>
          {data.item.Title} - {data.item.Year}
        </Text>
      </Card>
    </Pressable>
  );
}

export default MovieCard;
