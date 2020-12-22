import React, {useState, useEffect} from 'react';
import {Tile, ListItem, Avatar} from 'react-native-elements';
import {ScrollView, StyleSheet, View, Text, SafeAreaView} from 'react-native';
const MovieDetail = (props) => {
  const {moviesDetail, imdbID, detailResult} = props;
  useEffect(() => {
    moviesDetail(imdbID);
  }, []);

  const ratingImage = (source) => {
    let imgSrc = '';

    switch (source) {
      case 'Internet Movie Database':
        imgSrc =
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVYk06H_qApWxDtMYQp5mc7st7I8etzsumwg&usqp=CAU';
        break;
      case 'Rotten Tomatoes':
        imgSrc =
          'https://www.thewrap.com/wp-content/uploads/2018/08/RottenTomatoes-618x400.jpg';
        break;
      case 'Metacritic':
        imgSrc =
          'https://icon2.cleanpng.com/20180407/opq/kisspng-metacritic-video-game-review-aggregator-app-5ac97e4da2bda5.9007363615231545096666.jpg';
        break;
      default:
        imgSrc =
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVYk06H_qApWxDtMYQp5mc7st7I8etzsumwg&usqp=CAU';
    }
    return imgSrc;
  };
  return (
    <>
      {detailResult && (
        <>
          <Tile
            imageSrc={{
              uri: detailResult.Poster,
            }}
            title={detailResult.Title}
            featured
            caption={detailResult.Genre}
          />
          <ScrollView style={styles.container}>
            <Text style={styles.movieTitle}>{detailResult.Title}</Text>

            <Text style={styles.title}>Released</Text>
            <Text style={styles.textContent}>{detailResult.Released}</Text>

            <Text style={styles.title}>Plot</Text>
            <Text style={styles.textContent}>{detailResult.Plot}</Text>

            <Text style={styles.title}>Actors</Text>
            <Text style={styles.textContent}>{detailResult.Actors}</Text>

            <Text style={styles.title}>Director</Text>
            <Text style={styles.textContent}>{detailResult.Director}</Text>

            <Text style={styles.title}>Writer</Text>
            <Text style={styles.textContent}>{detailResult.Writer} </Text>

            <Text style={styles.title}>Awards</Text>
            <Text style={styles.textContent}>{detailResult.Awards}</Text>

            <Text style={styles.title}>Language</Text>
            <Text style={styles.textContent}>{detailResult.Language}</Text>

            <Text style={styles.title}>Production</Text>
            <Text style={styles.textContent}>{detailResult.Production}</Text>

            <View>
              <Text style={styles.title}>Ratings</Text>
              {detailResult.Ratings.map((item, key) => {
                return (
                  <ListItem bottomDivider key={key}>
                    <Avatar source={{uri: ratingImage(item.Source)}} />
                    <ListItem.Content>
                      <ListItem.Title>{item.Source}</ListItem.Title>
                      <ListItem.Subtitle>{item.Value}</ListItem.Subtitle>
                    </ListItem.Content>
                  </ListItem>
                );
              })}
            </View>
          </ScrollView>
        </>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingLeft: 10,
    paddingRight: 10,
  },
  title: {
    fontSize: 18,
    marginBottom: 10,
    marginTop: 20,
    fontWeight: '600',
  },
  movieTitle: {
    fontSize: 23,
    fontWeight: '300',
    marginTop: 20,
    textDecorationLine: 'underline',
    textAlign: 'center',
  },
  textContent: {
    fontSize: 15,
    lineHeight: 20,
    fontWeight: '100',
  },
});
export default MovieDetail;
