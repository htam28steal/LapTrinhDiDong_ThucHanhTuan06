import { useState } from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  FlatList,
  Text,
  Image,
  TextInput,
} from 'react-native';
import Svg, { Defs, RadialGradient, Stop, Rect } from 'react-native-svg';

export default function Screen4_a({ route, navigation }) {
  const DATA = [
    {
      id: '1',
      title: 'Cáp chuyển từ cổng USB sang P2S...',
      img: require('./assets/imgs/giacchuyen.png'),
      price:'69.900đ',
      rating:1,
    },
    {
      id: '2',
      title: 'Cáp chuyển từ cổng USB sang P2S...',
      img: require('./assets/imgs/daynguon.png'),
      price:'90.900đ',
      rating:3,
    },
    {
      id: '3',
      title: 'Cáp chuyển từ cổng USB sang P2S...',
      img: require('./assets/imgs/dauchuyendoipsps2.png'),
      price:'80.900đ',
      rating:4,
    },
    {
      id: '4',
      title: 'Cáp chuyển từ cổng USB sang P2S...',
      img: require('./assets/imgs/dauchuyendoi.png'),
      price:'88.900đ',
      rating:5,
    },
    {
      id: '5',
      title: 'Cáp chuyển từ cổng USB sang P2S...',
      img: require('./assets/imgs/carbusbtops2.png'),
      price:'50.900đ',
      rating:2,
    },
    {
      id: '6',
      title: 'Cáp chuyển từ cổng USB sang P2S...',
      img: require('./assets/imgs/daucam.png'),
      price:'92.900đ',
      rating:3,
    },
  ];

  const [selectedId, setSelectedId] = useState(null);
  const renderItem = ({ item }) => {
    const backgroundColor =
      item.id === selectedId ? 'white' : 'rgba(196, 196, 196, 1)'; // Đổi màu nếu được chọn
    const textColor = item.id === selectedId ? 'red' : 'black';
    const ratingOfProduct=[...Array(item.rating)].map((_,index)=>(
      <Image key={index} source={require('./assets/imgs/Star.png') } style = {styles.iconStar} />
  ));
    return (
      <TouchableOpacity
        style={[styles.detailProduct, { backgroundColor }]}
        onPress={() => setSelectedId(item.id)}>
        <View style={styles.frameImg}>
          <Image source={item.img} style={{ width: '100%', height: '100%' }} />
        </View>
        <View style={styles.frameNameProduct}>
          <Text>{item.title}</Text>
        </View>
        <View style={styles.frameRating}>
          <View style={styles.frameIconRating}>
              {ratingOfProduct}
          </View>
          <Text>(15)</Text>
        </View>
        <View style={styles.framePrice}>
          <Text style={{fontWeight:'bold'}}>{item.price}</Text> 
          <Text style={{color:'#rgba(150,157,170,1)'}}>-39%</Text>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <View style={styles.container}>
      <View style={styles.frameHead}>
        <View style={styles.contentHead}>
          <TouchableOpacity>
            <Image source={require('./assets/imgs/Vector.png')} />
          </TouchableOpacity>
          <View style={styles.frameSearch}>
            <Image
              source={require('./assets/imgs/search.png')}
              style={styles.iconSearch}
            />
            <TextInput style={styles.inputSearch} />
          </View>
          <TouchableOpacity>
            <Image source={require('./assets/imgs/store.png')} />
          </TouchableOpacity>
        </View>
      </View>
      <View>
        <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          numColumns={2}
          contentContainerStyle={styles.listProducts}
        />
      </View>

      <View style={styles.footer}>
        <Image
          source={require('./assets/imgs/menu.png')}
          style={styles.frameIcon}
        />
        <Image
          source={require('./assets/imgs/home.png')}
          style={styles.frameIcon}
        />
        <Image
          source={require('./assets/imgs/turn-around.png')}
          style={styles.frameIcon}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    height: 640,
    width: 360,
    backgroundColor: 'rgba(196, 196, 196, 1)',
    alignItems: 'flex-start',
    flexDirection: 'row',
  },
  frameHead: {
    width: '100%',
    height: 42,
    backgroundColor: '#1BA9FF',
    padding: 10,
  },
  contentHead: {
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
  },
  frameSearch: {
    width: 192,
    height: 30,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: 'white',
    alignItems: 'center',
    borderRadius: 3,
  },
  iconSearch: {
    width: 24,
    height: 24,
  },
  inputSearch: {
    width: 165,
    height: 30,
    borderWidth: 0,
  },
  listProducts: {
    width: '100%',
    height: 595,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'cetner',
  },
  detailProduct: {
    display: 'flex',
    width: 175,
    height: 230,
    backgroundColor: 'rgba(196, 196, 196, 1)',
    padding: 10,
  },
  frameImg: {
    width: '100%',
    height: 90,
  },
  frameRating: {
    width: 120,
    height: 15,
    flexDirection: 'row',
    alignItems: 'center',
  },

  footer: {
    height: 49,
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: '#1BA9FF',
    alignItems: 'center',
    justifyContent: 'space-between',

    padding: 10,
  },
  frameIcon: {
    width: 26,
    height: 26,
  },
  frameNameProduct: {
    width: 120,
    height: 70,
  },
  frameIconRating: {
    width: '80%',
    height: 15,
    flexDirection: 'row',

  },
  iconStar: {
    width: 13,
    height: 13,
  },
  framePrice: {
    width: '80%',
    height: 18,
    flexDirection: 'row',
    justifyContent:'space-between'
  },
});
