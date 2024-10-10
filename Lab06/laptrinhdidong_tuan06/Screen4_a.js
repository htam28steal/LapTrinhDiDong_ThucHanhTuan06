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
      title: 'Ca nấu lẩu, nấu mì mini',
      img: require('./assets/imgs/noicomdien.jpg'),
      shop: 'Shop Devang',
    },
    {
      id: '2',
      title: '1 KG Khô gà bơ tỏi',
      img: require('./assets/imgs/khoga.jpg'),
      shop: 'LTD Food',
    },
    {
      id: '3',
      title: 'Ca nấu lẩu, nấu mì mini',
      img: require('./assets/imgs/xemohinh.png'),
      shop: 'Thế giới đồ chơi',
    },
    {
      id: '4',
      title: 'Đồ chơi dạng mô hình',
      img: require('./assets/imgs/xecuuhoa.jpg'),
      shop: 'Thế giới đồ chơi',
    },
    {
      id: '5',
      title: 'Lãnh đạo đơn giản',
      img: require('./assets/imgs/sachlanhdao.png'),
      shop: 'Minh Long Book',
    },
    {
      id: '6',
      title: 'Hiểu lòng con trẻ',
      img: require('./assets/imgs/hieulongcontre.png'),
      shop: 'Minh Long Book',
    },
    {
      id: '7',
      title: 'Buổi ăn trưa của Donal Trump',
      img: require('./assets/imgs/donaltrump.jpg'),
      shop: 'Minh Long Book',
    },
  ];

  const [selectedId, setSelectedId] = useState(null);
  const renderItem = ({ item }) => {
    const backgroundColor = item.id === selectedId ? 'white' : 'rgba(196, 196, 196, 1)'; // Đổi màu nếu được chọn
    const textColor = item.id === selectedId ? 'red' : 'black';
    
    return (
      <TouchableOpacity style={[styles.detailProduct,{backgroundColor}]} onPress={()=> setSelectedId(item.id)}>
        <View style={styles.frameImg}>
          <Image source={item.img} style={{ width: 74, height: 74 }} />
        </View>
        <View style={styles.frameContent}>
          <Text>{item.title}</Text>
          <Text style={{color:textColor}}>Shop: {item.shop}</Text>
        </View>
        <TouchableOpacity style={styles.btnChat}>
          <Text style={styles.txtChat}>CHAT</Text>
        </TouchableOpacity>
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
          <Text>Chat</Text>
          <TouchableOpacity>
            <Image source={require('./assets/imgs/store.png')} />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.des}>
        <Text style={styles.txtAttention}>
          Bạn có thắc mắc với sản phẩm vừa xem đừng ngại chat với shop!
        </Text>
      </View>
      <View style={styles.listProducts}>
        <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          
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
  des: {
    width: '100%',
    height: 58,
    padding: 10,
    backgroundColor: 'rgba(196, 196, 196, 1)',
  },
  txtAttention: {
    fontSize: 15,
    fontWeight: 600,
  },
  listProducts: {
    width: '100%',
    height: 500,
  },
  detailProduct: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: 78,
    backgroundColor: 'rgba(196, 196, 196, 1)',
  },
  frameImg: {
    width: 74,
    height: '100%',
  },
  frameContent: {
    width: '40%',
    height: '100%',
    gap: 5,
    marginLeft: 10,
  },
  btnChat: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 88,
    height: 38,
    backgroundColor: 'red',
    marginLeft: 10,
  },
  txtChat: {
    color: 'white',
    fontSize: 16,
    fontWeight: 600,
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
});
