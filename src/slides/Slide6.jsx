import ImagePlaceholder from '../components/ImagePlaceholder'
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
          <h2 className={styles.slideTitle}>Tác động tiêu cực</h2>
        </div>
      </div>

      <div className={styles.body}>
        <div className={styles.points}>
          <div className={styles.point} style={{ '--delay': '0ms', '--accent': accent }}>
            <span className={styles.pointBullet} style={{ background: accent }} />
            <span className={styles.pointText}>Áp lực cạnh tranh khốc liệt: Nhiều doanh nghiệp nội địa, đặc biệt là doanh nghiệp vừa và nhỏ, đứng trước nguy cơ phá sản do không thể cạnh tranh về giá và chất lượng với hàng ngoại nhập</span>
          </div>
          <div className={styles.point} style={{ '--delay': '80ms', '--accent': accent }}>
            <span className={styles.pointBullet} style={{ background: accent }} />
            <span className={styles.pointText}>Sự phụ thuộc vào thị trường bên ngoài: Nền kinh tế dễ bị tổn thương trước biến động giá cả thế giới hoặc các rào cản thương mại (như "thẻ vàng" IUU của EU đối với thủy sản)</span>
          </div>
          <div className={styles.point} style={{ '--delay': '160ms', '--accent': accent }}>
            <span className={styles.pointBullet} style={{ background: accent }} />
            <span className={styles.pointText}>Gia tăng khoảng cách giàu nghèo: Lợi ích hội nhập phân phối không đều giữa thành thị và nông thôn, giữa các nhóm xã hội</span>
          </div>
          <div className={styles.point} style={{ '--delay': '240ms', '--accent': accent }}>
            <span className={styles.pointBullet} style={{ background: accent }} />
            <span className={styles.pointText}>Nguy cơ ô nhiễm và "bẫy" giá trị thấp: Dễ trở thành "bãi thải công nghiệp" cho công nghệ lạc hậu và mắc kẹt trong các ngành gia công giá trị gia tăng thấp (như vụ Formosa 2016)</span>
          </div>
          <div className={styles.point} style={{ '--delay': '320ms', '--accent': accent }}>
            <span className={styles.pointBullet} style={{ background: accent }} />
            <span className={styles.pointText}>Thách thức an ninh & văn hóa: Đối mặt với các vụ kiện quốc tế về đầu tư, nguy cơ xói mòn bản sắc văn hóa dân tộc trước sự "xâm lăng" của văn hóa ngoại lai (phim ảnh, lối sống phương Tây, K-pop)</span>
          </div>
        </div>

        <div className={styles.imageArea}>
          <ImagePlaceholder label="Hình ảnh: Tác động tiêu cực" />
        </div>
      </div>
    </div>
  )
}
