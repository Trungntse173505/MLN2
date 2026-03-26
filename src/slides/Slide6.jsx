import styles from './Slides.module.css'

export default function Slide6() {
  const accent = '#c95c4c'

  return (
    <div className={styles.contentLayout}>
      <div className={styles.header}>
        <div className={styles.slideNumber} style={{ color: accent, borderColor: accent }}>
          06
        </div>
        <div className={styles.headerText}>
          <span className={styles.sectionLabel} style={{ color: accent }}>
            Tiêu cực
          </span>
          <h2 className={styles.slideTitle}>Tác động tiêu cực (Nguy cơ phụ thuộc)</h2>
        </div>
      </div>

      <div className={styles.body}>
        <div className={styles.points}>
          <div className={styles.point} style={{ '--delay': '0ms', '--accent': accent }}>
            <span className={styles.pointBullet} style={{ background: accent }} />
            <span className={styles.pointText}>Áp lực cạnh tranh gay gắt: Nhiều doanh nghiệp nội địa đứng trước nguy cơ phá sản khi phải đối đầu với hàng ngoại giá rẻ và công nghệ cao từ Trung Quốc, Ấn Độ</span>
          </div>
          <div className={styles.point} style={{ '--delay': '80ms', '--accent': accent }}>
            <span className={styles.pointBullet} style={{ background: accent }} />
            <span className={styles.pointText}>Phụ thuộc vào thị trường nước ngoài: Nền kinh tế dễ bị tổn thương trước biến động giá cả toàn cầu hoặc các rào cản thương mại</span>
          </div>
          <div className={styles.point} style={{ '--delay': '160ms', '--accent': accent }}>
            <span className={styles.pointBullet} style={{ background: accent }} />
            <span className={styles.pointText}>Nguy cơ môi trường và giá trị thấp: Dễ trở thành "bãi thải công nghiệp" với công nghệ lạc hậu và bị mắc kẹt trong phân khúc gia công, lắp ráp có giá trị gia tăng thấp</span>
          </div>
          <div className={styles.point} style={{ '--delay': '240ms', '--accent': accent }}>
            <span className={styles.pointBullet} style={{ background: accent }} />
            <span className={styles.pointText}>Bất bình đẳng xã hội: Khoảng cách giàu nghèo gia tăng giữa thành thị và nông thôn; lợi ích hội nhập phân phối không đều</span>
          </div>
          <div className={styles.point} style={{ '--delay': '320ms', '--accent': accent }}>
            <span className={styles.pointBullet} style={{ background: accent }} />
            <span className={styles.pointText}>Xói mòn bản sắc văn hóa: Sự lấn lướt của văn hóa ngoại lai (phim ảnh, lối sống phương Tây) gây ảnh hưởng đến các giá trị truyền thống</span>
          </div>
        </div>

        <div className={styles.imageArea}>
          <img 
            src="https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=600&h=400&fit=crop" 
            alt="Thách thức và rủi ro trong hội nhập kinh tế"
            style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '12px' }}
          />
        </div>
      </div>
    </div>
  )
}
