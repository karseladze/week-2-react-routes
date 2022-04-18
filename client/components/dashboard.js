import React from 'react'
import { Link } from 'react-router-dom'
import Head from './head'

const Dashboard = () => {
  return (
    <div>
      <Head title="Hello" />
      <div className="flex items-center justify-center h-screen">
        <div className="bg-indigo-800 text-white font-bold rounded-lg border shadow-lg p-10">
          <div id="title">
            Dashboard
            <Link to="/dashboard/profile/d542c90c-58c0-43bf-a1ec-d7cd3a233113"> Go To Profile</Link>
            <Link to="/dashboard/main"> Go To Main</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

Dashboard.propTypes = {}

export default Dashboard
