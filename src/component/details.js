import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Dimensions, ScrollView } from 'react-native';
const { height } = Dimensions.get('window')


export const PostDetails = ({ postId }) => {
    const [post, setPost] = useState(null);

    useEffect(() => {
        const fetchPostDetails = async () => {
            const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`);
            const data = await response.json();
            setPost(data);
        };

        fetchPostDetails();
    }, [postId]);

    console.log('PostDetails rendered', post);

    return (
        <View style={styles.details}>
            <Text style={styles.title}>Post details ID:{post?.id}</Text>
            <ScrollView>
            {post ? <Text style={styles.details}>{post?.body}</Text> : <Text style={styles.details}>Loading...</Text>}
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    title: { textAlign: 'center', fontWeight: '900', color: '#000000', fontSize: 20 },
    details: { fontWeight: '500', fontSize: 15, textTransform: 'capitalize', marginTop: '5%', overflow: 'scroll' },
    details: {
        padding: 20,
        marginTop: 20,
        backgroundColor: '#eeeeee',
        height: height / 5
      }
});