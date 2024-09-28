import React, { useEffect } from "react";
import { useSelector } from "react-redux";

const Dashboard = () => {
    const { user } = useSelector((state) => state.auth);

    useEffect(() => {
        console.log('Dashboard', user);
    }, [user]);

    return (
        <div>
            <h2 className="text-2xl mb-4">Dashboard</h2>
            <p>Welcome, {user.name}!</p>
            {/* Add more dashboard content here */}
        </div>
    );
};

export default Dashboard;
