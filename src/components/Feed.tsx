import React, { useEffect, useState } from 'react';
import { fetchPosts } from '../services/api';
import Loader from './Shared/Loader';

const Feed: React.FC = () => {
    const [posts, setPosts] = useState<any[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    const fetchData = async () => {
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

    useEffect(() => {
        fetchData();
        const interval = setInterval(fetchData, 5000); 
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="feed">
            {loading ? (
                <Loader />
            ) : (
                posts.map((post) => (
                    <div key={post.id} className="post">
                        <h3>{post.title}</h3>
                        <p>{post.content}</p>
                        <span>{post.comments.length} comments</span>
                    </div>
                ))
            )}
        </div>
    );
};

export default Feed;