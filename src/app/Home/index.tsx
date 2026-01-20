import { Image, View } from 'react-native';
import { styles } from './style';

import Button from '@/shared/components/Button';
import Input from '@/shared/components/Input';

export default function Home() {
  return (
    <View style={styles.container}>
      <Image source={require('@/assets/logo.png')} style={styles.logo} />
      <View style={styles.form}>
        <Input placeholder='O que você precisa comprar?' />
        <Button title='Salvar' />
      </View>
      <View style={styles.content}>
        
      </View>
    </View>
  );
}


