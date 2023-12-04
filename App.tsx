import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React, {ReactNode, useState} from 'react';
import {
  AddCircle,
  Danger,
  InfoCircle,
  Information,
  MinusCirlce,
  Warning2,
} from 'iconsax-react-native';

const App = () => {
  const [itemSelected, setItemSelected] = useState('minjo');

  const items = [
    {
      key: 'minjo',
      title: 'Minjo',
      color: 'red',
    },
    {
      key: 'major',
      title: 'Major',
      color: 'coral',
    },
    {
      key: 'info',
      title: 'Infomation',
      color: 'blue',
    },
  ];

  const renderItemSelected = (item: {
    key: string;
    title: string;
    color: string;
  }) => {
    const color = itemSelected === item.key ? item.color : '#212121';
    const shadow = item.key === itemSelected ? styles.shadow : {};

    let icon = <></>;

    switch (item.key) {
      case 'minjo':
        icon = <MinusCirlce size={24} color={color} />;
        break;
      case 'major':
        icon = <AddCircle size={24} color={color} />;
        break;
      default:
        icon = <Information size={24} color={color} />;
        break;
    }

    return (
      <TouchableOpacity
        onPress={() => setItemSelected(item.key)}
        key={item.key}
        style={[
          shadow,
          styles.button,
          {
            backgroundColor: item.key === itemSelected ? '#fff' : 'transparent',
          },
        ]}>
        {icon}
        <Text style={[styles.text, {color}]}>{item.title}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={[styles.container]}>
      <View style={[styles.buttonContent]}>
        {items.map(item => renderItemSelected(item))}
      </View>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  buttonContent: {
    flexDirection: 'row',
    padding: 2,
    backgroundColor: '#e0e0e0',
    width: '100%',
    justifyContent: 'space-between',
    borderRadius: 12,
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 8,
    flex: 1,
    borderRadius: 12,
  },
  text: {
    fontSize: 16,
    fontWeight: '500',
    color: '#212121',
    marginTop: 8,
  },
  shadow: {
    shadowColor: 'rgba(0,0,0,0.8)',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.15,
    shadowRadius: 4,
    elevation: 6,
  },
});
