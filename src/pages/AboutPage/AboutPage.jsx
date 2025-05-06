import React from "react";
import Card from "../../components/Card/Card"
import styles from "./AboutPage.module.scss"

const AboutPage = () => {
  return (
    <div className={styles.aboutPage}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h1>About EcoTrack</h1>
            <p>
              We're on a mission to empower individuals and businesses to make sustainable choices through technology
              and data-driven insights.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className={styles.story}>
        <div className={styles.container}>
          <div className={styles.grid}>
            <div className={styles.content}>
              <h2>Our Story</h2>
              <p>
                EcoTrack was founded in 2022 by a group of environmental scientists and tech enthusiasts who saw the
                need for better tools to help people understand and reduce their environmental impact.
              </p>
              <p>
                What started as a simple carbon calculator has evolved into a comprehensive platform that helps
                thousands of users make more sustainable choices every day.
              </p>
              <p>
                Our team is passionate about combining cutting-edge technology with environmental science to create
                solutions that make sustainability accessible to everyone.
              </p>
            </div>
            <div className={styles.image}>
              <img className={styles.imageWrapper} src="https://res.cloudinary.com/dmfs1od9n/image/upload/f_auto,w_auto/v1746549593/303_ot5asd.jpg" alt="About-img" />
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission Section */}
      <section className={styles.mission}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h2>Our Mission</h2>
            <p>
              At EcoTrack, we believe that small changes can make a big difference. Our mission is to empower
              individuals and organizations to understand their environmental impact and take meaningful action to
              reduce it.
            </p>

            <div className={styles.values}>
              <div className={styles.value}>
                <h3>Accessibility</h3>
                <p>We make sustainability accessible to everyone, regardless of their background or knowledge level.</p>
              </div>

              <div className={styles.value}>
                <h3>Transparency</h3>
                <p>
                  We believe in being transparent about our methodology and data sources to build trust with our users.
                </p>
              </div>

              <div className={styles.value}>
                <h3>Impact</h3>
                <p>
                  We focus on solutions that create real, measurable environmental impact rather than symbolic gestures.
                </p>
              </div>

              <div className={styles.value}>
                <h3>Innovation</h3>
                <p>We continuously innovate to provide the most effective tools for environmental action.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className={styles.features}>
        <div className={styles.container}>
          <h2>Key Features</h2>

          <div className={styles.featureGrid}>
            <Card title="Comprehensive Carbon Tracking" icon="📊">
              <p>
                Track your carbon footprint across multiple categories including transportation, home energy, food, and
                purchases.
              </p>
            </Card>

            <Card title="Personalized Recommendations" icon="💡">
              <p>
                Receive tailored suggestions based on your specific lifestyle and habits to help you reduce your
                environmental impact.
              </p>
            </Card>

            <Card title="Goal Setting & Tracking" icon="🎯">
              <p>
                Set personal sustainability goals and track your progress over time with detailed analytics and
                visualizations.
              </p>
            </Card>

            <Card title="Community Challenges" icon="👥">
              <p>
                Join challenges with other users to collectively reduce carbon emissions and make a bigger impact
                together.
              </p>
            </Card>

            <Card title="Educational Resources" icon="📚">
              <p>
                Access a library of articles, guides, and resources to deepen your understanding of environmental issues
                and solutions.
              </p>
            </Card>

            <Card title="Carbon Offset Projects" icon="🌳">
              <p>Browse and support verified carbon offset projects to neutralize your unavoidable emissions.</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className={styles.team}>
        <div className={styles.container}>
          <h2>Our Team</h2>
          <p className={styles.teamIntro}>
            We're a diverse team of environmental scientists, developers, designers, and sustainability experts working
            together to create positive change.
          </p>

          <div className={styles.teamGrid}>
            <div className={styles.teamMember}>
              <div className={styles.avatar}>
                <img src="https://res.cloudinary.com/dmfs1od9n/image/upload/f_auto,w_auto/v1746550727/oguz-yagiz-kara-MZf0mI14RI0-unsplash_fuvqnh.jpg"  alt="alex-image"/>
              </div>
              <h3>Alex Johnson</h3>
              <p>Co-Founder & CEO</p>
            </div>

            <div className={styles.teamMember}>
              <div className={styles.avatar}>
                <img src="https://res.cloudinary.com/dmfs1od9n/image/upload/f_auto,w_auto/v1746551855/christina-wocintechchat-com-SJvDxw0azqw-unsplash_v6z462.jpg" alt="maya-image" />
              </div>
              <h3>Maya Patel</h3>
              <p>Co-Founder & CTO</p>
            </div>

            <div className={styles.teamMember}>
              <div className={styles.avatar}>
                <img src="https://res.cloudinary.com/dmfs1od9n/image/upload/f_auto,w_auto/v1746550723/alex-suprun-ZHvM3XIOHoE-unsplash_miewga.jpg" alt="david-image" />
              </div>
              <h3>David Kim</h3>
              <p>Lead Environmental Scientist</p>
            </div>

            <div className={styles.teamMember}>
              <div className={styles.avatar}>
                <img src="https://res.cloudinary.com/dmfs1od9n/image/upload/f_auto,w_auto/v1746550667/christopher-campbell-rDEOVtE7vOs-unsplash_ttb4hk.jpg" alt="sophia-image" />
              </div>
              <h3>Sophia Chen</h3>
              <p>Head of Product</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default AboutPage
