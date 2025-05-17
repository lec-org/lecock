import React from 'react'
import './index.css'
const HomePage = (): React.ReactNode => {
  return (
    <div className="page home-page-container">
      <div className="home-grid-container">
        <div className="area clock-area">打卡</div>
        <div className="area message-area">通知</div>
        <div className="area schedule-area">日程</div>
        <div className="area card-area">卡片</div>
      </div>
    </div>
  )
}

export default HomePage
