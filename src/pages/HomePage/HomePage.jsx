import React from "react";
import Button from "../../components/Button/Button"
import Card from "../../components/Card/Card"
import styles from "./HomePage.module.scss"

const HomePage = () => {
  return (
    <div className={styles.homePage}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h1>Track Your Carbon Footprint with EcoTrack</h1>
            <p>
              Make sustainable choices easier with our comprehensive carbon footprint tracking app. Monitor, reduce, and
              offset your environmental impact.
            </p>
            <div>
              <Button size="large">Get Started</Button>
              <Button variant="outline" size="large">
                Learn More
              </Button>
            </div>
          </div>
          <div className={styles.imageContainer}>
            <img src="https://res.cloudinary.com/dmfs1od9n/image/upload/v1746465204/Proyecto_nuevo_re3hhn.png" alt="home-image" className={styles.image} /><h1 className={styles.homeLogo}>EcoTrack</h1>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className={styles.features}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2>Why Choose EcoTrack?</h2>
            <p>Our platform offers powerful tools to help you live more sustainably</p>
          </div>

          <div className={styles.featureGrid}>
            <Card title="Personal Carbon Calculator" subtitle="Track your daily activities" icon="🌱">
              <p>
                Calculate your carbon footprint based on your lifestyle, transportation, diet, and energy usage with our
                easy-to-use calculator.
              </p>
            </Card>

            <Card title="Actionable Insights" subtitle="Get personalized recommendations" icon="💡">
              <p>
                Receive tailored suggestions to reduce your environmental impact based on your specific habits and
                lifestyle choices.
              </p>
            </Card>

            <Card title="Progress Tracking" subtitle="Monitor your improvement" icon="📊">
              <p>
                Set goals and track your progress over time with detailed analytics and visual representations of your
                carbon reduction journey.
              </p>
            </Card>

            <Card title="Community Impact" subtitle="Join a global movement" icon="🌍">
              <p>
                Connect with like-minded individuals, share tips, and participate in challenges to collectively make a
                bigger difference.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className={styles.testimonials}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2>What Our Users Say</h2>
            <p>Join thousands of people making a difference with EcoTrack</p>
          </div>

          <div className={styles.testimonialGrid}>
            <div className={styles.testimonial}>
              <div className={styles.quote}>"</div>
              <p>
                EcoTrack has completely changed how I think about my daily choices. I've reduced my carbon footprint by
                30% in just three months!
              </p>
              <div className={styles.author}>
                <div className={styles.avatar}>
                  <img className={styles.avatar_img} src="https://res.cloudinary.com/dmfs1od9n/image/upload/f_auto,w_auto/v1746483492/michael-dam-mEZ3PoFGs_k-unsplash_ii91rj.jpg" alt="sara-image" />
                </div>
                <div>
                  <h4>Sarah Johnson</h4>
                  <p>EcoTrack User</p>
                </div>
              </div>
            </div>

            <div className={styles.testimonial}>
              <div className={styles.quote}>"</div>
              <p>
                The personalized recommendations are spot-on. I've saved money on my energy bills while helping the
                planet. Win-win!
              </p>
              <div className={styles.author}>
                <div className={styles.avatar}>
                  <img className={styles.avatar_img} src="https://res.cloudinary.com/dmfs1od9n/image/upload/f_auto,w_auto/v1746484001/alexander-hipp-iEEBWgY_6lA-unsplash_ghz4qm.jpg" alt="michael-image" />
                </div>
                <div>
                  <h4>Michael Chen</h4>
                  <p>EcoTrack User</p>
                </div>
              </div>
            </div>

            <div className={styles.testimonial}>
              <div className={styles.quote}>"</div>
              <p>
                As a business owner, EcoTrack has helped our company implement sustainable practices and engage our
                employees in our green initiatives.
              </p>
              <div className={styles.author}>
                <div className={styles.avatar}>
                <img className={styles.avatar_img} src="https://res.cloudinary.com/dmfs1od9n/image/upload/f_auto,w_auto/v1746484007/courtney-cook-TSZo17r3m0s-unsplash_yncign.jpg" alt="emma-image"  />
                </div>
                <div>
                  <h4>Emma Rodriguez</h4>
                  <p>Business Owner</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.cta}>
        <div className={styles.container}>
          <h2>Ready to Reduce Your Carbon Footprint?</h2>
          <p>
            Join thousands of users who are making a positive impact on the environment. Start your sustainability
            journey today.
          </p>
          <Button size="large">Get Started Now</Button>
        </div>
      </section>
    </div>
  )
}

export default HomePage
