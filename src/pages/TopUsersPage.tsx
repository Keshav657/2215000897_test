import React, { useEffect, useState } from 'react';
import TopUsers from '../components/TopUsers';
import Loader from '../components/Shared/Loader';
import { fetchTopUsers } from '../services/api';

const TopUsersPage: React.FC = () => {
    const [topUsers, setTopUsers] = useState<any[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const getTopUsers = async () => {
            try {
                const users = await fetchTopUsers();
                setTopUsers(users);
            } catch (err) {
                setError('Failed to fetch top users');
            } finally {
                setLoading(false);
            }
        };

        getTopUsers();
    }, []);

    if (loading) {
        return <Loader />;
    }

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <div>
            <h1>Top Users</h1>
            <TopUsers users={topUsers} />
        </div>
    );
};

export default TopUsersPage;