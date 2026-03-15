import React from "react"
import type { CustomerProfile } from "../types"
import styles from "../../dashboard/DashboardPage.module.css"

interface ProfileHeaderProps {
  profile: CustomerProfile | null
}

const ProfileHeader: React.FC<ProfileHeaderProps> = ({ profile }) => {
  if (!profile) return null

  const initials = profile.name
    .split(" ")
    .map((n) => n[0])
    .join("")

  return (
    <div className={styles.profileCard}>
      
      {/* Left Section */}
      <div className={styles.profileLeft}>
        
        {/* Avatar */}
        <div className={styles.avatar}>
          {initials}
        </div>

        {/* Profile Info */}
        <div className={styles.profileInfo}>
          <span className={styles.profileName}>{profile.name}</span>
          <span className={styles.profileEmail}>{profile.email}</span>
          <span className={styles.profileAccount}>{profile.accountType}</span>
        </div>

      </div>

      {/* Right Section */}
     <div className={styles.profileStats}>

      <div className={styles.statBlock}>
        <span className={styles.statLabel}>Total Spent</span>
        <span className={styles.statValue}>
          {profile.currency} {profile.totalSpent.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
        </span>
      </div>

      <div className={styles.statBlock}>
        <span className={styles.statLabel}>Customer Since</span>
        <span className={styles.statValue}>
          {profile.joinDate}
        </span>
      </div>

    </div>

    </div>
  )
}

export default ProfileHeader