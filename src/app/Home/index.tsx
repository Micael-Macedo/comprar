import { Image, View } from 'react-native';
import { styles } from './style';

import Button from '@/shared/components/Button';
import Input from '@/shared/components/Input';
import Filter from '@/shared/components/Filter';

import { FilterStatusEnum } from '@/shared/types/FilterStatus';

export default function Home() {
  return (
    <View style={styles.container}>
      <Image source={require('@/assets/logo.png')} style={styles.logo} />
      <View style={styles.form}>
        <Input placeholder='O que você precisa comprar?' />
        <Button title='Salvar' />
      </View>
      <View style={styles.content}>
        <Filter status={FilterStatusEnum.DONE} isActive={true} />
        <Filter status={FilterStatusEnum.PENDING} isActive={false} />
      </View>
    </View>
  );
}


