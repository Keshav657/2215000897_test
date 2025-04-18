import React, { useEffect, useState } from 'react';
import { fetchTrendingPosts } from '../services/api';
import Loader from './Shared/Loader';

const TrendingPosts: React.FC = () => {
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

    if (loading) {
        return <Loader />;
    }

    return (
        <div className="trending-posts">
            <h2>Trending Posts</h2>
            {trendingPosts.length > 0 ? (
                trendingPosts.map((post) => (
                    <div key={post.id} className="post">
                        <h3>{post.title}</h3>
                        <p>{post.content}</p>
                        <span>{post.commentCount} comments</span>
                    </div>
                ))
            ) : (
                <p>No trending posts available.</p>
            )}
        </div>
    );
};

export default TrendingPosts;