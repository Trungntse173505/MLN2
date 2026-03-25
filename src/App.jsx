import React, { useState, useEffect, useCallback } from 'react';
import { 
  Globe, 
  TrendingUp, 
  Lightbulb, 
  ShieldCheck, 
  Layers, 
  ArrowRightLeft, 
  CheckCircle2, 
  AlertTriangle,
  ChevronLeft,
  ChevronRight,
  Target,
  BookOpen,
  PieChart,
  Framer
} from 'lucide-react';

/* --- Shared Components --- */
const TopBar = ({ label, num, total }) => (
  <div className="top-bar">
    <span className="badge">📘 Kinh tế chính trị Mác – Lênin</span>
    {label && <span className="label-text">{label}</span>}
  </div>
);

const Divider = () => <div className="divider" />;

/* --- Slides Content --- */
const Slide1 = () => (
  <div className="slide-inner title-slide">
    <TopBar num={1} total={9} />
    <div className="content-box">
      <div className="pre-title">Chủ đề thảo luận</div>
      <h1 className="main-title">Biên giới mềm trong thời kỳ<br />hội nhập kinh tế quốc tế</h1>
      <div className="subtitle">Tự chủ hay phụ thuộc?</div>
      <Divider />
      <div className="quote-box">
        Trong thời đại toàn cầu hóa, ranh giới giữa các nền kinh tế không còn nằm hoàn toàn ở lãnh thổ mà ngày càng thể hiện qua <span className="hl">công nghệ</span>, <span className="hl">vốn</span> và <span className="hl">năng lực cạnh tranh</span>.
      </div>
      <div className="info-row">
        <div className="info-chip"><span className="label">Học phần:</span> Kinh tế chính trị Mác – Lênin</div>
        <div className="info-chip"><span className="label">Nhóm:</span> _______________</div>
      </div>
    </div>
  </div>
);

const Slide2 = () => {
  const items = ['Vốn đầu tư', 'Công nghệ', 'Chuỗi cung ứng', 'Thị trường tiêu thụ', 'Lao động & tri thức'];
  return (
    <div className="slide-inner">
      <TopBar label="Đặt vấn đề" num={2} total={9} />
      <h2 className="section-title">Toàn cầu hóa và sự xuất hiện<br />của "biên giới mềm"</h2>
      <Divider />
      <div className="grid-2-cols">
        <div className="stack">
          <div className="card">
            <div className="card-header"><Globe className="icon" /> Phụ thuộc lẫn nhau về</div>
            <div className="tag-group">
              {items.map(i => <span key={i} className="tag-pill">{i}</span>)}
            </div>
          </div>
          <div className="card">
            <div className="card-header"><Layers className="icon" /> Đặc trưng biên giới mềm</div>
            <ul className="card-list">
              <li>Ranh giới không còn chỉ là địa lý</li>
              <li>Phụ thuộc vào <strong>năng lực cạnh tranh</strong></li>
            </ul>
          </div>
        </div>
        <div className="highlight-card red-gradient">
          <AlertTriangle className="big-icon" />
          <p>Việt Nam làm thế nào để hội nhập sâu nhưng vẫn giữ được <span>độc lập, tự chủ kinh tế</span>?</p>
        </div>
      </div>
    </div>
  );
}

const Slide3 = () => {
  const fields = ['Thương mại', 'Đầu tư', 'Tài chính', 'KH-CN', 'Lao động'];
  return (
    <div className="slide-inner">
      <TopBar label="Lý luận" num={3} total={9} />
      <h2 className="section-title">Lý luận về hội nhập kinh tế quốc tế</h2>
      <Divider />
      <div className="grid-3-cols">
        <div className="card">
          <div className="card-header"><BookOpen className="icon" /> Định nghĩa</div>
          <p>Quá trình mở rộng quan hệ quốc tế, tham gia phân công lao động và gắn kết với kinh tế toàn cầu.</p>
        </div>
        <div className="card">
          <div className="card-header"><PieChart className="icon" /> Lĩnh vực</div>
          <div className="tag-group">
            {fields.map(f => <span key={f} className="tag-pill green">{f}</span>)}
          </div>
        </div>
        <div className="card gold-border">
          <div className="card-header"><Target className="icon" /> Mục tiêu</div>
          <p>Tận dụng nguồn lực bên ngoài để thúc đẩy phát triển nội lực trong nước.</p>
        </div>
      </div>
    </div>
  );
};

const Slide4 = () => (
  <div className="slide-inner">
    <TopBar label="Tính tất yếu" num={4} total={9} />
    <h2 className="section-title">Tính tất yếu đối với Việt Nam</h2>
    <Divider />
    <div className="grid-3-cols">
      <div className="card">
        <div className="step-num">01</div>
        <h3>Xu thế toàn cầu hóa</h3>
        <p>Liên kết kinh tế là xu hướng không thể đảo ngược.</p>
      </div>
      <div className="card">
        <div className="step-num">02</div>
        <h3>Nhu cầu phát triển</h3>
        <p>Mở rộng thị trường, thu hút vốn và công nghệ.</p>
      </div>
      <div className="card">
        <div className="step-num">03</div>
        <h3>Thúc đẩy CNH-HĐH</h3>
        <p>Tham gia vào chuỗi giá trị toàn cầu sâu rộng.</p>
      </div>
    </div>
    <div className="info-box gold-tint">
      <strong>Cam kết quốc tế:</strong> WTO, ASEAN, CPTPP, RCEP...
    </div>
  </div>
);

const Slide5 = () => (
  <div className="slide-inner">
    <TopBar label="Cơ hội" num={5} total={9} />
    <h2 className="section-title">Tác động: <span className="text-green">Cơ hội</span></h2>
    <Divider />
    <div className="grid-2-cols">
      <div className="card hover-green">
        <TrendingUp className="icon green" />
        <h3>Thị trường & Xuất khẩu</h3>
        <p>Tận dụng các ưu đãi thuế quan để bùng nổ xuất khẩu.</p>
      </div>
      <div className="card hover-green">
        <Lightbulb className="icon green" />
        <h3>Công nghệ & Quản lý</h3>
        <p>Học hỏi kinh nghiệm và tiếp nhận chuyển giao kỹ thuật.</p>
      </div>
    </div>
  </div>
);

const Slide6 = () => (
  <div className="slide-inner">
    <TopBar label="Nguy cơ" num={6} total={9} />
    <h2 className="section-title">Tác động: <span className="text-red">Nguy cơ phụ thuộc</span></h2>
    <Divider />
    <div className="stack">
      <div className="alert-card">
        <AlertTriangle className="icon red" />
        <div>
          <h3>Phụ thuộc công nghệ & vốn</h3>
          <p>Nhiều ngành cốt lõi nằm trong tay nhà đầu tư nước ngoài (FDI).</p>
        </div>
      </div>
      <div className="alert-card">
        <Framer className="icon red" />
        <div>
          <h3>Bẫy giá trị thấp</h3>
          <p>Gia công là chính, giá trị gia tăng thấp trong chuỗi cung ứng.</p>
        </div>
      </div>
    </div>
  </div>
);

const Slide7 = () => (
  <div className="slide-inner">
    <TopBar label="Kinh tế chính trị" num={7} total={9} />
    <h2 className="section-title">Mối quan hệ biện chứng</h2>
    <Divider />
    <div className="dialectic-box">
      <div className="d-item green-glow">Hội nhập quốc tế</div>
      <ArrowRightLeft className="d-arrow" />
      <div className="d-item gold-glow">Độc lập, tự chủ</div>
    </div>
    <div className="quote-box centered">
      "Không đối lập hoàn toàn mà là hai mặt của một quá trình vận động."
    </div>
  </div>
);

const Slide8 = () => (
  <div className="slide-inner">
    <TopBar label="Giải pháp" num={8} total={9} />
    <h2 className="section-title">Điều kiện hội nhập hiệu quả</h2>
    <Divider />
    <div className="grid-2-cols" style={{ gridAutoRows: '1fr' }}>
      <div className="check-item"><CheckCircle2 className="icon gold" /> <span>Xây dựng nội lực sản xuất</span></div>
      <div className="check-item"><CheckCircle2 className="icon gold" /> <span>Đào tạo nhân lực chất lượng</span></div>
      <div className="check-item"><CheckCircle2 className="icon gold" /> <span>Hoàn thiện thể chế pháp lý</span></div>
      <div className="check-item"><CheckCircle2 className="icon gold" /> <span>Phát triển DN trong nước</span></div>
    </div>
  </div>
);

const Slide9 = () => (
  <div className="slide-inner centered">
    <TopBar num={9} total={9} />
    <h2 className="section-title">Kết luận</h2>
    <Divider />
    <div className="concl-card">
      <p>"Biên giới mềm" là thách thức nhưng cũng là vận hội. Việt Nam chỉ có thể vươn tầm khi thực thi song hành hội nhập và tự chủ.</p>
    </div>
    <div className="thanks">Cảm ơn thầy và các bạn đã lắng nghe!</div>
  </div>
);

const SIDEBAR_ITEMS = [
  { id: 0, title: 'Mở đầu', icon: <BookOpen size={18}/> },
  { id: 1, title: 'Đặt vấn đề', icon: <Globe size={18}/> },
  { id: 2, title: 'Lý luận', icon: <Target size={18}/> },
  { id: 3, title: 'Tính tất yếu', icon: <Layers size={18}/> },
  { id: 4, title: 'Cơ hội', icon: <TrendingUp size={18}/> },
  { id: 5, title: 'Nguy cơ', icon: <AlertTriangle size={18}/> },
  { id: 6, title: 'Góc nhìn KTCT', icon: <ArrowRightLeft size={18}/> },
  { id: 7, title: 'Giải pháp', icon: <ShieldCheck size={18}/> },
  { id: 8, title: 'Kết luận', icon: <CheckCircle2 size={18}/> },
];

const SLIDES = [Slide1, Slide2, Slide3, Slide4, Slide5, Slide6, Slide7, Slide8, Slide9];

export default function App() {
  const [cur, setCur] = React.useState(0);
  const [prev, setPrev] = React.useState(null);
  const total = SLIDES.length;

  const go = React.useCallback((idx) => {
    if (idx < 0 || idx >= total || idx === cur) return;
    setPrev(cur);
    setCur(idx);
    setTimeout(() => setPrev(null), 500);
  }, [cur, total]);

  React.useEffect(() => {
    const handler = (e) => {
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown' || e.key === ' ') go(cur + 1);
      if (e.key === 'ArrowLeft'  || e.key === 'ArrowUp')  go(cur - 1);
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [cur, go]);

  return (
    <div className="app-container dashboard-layout">
      {/* Section Indicator Sidebar */}
      <aside className="sidebar">
        <div className="dynamic-titles-container">
          {SIDEBAR_ITEMS.map((item) => (
            <div 
              key={item.id} 
              className={`dynamic-item ${cur === item.id ? 'active' : cur > item.id ? 'prev' : 'next'}`}
            >
              {item.title}
            </div>
          ))}
        </div>
        <div className="sidebar-footer">
          <p>© 2026 Presentation</p>
        </div>
      </aside>

      {/* Content Area Area Area Area */}
      <main className="main-content">
        <div className="slide-bg">
          <div className="grid-bg" />
          <div className="blob b1" />
          <div className="blob b2" />
          <div className="blob b3" />
        </div>

        <div className="slides-viewport">
          {SLIDES.map((SlideComp, i) => (
            <div 
              key={i} 
              className={`slide ${i === cur ? 'active' : i === prev ? 'exit' : ''}`}
            >
              <SlideComp />
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
