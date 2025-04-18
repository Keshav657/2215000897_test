import React, { useEffect, useState } from 'react';
import Feed from '../components/Feed';
import Loader from '../components/Shared/Loader';
import { fetchPosts } from '../services/api';

const FeedPage: React.FC = () => {
    const [posts, setPosts] = useState<any[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const getPosts = async () => {
            setLoading(true);
            try {
                const data = await fetchPosts();
                setPosts(data);
            } catch (error) {
                console.error('Error fetching posts:', error);
            } finally {
                setLoading(false);
            }
        };

        getPosts();

        const interval = setInterval(() => {
            getPosts();
        }, 5000); // Fetch new posts every 5 seconds

        return () => clearInterval(interval);
    }, []);

    return (
        <div>
            {loading ? <Loader /> : <Feed posts={posts} />}
        </div>
    );
};

export default FeedPage;