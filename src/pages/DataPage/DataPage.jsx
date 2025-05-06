import React from "react";
import { useState, useEffect } from "react"
import Card from "../../components/Card/Card"
import styles from "./DataPage.module.scss"

const DataPage = () => {
  const [users, setUsers] = useState([])
  const [posts, setPosts] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)
  const [activeTab, setActiveTab] = useState("users")

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true)
      setError(null)

      try {
        // Fetch users data
        const usersResponse = await fetch("https://jsonplaceholder.typicode.com/users")
        if (!usersResponse.ok) {
          throw new Error("Failed to fetch users")
        }
        const usersData = await usersResponse.json()
        setUsers(usersData)

        // Fetch posts data
        const postsResponse = await fetch("https://jsonplaceholder.typicode.com/posts")
        if (!postsResponse.ok) {
          throw new Error("Failed to fetch posts")
        }
        const postsData = await postsResponse.json()
        setPosts(postsData.slice(0, 12)) // Limit to 12 posts

        setIsLoading(false)
      } catch (err) {
        setError(err.message)
        setIsLoading(false)
      }
    }

    fetchData()
  }, [])

  const UserCard = ({ user }) => (
    <Card className={styles.userCard}>
      <div className={styles.userHeader}>
        <div className={styles.avatar}>{user.name.charAt(0)}</div>
        <h3>{user.name}</h3>
      </div>
      <div className={styles.userInfo}>
        <p>
          <strong>Username:</strong> {user.username}
        </p>
        <p>
          <strong>Email:</strong> {user.email}
        </p>
        <p>
          <strong>Phone:</strong> {user.phone}
        </p>
        <p>
          <strong>Website:</strong> {user.website}
        </p>
        <p>
          <strong>Company:</strong> {user.company.name}
        </p>
      </div>
    </Card>
  )

  const PostCard = ({ post }) => (
    <Card className={styles.postCard}>
      <h3>{post.title}</h3>
      <p>{post.body}</p>
      <div className={styles.postMeta}>
        <span>User ID: {post.userId}</span>
        <span>Post ID: {post.id}</span>
      </div>
    </Card>
  )

  return (
    <div className={styles.dataPage}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h1>Data Examples</h1>
            <p>
              This page demonstrates fetching and displaying data from the JSONPlaceholder API. Toggle between users and
              posts to see different data sets.
            </p>
          </div>
        </div>
      </section>

      {/* Data Section */}
      <section className={styles.dataSection}>
        <div className={styles.container}>
          <div className={styles.tabs}>
            <button
              className={`${styles.tab} ${activeTab === "users" ? styles.active : ""}`}
              onClick={() => setActiveTab("users")}
            >
              Users
            </button>
            <button
              className={`${styles.tab} ${activeTab === "posts" ? styles.active : ""}`}
              onClick={() => setActiveTab("posts")}
            >
              Posts
            </button>
          </div>

          <div className={styles.dataContent}>
            {isLoading ? (
              <div className={styles.loading}>
                <div className={styles.spinner}></div>
                <p>Loading data...</p>
              </div>
            ) : error ? (
              <div className={styles.error}>
                <p>Error: {error}</p>
                <button className={styles.retryButton} onClick={() => window.location.reload()}>
                  Retry
                </button>
              </div>
            ) : (
              <div className={styles.dataGrid}>
                {activeTab === "users" ? (
                  users.length > 0 ? (
                    users.map((user) => <UserCard key={user.id} user={user} />)
                  ) : (
                    <p>No users found.</p>
                  )
                ) : posts.length > 0 ? (
                  posts.map((post) => <PostCard key={post.id} post={post} />)
                ) : (
                  <p>No posts found.</p>
                )}
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  )
}

export default DataPage
