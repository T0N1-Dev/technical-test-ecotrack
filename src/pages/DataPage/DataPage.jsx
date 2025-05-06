import React, { useState } from "react";
import Card from "../../components/Card/Card";
import useFetchData from "../../hooks/useFetchData";
import styles from "./DataPage.module.scss";

const DataPage = () => {
  const [activeTab, setActiveTab] = useState("users");

  const { data: users, isLoading: usersLoading, error: usersError } = useFetchData(
    "https://jsonplaceholder.typicode.com/users"
  );
  const { data: posts, isLoading: postsLoading, error: postsError } = useFetchData(
    "https://jsonplaceholder.typicode.com/posts"
  );

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
  );

  const PostCard = ({ post }) => (
    <Card className={styles.postCard}>
      <h3>{post.title}</h3>
      <p>{post.body}</p>
      <div className={styles.postMeta}>
        <span>User ID: {post.userId}</span>
        <span>Post ID: {post.id}</span>
      </div>
    </Card>
  );

  const isLoading = activeTab === "users" ? usersLoading : postsLoading;
  const error = activeTab === "users" ? usersError : postsError;
  const data = activeTab === "users" ? users : posts.slice(0, 12); // Limit posts to 12

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
                {data.length > 0 ? (
                  data.map((item) =>
                    activeTab === "users" ? (
                      <UserCard key={item.id} user={item} />
                    ) : (
                      <PostCard key={item.id} post={item} />
                    )
                  )
                ) : (
                  <p>No data found.</p>
                )}
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default DataPage;
