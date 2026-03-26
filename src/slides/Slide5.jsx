import ImagePlaceholder from '../components/ImagePlaceholder'
import styles from './Slides.module.css'

export default function Slide5() {
  const accent = '#4caf7d'

  return (
    <div className={styles.contentLayout}>
      <div className={styles.header}>
        <div className={styles.slideNumber} style={{ color: accent, borderColor: accent }}>
          05
        </div>
        <div className={styles.headerText}>
          <span className={styles.sectionLabel} style={{ color: accent }}>
            Tích cực
          </span>
          <h2 className={styles.slideTitle}>Tác động tích cực</h2>
        </div>
      </div>

      <div className={styles.body}>
        <div className={styles.points}>
          <div className={styles.point} style={{ '--delay': '0ms', '--accent': accent }}>
            <span className={styles.pointBullet} style={{ background: accent }} />
            <span className={styles.pointText}>Mở rộng thị trường & thương mại: Tận dụng lợi thế từ các hiệp định FTA, EVFTA để xuất khẩu mạnh các mặt hàng chủ lực như dệt may, da giày, nông sản (gạo, cà phê, hạt điều) sang Mỹ, EU, Nhật Bản</span>
          </div>
          <div className={styles.point} style={{ '--delay': '80ms', '--accent': accent }}>
            <span className={styles.pointBullet} style={{ background: accent }} />
            <span className={styles.pointText}>Thu hút nguồn lực quốc tế: Tiếp nhận vốn FDI (đạt khoảng 23,18 tỷ USD năm 2023) và công nghệ hiện đại từ các tập đoàn lớn như Samsung, Intel</span>
          </div>
          <div className={styles.point} style={{ '--delay': '160ms', '--accent': accent }}>
            <span className={styles.pointBullet} style={{ background: accent }} />
            <span className={styles.pointText}>Chuyển dịch cơ cấu kinh tế: Thúc đẩy công nghiệp chế biến, chế tạo, nông nghiệp công nghệ cao và đưa du lịch trở thành ngành kinh tế mũi nhọn</span>
          </div>
          <div className={styles.point} style={{ '--delay': '240ms', '--accent': accent }}>
            <span className={styles.pointBullet} style={{ background: accent }} />
            <span className={styles.pointText}>Nâng cao chất lượng nhân lực: Lao động Việt Nam được đào tạo kỹ năng sản xuất hiện đại và quản lý theo tiêu chuẩn quốc tế thông qua các dự án FDI</span>
          </div>
          <div className={styles.point} style={{ '--delay': '320ms', '--accent': accent }}>
            <span className={styles.pointBullet} style={{ background: accent }} />
            <span className={styles.pointText}>Hội nhập văn hóa - chính trị - an ninh: Quảng bá văn hóa dân tộc, nâng cao vị thế chính trị tại UN, ASEAN và tăng cường hợp tác phòng thủ quốc phòng</span>
          </div>
        </div>

        <div className={styles.imageArea}>
          <ImagePlaceholder label="Hình ảnh: Tác động tích cực" />
        </div>
      </div>
    </div>
  )
}
