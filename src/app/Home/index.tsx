import { useState } from 'react'
import { Image, View, TouchableOpacity, Text, FlatList, Alert } from 'react-native';

import Button from '@/shared/components/Button';
import Input from '@/shared/components/Input';
import Filter from '@/shared/components/Filter';
import Item from '@/shared/components/Item';

import { styles } from './style';
import { FilterStatusEnum } from '@/shared/types/FilterStatus';
import { IItem } from '@/shared/types/interfaces/item.interface';

const FILTER_STATUS: FilterStatusEnum[] = [FilterStatusEnum.DONE, FilterStatusEnum.PENDING]


export default function Home() {
  const [filter, setFilter] = useState(FilterStatusEnum.PENDING)
  const [description, setDescription] = useState("")
  const [items, setItems] = useState<IItem[]>([])


  function handleAdd(){
    if(!description.trim()){
      return Alert.alert("Adicionar", "Informe a descrição para adicionar")
    }

    const newItem: IItem = {
      id: Math.random().toString(36).substring(2),
      description,
      status: FilterStatusEnum.PENDING
    }

  }

  return (
    <View style={styles.container}>
      <Image source={require('@/assets/logo.png')} style={styles.logo} />
      <View style={styles.form}>
        <Input placeholder='O que você precisa comprar?' onChangeText={setDescription} />
        <Button title='Salvar' onPress={handleAdd} />
      </View>
      <View style={styles.content}>
        <View style={styles.header}>
          {
            FILTER_STATUS.map((status) => (
              <Filter 
                key={status} 
                status={status} 
                isActive={status === filter} 
                onPress={() => setFilter(status)}
                />
            ))
          }

          <TouchableOpacity style={styles.clearButton}>
            <Text style={styles.clearText}>Limpar</Text>
          </TouchableOpacity>
        </View>
        <FlatList
          data={items}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <Item
              data={{ status: item.status, description: item.description }}
              onRemove={() => console.log()}
              onStatus={() => console.log()}
            />
          )}
          showsVerticalScrollIndicator={false}
          ItemSeparatorComponent={() => <View style={styles.separator} />}
          contentContainerStyle={styles.listContent}
          ListEmptyComponent={() => <Text style={styles.empty}>Nenhum item aqui</Text>}
        />
      </View>
    </View>
  );
}


