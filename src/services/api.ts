import axios from 'axios';

const API_BASE_URL = 'http://20.244.56.144/evaluation-service/register'; // Replace with your actual test server API URL


export const fetchPosts = async () => {
    return [
        { id: 1, title: 'Post 1', content: 'Content of post 1', comments: [] },
        { id: 2, title: 'Post 2', content: 'Content of post 2', comments: [] },
    ];
};
export const fetchTopUsers = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}/top-users`);
        return response.data;
    } catch (error) {
        console.error('Error fetching top users:', error);
        throw error;
    }
};

export const fetchTrendingPosts = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}/trending-posts`);
        return response.data;
    } catch (error) {
        console.error('Error fetching trending posts:', error);
        throw error;
    }
};

export const fetchFeedPosts = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}/feed-posts`);
        return response.data;
    } catch (error) {
        console.error('Error fetching feed posts:', error);
        throw error;
    }
};
