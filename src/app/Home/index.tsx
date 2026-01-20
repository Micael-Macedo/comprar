import { Image, View } from 'react-native';
import { styles } from './style';

import Button from '@/shared/components/Button';

export default function Home() {
  return (
    <View style={styles.container}>
      <Image source={require('@/assets/logo.png')} style={styles.logo} />
      <Button />
    </View>
  );
}


