import React, { useEffect, useState } from 'react';
import { fetchTopUsers } from '../services/api';
import './TopUsers.css'; 

const TopUsers: React.FC = () => {
    const [topUsers, setTopUsers] = useState<any[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const getTopUsers = async () => {
            try {
                const users = await fetchTopUsers();
                setTopUsers(users);
            } catch (error) {
                console.error('Error fetching top users:', error);
            } finally {
                setLoading(false);
            }
        };

        getTopUsers();
    }, []);

    if (loading) {
        return <div>Loading...</div>; // You can replace this with a Loader component
    }

    return (
        <div className="top-users">
            <h2>Top Users by Comments</h2>
            <ul>
                {topUsers.map((user, index) => (
                    <li key={user.id}>
                        <span>{index + 1}. {user.name}</span>
                        <span> - {user.commentCount} comments</span>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TopUsers;