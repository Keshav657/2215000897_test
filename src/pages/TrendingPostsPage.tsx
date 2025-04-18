import React, { useEffect, useState } from 'react';
import TrendingPosts from '../components/TrendingPosts';
import Loader from '../components/Shared/Loader';
import { fetchTrendingPosts } from '../services/api';

const TrendingPostsPage: React.FC = () => {
    const [trendingPosts, setTrendingPosts] = useState<any[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const getTrendingPosts = async () => {
            setLoading(true);
            try {
                const posts = await fetchTrendingPosts();
                setTrendingPosts(posts);
            } catch (error) {
                console.error('Error fetching trending posts:', error);
            } finally {
                setLoading(false);
            }
        };

        getTrendingPosts();
    }, []);

    return (
        <div>
            <h1>Trending Posts</h1>
            {loading ? <Loader /> : <TrendingPosts posts={trendingPosts} />}
        </div>
    );
};

export default TrendingPostsPage;