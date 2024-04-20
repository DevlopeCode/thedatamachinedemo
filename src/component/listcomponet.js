import { StyleSheet, View ,FlatList,Dimensions} from 'react-native'
import React, { useCallback, useEffect, useState } from 'react'
import { Post } from './renderitem';
import { PostDetails } from './details';
const { height } = Dimensions.get('window')

const Listcomponet = () => {
    const [posts, setPosts] = useState([]);
    const [selectedPostId, setSelectedPostId] = useState(null);

    useEffect(() => {
        const fetchPosts = async () => {
            const response = await fetch('https://jsonplaceholder.typicode.com/posts');
            const data = await response.json();
            setPosts(data);
        };

        fetchPosts();
    }, []);

    const renderItem = useCallback(({ item }) => {
        return <Post item={item} onSelect={setSelectedPostId} />;
    }, []);
    return (
        <View style={styles.container}>
            <FlatList
                data={posts}
                numColumns={2}
                renderItem={renderItem}
                ItemSeparatorComponent={<View style={{ height: height / 30 }} />}
                keyExtractor={(item) => item.id.toString()}
            />
            {selectedPostId && <PostDetails postId={selectedPostId} />}

        </View>
    )
}

export default Listcomponet


const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: 50,
    },
    item: {
      padding: 20,
      width: '45%',
      backgroundColor: 'white',
      borderRadius: 20,
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 3,
      },
      shadowOpacity: 0.29,
      shadowRadius: 4.65,
  
      elevation: 7,
      marginHorizontal: 10
    },
    title: {
      fontSize: 15,
      marginVertical: 10,
      textAlign: 'center'
    },
    details: {
      padding: 20,
      marginTop: 20,
      backgroundColor: '#eeeeee',
      height: height / 5
    }
  });